import http from "http"; // Módulo nativo de Node
import url from "url";

http
  .createServer(function (request, response) {
    if (request.url === "/favicon.ico") {
      return;
    }

    if (request.url.startsWith("/api/sumar")) {
      response.writeHead(200, { "Content-Type": "application/json" });
      const query = url.parse(request.url, true).query;
      const resultado = Number(query.numeroA) + Number(query.numeroB);
      response.write(JSON.stringify(resultado));
      response.end();
    } else if (request.url.startsWith("/api/restar")) {
      response.writeHead(200, { "Content-Type": "application/json" });
      const query = url.parse(request.url, true).query;
      const resultado = Number(query.numeroA) - Number(query.numeroB);
      response.write(JSON.stringify(resultado));
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.write("Error: Not found");
      response.end();
    }
  })
  .listen(3000); // 3000, 8000 o 8080 están libres
