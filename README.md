

# Zoológico - Api de prueba

![Become an API expert while creating some epic memes - Admin coding](https://i0.wp.com/www.admincoding.com/wp-content/uploads/2020/05/APIs-everywhere.jpg?resize=735%2C499&ssl=1)

Esta API de Zoológico de Prueba es una herramienta diseñada para simular el funcionamiento básico de un zoológico. Permite a los desarrolladores experimentar con la gestión de animales, hábitats y visitantes en un  entorno controlado y ficticio.

## Menú

[Investigación](./assets/readme/README.md)

[Despliege](#despliege)

[Uso](#uso)

[¿Cómo utilizar los métodos?](#¿cómo-utilizar-los-métodos?)

<br>

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

   <br>

   #### 

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

<br>

<hr>

#### 

### **animales** : `/animales`

>  las siguientes son las sub-rutas a las que puedes acceder, cada una de ellas te da una información diferente de la siguiente forma: http://tushost:4000/animales/all

​	**GET** :  `/all`

​	**Post** : `/animales`

<br>

<hr>

### **empleados**: `/empleado`

**GET**: 

- `/empl`: Obtiene toda la informacíón de la api
- `/empl/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/empl` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**          | Tipo de dato                               |
  | ------------------ | ------------------------------------------ |
  | id                 | Number (32 bits)                           |
  | nombre_completo    | String                                     |
  | cc                 | Number ( 32 bits)                          |
  | cargo              | String                                     |
  | fecha_contratacion | IsoDate: **ejem**: new Date("2023-07-15"), |
  | salario            | Double                                     |
  | especialidad       | String                                     |
  | telefono           | Int o Null                                 |
  | email              | String o Null                              |

**PUT**

- `/empl/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/empl/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

#### 

### **eventos**: `/eventos`

**GET**: 

- `/infra`: Obtiene toda la informacíón de la api
- `/infra/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/infra` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**              | Tipo de dato     |
  | ---------------------- | ---------------- |
  | id                     | Number (32 bits) |
  | nombre                 | string           |
  | descripcion            | string           |
  | horario                | object           |
  | animales_participantes | array o null     |

**PUT**

- `/infra/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/infra/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

#### 

### **finanzas**: `/finanzas`

**GET**: 

- `/finanzas`: Obtiene toda la informacíón de la api
- `/finanzas/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/finanzas` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**   | Tipo de dato     |
  | ----------- | ---------------- |
  | id          | Number (32 bits) |
  | tipo        | String           |
  | descripcion | string           |
  | cantidad    | Number           |
  | fecha       | ISODate          |

**PUT**

- `/finanzas/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/finanzas/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

#### 

### **historial_mantenimiento**: `/hmant`

**GET**: 

- `/hmant`: Obtiene toda la informacíón de la api
- `/hmant/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/empl` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**       | Tipo de dato     |
  | --------------- | ---------------- |
  | id              | Number (32 bits) |
  | area            | String           |
  | nombre_empleado | string           |
  | descripcion     | string           |
  | fecha           | ISODate          |

**PUT**

- `/hmant/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/hmant/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

#### 

### **historial_medico**: `/hmed`

**GET**: 

- `/hmed`: Obtiene toda la informacíón de la api
- `/hmed/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/hmed` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**          | Tipo de dato     |
  | ------------------ | ---------------- |
  | id                 | Number (32 bits) |
  | nombre_animal      | String           |
  | nombre_veterinario | string           |
  | descripcion        | Number           |
  | fecha              | ISODate          |

**PUT**

- `/hmed/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/hmant/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

#### 

### **infraestructura**: `/infra`

**GET**: 

- `/infra`: Obtiene toda la informacíón de la api
- `/infra/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

- `/infra` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**   | Tipo de dato     |
  | ----------- | ---------------- |
  | id          | Number (32 bits) |
  | tipo        | String           |
  | descripcion | string           |
  | cantidad    | Number           |
  | fecha       | ISODate          |

**PUT**

- `/infra/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

-  `/infra/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

### **organizaciones**: `/org`

**GET**: 

- `/org`: Obtiene toda la informacíón de la api

**POST**

- `/empl` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

  | **Campo**   | Tipo de dato     |
  | ----------- | ---------------- |
  | id          | Number (32 bits) |
  | tipo        | String           |
  | descripcion | string           |
  | cantidad    | Number           |
  | fecha       | ISODate          |

<br>

<br>

<hr>

# ¿Cómo utilizar los métodos?

**Get** Para utilizar el metodo Get es muy facil, simplemente es pararte en la selección de tipo de consulta y donde está la [flechita](/home/dev/snap/typora/82/.config/Typora/typora-user-images/image-20230904001435724.png) seleccionas el tipo de metodo que deseas utilizar, en este caso es el metodo **GET** el cual es el que más se usa para optener información

![image-20230904001435724](./assets/img/readme.png)

**POST**: Para utilizar el metodo post también es muy simple, para ello primero hay que conocer como están construidos o apodados los campos de los documentos de la colección a la que deseas insertar el documento valga la redundacia. Para ello vamos a tomar el ejemplo de historial de mantenimiento: Esta colección tiene los siguientes datos:

| CAMPO       | TIPO-DE-DATO       |
| ----------- | ------------------ |
| id          | Interger (32 bits) |
| area        | string             |
| descripcion | string             |
| fecha       | ISODate            |
| nombre      | string             |

Teniendo esto en cuenta ahora vamos a insertar los datos en el **"body"** de la misma forma que está en la tabla, sin embargo hay que tener en cuenta que:

1. Debemos remplazar los "tipos de dato" por un dato que cumpla con la condición
2. La inserción de datos debe estar encapsulada como un JSON

Habiendo hecho esto ya podemos enviar la data, si esta está bien estructurada y todos los campos cumples los requerimientos, pasarán perfectamente, si no, te saldrá un error, suerte



**UPDATE**: Para utilzar este meto es muy simple, solo necesitamos dos cosas, el identificador del documento que se a actualzar y el campo o los campos a los que queremos agregares o cambiarles los datos que tienen. Claro, cumpliendo con las restricciones explicadas en el punto anterior

**DELETE**: Este es el más facil de todos, pero **¡OJO! ** Hay que tener cuidado, si lo utilzas mal, perderás toda la informacíon de dicho documento. Pero bueno, para utilizarso solo basta con agregar el identificador único del documento que se desee eliminar, y listo, esto es todo amigos, hasta la próxima....