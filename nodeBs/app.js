const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Enviar</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Minha Pagina</title></head>');
  res.write('<body><h1>Olá seja bem vindo</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);