/**
 * Node.js HTTP Server Tutorial
 * Main server implementation with progressive enhancement capabilities
 *
 * Phase 1: Basic HTTP server using core Node.js http module
 * Phase 2: Express.js framework integration with enhanced routing
 * Phase 3: Production enhancement with middleware, logging, and security
 */

// Load environment variables
require('dotenv').config();

// Core Node.js modules
const http = require('http');
const process = require('process');

// Express framework and middleware (for progressive enhancement)
let express, helmet, cors, rateLimit, compression, bodyParser, winston;
try {
  express = require('express');
  helmet = require('helmet');
  cors = require('cors');
  rateLimit = require('express-rate-limit');
  compression = require('compression');
  bodyParser = require('body-parser');
  winston = require('winston');
} catch (error) {
  console.log('Express dependencies not yet installed, using core HTTP module');
}

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Logger setup (if winston is available)
let logger;
if (winston) {
  logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.errors({ stack: true }),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.simple()
      })
    ]
  });
} else {
  logger = console;
}

/**
 * Phase 1: Basic HTTP Server Implementation
 * Using Node.js core http module for initial tutorial phase
 */
function createBasicHttpServer() {
  const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'X-Powered-By': 'Node.js Tutorial Server'
    });

    // For now, all routes return "Hello world" as specified in user example
    res.end('Hello world');
  });

  return server;
}

/**
 * Phase 2: Express.js Enhanced Server Implementation
 * Progressive enhancement with Express framework and routing
 */
function createExpressServer() {
  if (!express) {
    throw new Error('Express.js not available');
  }

  const app = express();

  // Basic middleware setup
  if (helmet) app.use(helmet());
  if (cors) app.use(cors());
  if (compression) app.use(compression());
  if (bodyParser) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  // Rate limiting
  if (rateLimit) {
    const limiter = rateLimit({
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
      max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
      message: process.env.RATE_LIMIT_MESSAGE || 'Too many requests from this IP'
    });
    app.use(limiter);
  }

  // Request logging middleware
  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url} - ${req.ip}`);
    next();
  });

  // Route handlers as specified in user examples
  app.get('/hello', (req, res) => {
    res.send('Hello world');
  });

  app.get('/good-evening', (req, res) => {
    res.send('Good evening');
  });

  // Default route for backward compatibility
  app.get('*', (req, res) => {
    res.send('Hello world');
  });

  // Error handling middleware
  app.use((err, req, res, next) => {
    logger.error('Error:', err);
    
    // Handle JSON parsing errors
    if (err.type === 'entity.parse.failed') {
      return res.status(400).send('Bad Request');
    }
    
    // Handle other errors
    res.status(500).send('Internal Server Error');
  });

  return app;
}

/**
 * Create and return the appropriate server instance
 */
function createServer() {
  if (express) {
    return createExpressServer();
  } else {
    return createBasicHttpServer();
  }
}

/**
 * Start the server (only if not in test environment)
 */
let server;

function startServer() {
  try {
    const app = createServer();
    
    if (express) {
      // Express app
      server = app.listen(PORT, HOST, () => {
        logger.info(`Express server running on http://${HOST}:${PORT}`);
        logger.info(`Environment: ${NODE_ENV}`);
      });
    } else {
      // Basic HTTP server
      server = app;
      server.listen(PORT, HOST, () => {
        logger.info(`Basic HTTP server running on http://${HOST}:${PORT}`);
        logger.info(`Environment: ${NODE_ENV}`);
      });
    }
    
    return server;
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Only start server if not in test environment
if (NODE_ENV !== 'test') {
  startServer();
}

/**
 * Graceful shutdown handling
 */
function gracefulShutdown(signal) {
  logger.info(`Received ${signal}. Gracefully shutting down...`);

  server.close(() => {
    logger.info('Server closed. Goodbye!');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 10000);
}

// Handle process signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Export both app and server for different use cases
module.exports = {
  app: createServer(),
  server: server,
  startServer: startServer,
  createServer: createServer
};
