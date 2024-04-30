## Inicio de proyecto base con Express

1. Crear un archivo server.js (index.js).
2. Inicializar NPM `npm init -y`.
3. Una vez creado el archivo `package.json`, vamos a agregar una nueva propiedad llamada "type" con el valor "module". Esto nos va a permitir poder utilizar las palabras reservadas `import` y `export`.
4. Instalar express en el proyecto `npm install express --save`.
5. Importamos express a nuestro archivo principal `import express from "express"`.
6. Ejecutamos la funcion `express()` y guardamos su retorno en la variable `app`
7. Antes de seguir escribiendo las rutas, es recomendable que pongamos una línea final que ponga el servidor en escucha en el puerto deseado (3000, 8000, 8080): `app.listen(3000, () => console.log("Servidor corriendo..."))`.

---

8. Nos dedicamos a escribir las diferentes rutas que vamos a admitir. Gracias a el método `.get` de `app`, podemos escribir una ruta:
   - Primer parámetro: un `string` que señale la ruta ("/", "/api/sumar")
   - Segundo parámetro: la funcion que se ejecutará al recibir dicho pedido (incluir los parámetros `request` y `response`)
9. LISTO!

## Apuntes

- Acceder a información enviada a través de query string -> request.query
- Acceder a los valores que se pasan a las rutas parametrizadas -> request.params
