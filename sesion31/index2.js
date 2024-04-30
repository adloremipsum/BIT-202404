import http from "http"; // Módulo nativo de Node
import url from "url";

function crearResponse(request, response, status, body) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(body);
  response.end();
}

http
  .createServer(function (request, response) {
    if (request.url === "/favicon.ico") return;

    const urlRecibida = request.url;

    if (urlRecibida.startsWith("/api/sumar")) {
      const query = url.parse(urlRecibida, true).query;
      const resultadoJSON = JSON.stringify(
        Number(query.numeroA) + Number(query.numeroB)
      );
      crearResponse(request, response, 200, resultadoJSON);
    } else if (urlRecibida.startsWith("/api/restar")) {
      const query = url.parse(urlRecibida, true).query;
      const resultadoJSON = JSON.stringify(
        Number(query.numeroA) - Number(query.numeroB)
      );

      crearResponse(request, response, 200, resultadoJSON);
    } else {
      response.writeHead(404, { "Content-Type": "application/json" });
      response.write("Error: Not found");
      response.end();
    }
  })
  .listen(3000); // 3000, 8000 o 8080 están libres
