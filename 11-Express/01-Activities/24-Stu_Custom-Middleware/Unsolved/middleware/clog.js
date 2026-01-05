/**
 * Custom middleware that logs the method + path for each request.
 * The main lesson: middleware runs ONLY if it is registered with `app.use(...)`.
 */
const clog = (req, res, next) => {
  const fgCyan = '\x1b[36m';
  const reset = '\x1b[0m';

  const timestamp = new Date().toISOString();

  switch (req.method) {
    case 'GET': {
      console.info(`📗 ${fgCyan}[${timestamp}] ${req.method} ${req.path}${reset}`);
      break;
    }
    case 'POST': {
      console.info(`📘 ${fgCyan}[${timestamp}] ${req.method} ${req.path}${reset}`);
      break;
    }
    default:
      console.log(`📙 ${fgCyan}[${timestamp}] ${req.method} ${req.path}${reset}`);
  }

  next();
};

exports.clog = clog;
