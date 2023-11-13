const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  const { x, y } = query;

  if (pathname === '/add') {
    const result = parseFloat(x) + parseFloat(y);
    res.end(`Addition result: ${result}`);
  }

  else if (pathname === '/subtract') {
    const result = parseFloat(x) - parseFloat(y);
    res.end(`Subtraction result: ${result}`);
  }

  else if (pathname === '/multiply') {
    const result = parseFloat(x) * parseFloat(y);
    res.end(`Multiplication result: ${result}`);
  }

  else if (pathname === '/divide') {
    if (parseFloat(y) === 0)
      res.end('You cannot divide by zero!!!');
    else {
      const result = parseFloat(x) / parseFloat(y);
      res.end(`Division result: ${result}`);
    }
  }

  else
    res.end('404 Page does not exist.');

});

const port = 3000;
server.listen(port, () => {
  console.log(`The server runs on http://localhost:${port}`);
});
