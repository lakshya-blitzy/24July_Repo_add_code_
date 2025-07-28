#!/usr/bin/env python3
"""
Python Flask Server Tutorial
Maintains exact functional equivalence to the Node.js server implementation

This Flask server provides identical endpoints and behavior to demonstrate
language-agnostic patterns and polyglot capabilities while ensuring 100%
response consistency with the Node.js implementation.
"""

import os
import signal
import sys
from flask import Flask, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv
import logging
from logging.handlers import RotatingFileHandler

# Load environment variables
load_dotenv()

# Flask application setup
app = Flask(__name__)

# Configuration from environment variables
PORT = int(os.getenv('FLASK_PORT', os.getenv('PORT', 3000)))
HOST = os.getenv('FLASK_HOST', os.getenv('HOST', 'localhost'))
DEBUG = os.getenv('FLASK_DEBUG', 'true').lower() == 'true'
ENV = os.getenv('FLASK_ENV', os.getenv('NODE_ENV', 'development'))

# CORS configuration - equivalent to Node.js cors middleware
CORS(app, origins=os.getenv('CORS_ORIGIN', '*'))

# Rate limiting configuration - equivalent to express-rate-limit
limiter = Limiter(
    key_func=get_remote_address,
    app=app,
    default_limits=[
        f"{os.getenv('RATE_LIMIT_MAX_REQUESTS', '100')} per {int(os.getenv('RATE_LIMIT_WINDOW_MS', '900000')) // 1000} seconds"
    ]
)

# Logging configuration - equivalent to winston
if ENV == 'development':
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.StreamHandler(sys.stdout)
        ]
    )
else:
    # Production logging
    if not os.path.exists('logs'):
        os.makedirs('logs')
    
    file_handler = RotatingFileHandler('logs/flask_app.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)

logger = logging.getLogger(__name__)

# Request logging middleware equivalent
@app.before_request
def log_request_info():
    """Log incoming requests - equivalent to Express middleware"""
    logger.info(f"{request.method} {request.url} - {request.remote_addr}")

# Security headers middleware - equivalent to helmet
@app.after_request
def add_security_headers(response):
    """Add security headers equivalent to Helmet.js"""
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    response.headers['X-Powered-By'] = 'Flask Tutorial Server'
    return response

# Route handlers maintaining exact parity with Node.js implementation
@app.route('/hello', methods=['GET'])
def hello():
    """
    Hello endpoint - returns exactly "Hello world" as specified in user example
    Maintains identical behavior to Node.js Express implementation
    """
    return 'Hello world'

@app.route('/good-evening', methods=['GET'])
def good_evening():
    """
    Good evening endpoint - returns exactly "Good evening" as specified in user example
    Maintains identical behavior to Node.js Express implementation
    """
    return 'Good evening'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """
    Default route for backward compatibility - equivalent to Express app.get('*', ...)
    Returns "Hello world" for all unmatched routes to maintain behavioral parity
    """
    return 'Hello world'

# Error handling - equivalent to Express error middleware
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return 'Hello world', 200  # Maintain backward compatibility

@app.errorhandler(500)
def internal_error(error):
    """Handle internal server errors"""
    logger.error(f'Server Error: {error}')
    return 'Internal Server Error', 500

@app.errorhandler(429)
def ratelimit_handler(e):
    """Handle rate limit exceeded"""
    return os.getenv('RATE_LIMIT_MESSAGE', 'Too many requests from this IP'), 429

# Graceful shutdown handling
def signal_handler(sig, frame):
    """Handle graceful shutdown signals"""
    logger.info(f'Received signal {sig}. Gracefully shutting down...')
    logger.info('Flask server closed. Goodbye!')
    sys.exit(0)

# Register signal handlers
signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

if __name__ == '__main__':
    try:
        logger.info(f'Flask server starting on http://{HOST}:{PORT}')
        logger.info(f'Environment: {ENV}')
        logger.info(f'Debug mode: {DEBUG}')
        
        # Start Flask development server
        app.run(
            host=HOST,
            port=PORT,
            debug=DEBUG,
            threaded=True,
            use_reloader=False  # Disable reloader to prevent signal conflicts
        )
        
    except Exception as e:
        logger.error(f'Failed to start Flask server: {e}')
        sys.exit(1)
    except KeyboardInterrupt:
        logger.info('Server interrupted by user')
        sys.exit(0)