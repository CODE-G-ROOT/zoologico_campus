

# Zoológico - Api de prueba

[Investigación](./assets/REAME.md)

[Despliege](#despliege)

[Uso](#uso)

## Despliege:

Seguir los pasos para le buen funcionamiento de esta herramienta

1. clonar el repo: `git clone: 'https://github.com/JuanDavidAvilaRaveloCampus/zoologico_campus.git'`

2. abrir el archivo almacenado y ubicarse en  `./backend` y correr los siguientes comandos en la terminal: 

   1. `npm update`
   2. `npm run tsc`
   3. `npm run env`

3. Ahora ve al archivo `.env` generado y agrega tus credenciales de **mongodb**

4. ubicarse en el archivo `./backend/DB/db` seleccionar todo y correr la base de datos.

   > ¡**IMPORTANTE!** Para poder realizar este paso es necesario instalarse la extension de **mongodb for vscode**

5. ahora podemos levantar nuestra api con el siguiente comando

   `npm run dev`

6. Habiendo hecho esto te aparecerá en la terminal la url de tu api. Más adelante te explicaremos como usarla.

## Uso:

Para poder acceder a la información almacenada en esta api, es importante tener en cuenta el uso de los token. Para ello necesitamos generar uno para cada colección, pero, ¿como lo hacemos?, es simple, solo sigue los pasos:

1. Copiar la ruta que se imprimió en tu terminal habiendo hecho todos los pasos del despliege

2. Ahora pega la ruta en tu navegador y agrega lo siguiente en la ruta: `/token/[colección]`

   sin que diga colección por su puesto. En lugar de `[colección]` vamos a poner el nombre de la colección a la que quieras acceder, aquí de tejo los nombres, debes escribirlos tal cual como están escritos aquí:

   - animales
   - empleados
   - eventos
   - finanzas
   - historial_mantenimiento
   - historial_medico
   - infraestructura
   - organizaciones

   Habiendo hecho esto y darle en buscar, nuestra api, generará un token, se verá de la siguiente forma: 

   ````
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MCwibm9tYnJlIjoiIiwiYW5pbWFsIjoiIiwiZWRhZCI6MCwiZ2VuZXJvIjoiIiwiaGFiaXRhdF96b28iOjAsImN1aWRhZG9zIjoiIiwicmVsYWNpb25fYW5pbWFsZXMiOiIiLCJlc3RhZG9fc2FsdWQiOiIiLCJoaXN0b3JpYSI6IiIsImludGVyYWNjaW9uX2h1bWFub3MiOiIiLCJlbmxhY2VzX2dlbmV0aWNvcyI6IiIsImlhdCI6MTY5MzgwMjc5MSwiZXhwIjoxNjkzODA0NTkxfQ.VD9kvis4UWYr_KXGYDXy1eOHw02_AWVtcDVzErstQ2Y
   ````

   Copia solo lo que se parezca a eso.

   Ahora ve a tu vscode y utilizando una extensión como **Thunder Client**. Abre la extension, busca la sección de headers, agrega un header que se llame "**Authentication**" y pega el token. Con esto ya puedes acceder a tu colección. 

   Este es el listado de las rutas a las que puedes acceder, pero claro, para cada una de ellas necesitas un token en especifico:

1. **animales** : `/animales`
   1. las siguientes son las sub-rutas a las que puedes acceder, cada una de ellas te da una información diferente
   2. 
2. **empleados**: `/empleado`
3. **eventos**: `/infra`
4. **finanzas**: `/hmant`
5. **historial_mantenimiento**: `/hmed`
6. **historial_medico**: `/eventos`
7. **infraestructura**: `/finanzas`
8. **organizaciones**: `/org`