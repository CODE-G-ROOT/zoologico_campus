<h1 align="center">Zoológico - Api de prueba</h1>

<div align="center">
<img style="border-radius: 50px; cursor: none;" src="https://i0.wp.com/www.admincoding.com/wp-content/uploads/2020/05/APIs-everywhere.jpg?resize=735%2C499&ssl=1" alt="Descripción de la imagen">
</div>

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


			`npm update`
	
			`npm run tsc` Luego de insertar y correr este comando en la terminal, crea una nueva terminal y ubicate de nuevo en la carpeta `./backend`
	
			`npm run env`

3. Ahora ve al archivo `.env` generado y agrega tus credenciales de **mongodb** de la siguiente forma:

		**ATLAS_USER**="[Aquí va tu usuario de mongo]"
		
		**ATLAS_PASSWORD**="[Aquí tu contraseña]"
		
		**ATLAS_DB**="zoologico"
		
		**JWT_PRIVATE_KEY**="cc"
		
		**MY_SERVER**={"hostname":"127.1.1.1","port":5510}

	Si deseas cambiar el host o el puerto puedes configurar la variable de entorno **MY-SERVER** y cambiar los valores que tiene por predeterminados a tu gusto

<br>Listo ahroa que ya tenemos configuradas nuestras variables de entorno con nuestras credenciales de mongodb, ya podemos agregar la base de datos a nuestro mongodb. Para ello vamos a seguir los siguientes pasos:

1. ubicarse en el archivo `./backend/DB/db` seleccionar todo y correr la base de datos.

   > ¡**IMPORTANTE!** Para poder realizar este paso es necesario instalarse la extension de **mongodb for vscode**

2. ahora podemos levantar nuestra api con el siguiente comando

   `npm run dev`

3. Habiendo hecho esto te aparecerá en la terminal la url de tu api. Más adelante te explicaremos como usarla.

   <br> 

## Uso:

> **IMPORTANTE: ** Para poder usar esta api es necesario tener instalada la ultima versión de [node](https://nodejs.org/es) disponible, además se debe tener una cuenta en [mongodb](https://www.mongodb.com/) para poder utilizar la base de datos que alamacena esta API.

Para poder acceder a la información almacenada en esta api, es importante tener en cuenta el uso de los token. Para ello necesitamos generar uno para cada colección, pero, ¿como lo hacemos?, es simple, solo sigue los pasos:

### Generación del token:

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

# Endpoints:

### **animales** 

>  las siguientes son las sub-rutas a las que puedes acceder, cada una de ellas te da una información diferente de la siguiente forma: 
>  http://tushost:4000/animales/all

 **GET** :  `/animales/all`

 **Post** : `/animales/animales`

Para poder realizar un post, se rcomienda seguir el siguiente ejemplo exactamente tal y como está:

**Ejemplo:**

Utilizando **Thunder Client** ingresaremos la siguiente ruta para poder ingresar este documento a la colección ya creada

1. Primero necesitamos crear nuestro Token para la colección de  **Animales**, para ello vamos a acceder al la ruta del sevidor que hemos levantado anteriormente, si no se personalizó será la siguiente: `http://127.1.1.1:5510`, ahora solo debemos agregar la ruta de la colección a la que queremos acceder y agregarle el endpoint que te dirigirá exactamente a donde quieras ir, en este caso vamos a utilizar el post y vamos a enviar el insert que está debajo. Para ello vamos a generar el token con la siguiente dirección: `http://127.1.1.1:5510/token/animales` . El token que se generará se verá de la siguiente forma:
   ````json
   {
   "status": 201,
   "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM4NTg4MjgsImV4cCI6MTY5Mzg2MDYyOH0.jl3ExWdxbQpdKR8Hg6Zunzc_CgUoB79FmtdvBcOWUDk"
   }
   ````

   Ahora solo necesitamos copiar el  valor de "jwt", lo cual es lo que verdaderamente nos interesa, ese es el token. Ahora vamos a ir a los **Headers**, y nos ubicamos en un algún cuadro de los que aparecen ahí, ahora, vamos a escribir en el primero a la ezquierda que esté vacío; **"Authorization"** (sin las comillas claramente), y como valor o en el cuadro que tiene a la derecha, vamos a agregarle el token, y marcamos como check la casilla a la que pertenecen, se debe de ver de la siguiente forma:
   ![image-20230904152552273](./assets/img/data.jpg)

   Habiendo hecho esto, ya tenemos el acceso a la base de datos, ahroa solo queda dirigirnos a los endpoints y buscar lo que quierramos, pero en este caso no hay que olvidar que vamos a insertar un documento, entonces cambiamos el metodo **GET** que tenemos por defecto a el método **POST** y accedemos a la siguiente ruta: `http://127.1.1.1:5510/animales/animales` y en la sección de **body** vamos a insertar el documento que tenemos abajo:

````json
{
    id: 20,
    nombre: "Rocky",
    animal: 'Iguana Verde',
    edad: 2,
    genero: "macho",
    habitat_zoo: 134,
    cuidados: "Requiere un ambiente tropical y una dieta de vegetales...",
    relacion_animales: "Rocky vive en un terrario junto a otras iguanas...",
    estado_salud: "Bueno",
    historia: "Rocky fue donado al zoológico por un criador local...",
    interaccion_humanos: "Rocky es tranquilo y se acostumbra a la presencia humana...",
    enlaces_geneticos: "Estudios genéticos han proporcionado información...",
    detalles: {
      nombre_cientifico: "Iguana iguana",
      clase: "Reptil",
      raza: "Verde",
      especie: "Iguana",
      tipo_animal: "Herbívoro",
      invertebrado: false,
      vertebrado: true,
      tipo_habitat: "Selvas y bosques tropicales",
      distribicion_geografica: {
        habitat_natural: "América Central y Sudamérica",
        region_geografica: "América",
        pais: ["México", "Costa Rica", "Brasil"],
        continente: "América",
        ecosistema: "Selvas y bosques tropicales"
      },
      comportamiento: "Las iguanas verdes son animales solitarios...",
      estado_conservacion: "Preocupación Menor",
      depredadores: ["Depredadores naturales"],
      alimento_principal: ["Vegetales", "Frutas"],
      curiosidades: "Las iguanas verdes son reptiles de sangre fría que pueden regular su temperatura...",
      amenazas: ["Depredadores naturales", "Tráfico de mascotas"],
      relacion_con_humanos: "Las iguanas verdes son populares en el comercio de mascotas...",
      importancia_ecologica: "Media",
      origen: "América Central y Sudamérica"
    }
  }
````

Bien hecho, si vez, es facil. Ahora ya sabes como insertar datos, si quieres insertar datos personalizados, te recomiendo que analices muy bien la estructura del insert y sus tipos de datos, ya que pueden que te den un dolor de cabeza.

#  <br>

>  las siguientes son las sub-rutas a las que puedes acceder, cada una de ellas te da una información diferente de la siguiente forma: http://tushost:4000/animales/animales

**GET** 

-`/animales`:Obtener todos los animales registrados
-`/animales/:id`: Obtiene el animal con ese ID

**POST**

-`/animales`:crear una nueva entidad animal 
Claro, aquí tienes la tabla para tu README.md con las variables y sus tipos de datos:

| **Campo**           | Tipo de dato     |
| ------------------- | ---------------- |
| id                  | Number (32 bits) |
| nombre_animal       | String           |
| animal              | String           |
| edad_animal         | Number           |
| genero_animal       | String           |
| habitat_zoo         | Number           |
| cuidados            | String           |
| relacion_animales   | String           |
| estado_salud        | String           |
| historia            | String           |
| interaccion_humanos | String           |
| enlaces_geneticos   | String           |

Puedes copiar y pegar esta tabla en tu README.md y reemplazar los nombres de las variables y los tipos de datos según sea necesario. Esto ayudará a los usuarios de tu API a comprender la estructura de los datos que deben enviar o recibir al interactuar con ella.

**DELETE**

-`/animales/:id`: Elimina el animal con ese ID
<br>

<hr>

### **empleados**: `/empleado

**GET**: 

`/empl`: Obtiene toda la informacíón de la api

`/empl/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/empl` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

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

Al igual que en la explicación de como hacer un insert en la colección de animales, aquí vamos a hacer exactemente lo mismo, si no sabes de qué hablamos puedes acceder a esta [información](#animales)  Realizando el mismo proceso, aquí está el dato que puedes insertar para ponder a pruea la api:

**Ejemplo:**

````json
  {
    id: 10,
    nombre_completo: "María López",
    cc: 987654321,
    cargo: "Diseñador de Interiores",
    fecha_contratacion: new Date("2023-09-05"),
    salario: 2900.25,
    especialidad: "Diseño de espacios",
    telefono: 789123654,
    email: "maria@example.com"
  }
````



**PUT**

`/empl/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

Pongamoslo a prueba actulizando el valor que acabamos de insertar:

Luego de haber realizado el paso del token, vamos a insertar este enpoint en la url:  

`http://127.1.1.1:5510/empleado/empl/64f5db3b262069ac015c5e57`

````json
  {
    id: 99,
    nombre_completo: "Naguara",
    cc: 987654321,
   	cargo: "Senior",
    fecha_contratacion: new Date("2023-09-05"),
    salario: 2900.25,
    especialidad: "html",
    telefono: 6666666666,
    email: "naguara@maduro.com"
  }
````



**DELETE**

`/empl/:id` Elimina un documento en específico por medio de su identificador

Eliminemos un dato el dato: `64f5db3b262069ac015c5e52`

Ya no es necesario decir como funciona la ruta, si aún no entienes, te recomiendo que te devuelvas a los pasos anteriores

<br>

<hr>

### **eventos**: `/eventos`

**GET**: 

`/infra`: Obtiene toda la informacíón de la api

`/infra/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/infra` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**              | Tipo de dato     |
| ---------------------- | ---------------- |
| id                     | Number (32 bits) |
| nombre                 | string           |
| descripcion            | string           |
| horario                | object           |
| animales_participantes | array o null     |

**Ejemplo**: 

````json
{
  "id": 5,
  "nombre": "Festival de la Primavera",
  "descripcion": "Celebra la llegada de la primavera con actividades para toda la familia.",
  "encargado": "Pedro Martínez",
  "horario": {
    "dias": "Todos los Días",
    "hora": "9:00 AM - 6:00 PM"
  },
  "animales_participantes": [
    "Pavos Reales",
    "Mariposas Monarca",
    "Conejos"
  ]
}
````



**PUT**

`/infra/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

`/infra/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>



### **finanzas**: `/finanzas`

**GET**: 

`/finanzas`: Obtiene toda la informacíón de la api

`/finanzas/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/finanzas` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**   | Tipo de dato     |
| ----------- | ---------------- |
| id          | Number (32 bits) |
| tipo        | String           |
| descripcion | string           |
| cantidad    | Number           |
| fecha       | ISODate          |

**PUT**

`/finanzas/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

`/finanzas/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr> 



### **historial_mantenimiento**: `/hmant`

**GET**: 

`/hmant`: Obtiene toda la informacíón de la api

`/hmant/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/empl` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**       | Tipo de dato     |
| --------------- | ---------------- |
| id              | Number (32 bits) |
| area            | String           |
| nombre_empleado | string           |
| descripcion     | string           |
| fecha           | ISODate          |

**PUT**

`/hmant/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

`/hmant/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>  



### **historial_medico**: `/hmed`

**GET**: 

`/hmed`: Obtiene toda la informacíón de la api

`/hmed/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/hmed` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**          | Tipo de dato     |
| ------------------ | ---------------- |
| id                 | Number (32 bits) |
| nombre_animal      | String           |
| nombre_veterinario | string           |
| descripcion        | Number           |
| fecha              | ISODate          |

**PUT**

`/hmed/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

`/hmant/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

### **infraestructura**: `/infra`

**GET**: 

`/infra`: Obtiene toda la informacíón de la api

`/infra/:id ` Realiza una consulta a un documento a un documento en específico por medio de su identificador

**POST**

`/infra` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**   | Tipo de dato     |
| ----------- | ---------------- |
| id          | Number (32 bits) |
| tipo        | String           |
| descripcion | string           |
| cantidad    | Number           |
| fecha       | ISODate          |

**PUT**

`/infra/:id` Acualiza un documento, para ello necesitas agregar el campo que deseas actualizar y su nuevo valor

**DELETE**

`/infra/:id` Elimina un documento en específico por medio de su identificador

<br>

<hr>

### **organizaciones**: `/org`

**GET**: 

`/org`: Obtiene toda la informacíón de la api

`/org/:id`

Este endpoint permite consultar una organización específica por su identificador (ID).

- `/org/:id`: Este endpoint permite consultar una organización específica por su identificador (ID).

**POST**

- `/org` : Agrega un documento a la api, este documento debe cumplir con los siguientes parámetros para esta colección:

| **Campo**   | Tipo de dato     |
| ----------- | ---------------- |
| id          | Number (32 bits) |
| tipo        | String           |
| descripcion | string           |
| cantidad    | Number           |
| fecha       | ISODate          |

**DELETE** `/org/:id`:Este endpoint permite eliminar una organización específica por su identificador (ID).


- **DELETE** 

-`/org/:id`:Este endpoint permite eliminar una organización específica por su identificador (ID).

<br>

**TABLA BASE DE DATOS**

![diagrama zoologico](./assets/img/primer_diagrama.png)

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