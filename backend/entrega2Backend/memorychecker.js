const os = require('os');

console.log(`Tu memoria RAM libre actual es del: ${Math.round(os.freemem() / os.totalmem() * 100)}%`);