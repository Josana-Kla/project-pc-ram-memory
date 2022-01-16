const http = require('http');
const host = 'http://localhost';
const port = 3000;
const status = require('./pcRamUsage.js');

http.createServer((req, res) => {
  let url = req.url;

  if (url === '/stats') {
    res.end(JSON.stringify(status, null, 2));
  } else {
    res.end(`<h1>Welcome!</h1>`);
  }
  
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));