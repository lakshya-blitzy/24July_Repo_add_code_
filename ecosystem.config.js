/**
 * PM2 Process Management Configuration
 * Production deployment with process monitoring, clustering, and automatic restart
 */

module.exports = {
  apps: [
    {
      name: 'nodejs-http-server-tutorial',
      script: 'server.js',
      instances: process.env.PM2_INSTANCES || 'max',
      exec_mode: process.env.PM2_EXEC_MODE || 'cluster',

      // Environment variables
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        HOST: 'localhost'
      },

      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
        HOST: process.env.HOST || '0.0.0.0'
      },

      // Logging configuration
      log_file: 'logs/combined.log',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

      // Memory and restart configuration
      max_memory_restart: process.env.PM2_MAX_MEMORY_RESTART || '300M',
      restart_delay: parseInt(process.env.PM2_RESTART_DELAY) || 4000,
      max_restarts: 10,
      min_uptime: '10s',

      // Monitoring
      watch: false,
      ignore_watch: [
        'node_modules',
        'logs',
        'coverage',
        '.git'
      ],

      // Advanced settings
      kill_timeout: 5000,
      listen_timeout: 3000,
      source_map_support: true,
      instance_var: 'INSTANCE_ID',

      // Graceful shutdown
      kill_signal: 'SIGTERM',

      // Autorestart configuration
      autorestart: true,
      cron_restart: false,

      // Merge logs from all instances
      merge_logs: true,

      // Time zone
      time: true
    }
  ],

  // Deployment configuration (optional)
  deploy: {
    production: {
      user: 'deploy',
      host: ['production-server'],
      ref: 'origin/main',
      repo: 'git@github.com:username/nodejs-http-server-tutorial.git',
      path: '/var/www/nodejs-http-server-tutorial',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
