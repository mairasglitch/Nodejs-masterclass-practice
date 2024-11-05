let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);

//or

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  console.log(headers, url, method);
  res.end();
});

const PORT = 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
