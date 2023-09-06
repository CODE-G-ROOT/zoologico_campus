import { con } from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getAnimales_busqueda_simple(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");
        console.log(colleccion);

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: "$habitat"
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
        .sort({ id: 1 })
        .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_id(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.id;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: { id: `${query}` }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();;

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_name(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.name;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    $and: [
                        {
                            $regex: {
                                "nombre": `/${query}/i`
                            }
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_animal(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.animal;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    $and: [
                        {
                            $regex: {
                                "animal": `/${query}/i`
                            }
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_edad(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = parseInt(req.params.edad);

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    edad: {
                        $gte: query
                    }
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_genero(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.gen;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    $and: [
                        {
                            $regex: {
                                "genero": `/${query}/i`
                            }
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_habitat_zoo(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.habitad;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    $and: [
                        {
                            $regex: {
                                "habitat_zoo": `/${query}/i`
                            }
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_simple_Salud(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.salud;

        let results = await colleccion.aggregate([
            {
                $lookup: {
                    from: "infraestructura",
                    localField: "habitat_zoo",
                    foreignField: "id",
                    as: "habitat"
                }
            },
            {
                $unwind: $habitat
            },
            {
                $match: {
                    $and: [
                        {
                            $regex: {
                                "estado_salud": `/${query}/i`
                            }
                        }
                    ]
                }
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    animal: { $first: "$animal" },
                    edad: { $first: "$edad" },
                    genero: { $first: "$genero" },
                    habitat_zoo: { $addToSet: "$habitat" },
                    cuidados: { $first: "$cuidados" },
                    relacion_animales: { $first: "$relacion_animales" },
                    estado_salud: { $first: "$estado_salud" },
                    historia: { $first: "$historia" },
                    interaccion_humanos: { $first: "$interaccion_humanos" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    animal: 1,
                    edad: 1,
                    genero: 1,
                    habitat_zoo: "$habitat",
                    cuidados: 1,
                    relacion_animales: 1,
                    estado_salud: 1,
                    historia: 1,
                    interaccion_humanos: 1,
                }
            }
        ])
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        // let query = req.params.animal;

        let results = await colleccion.find({})
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_id(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.id;

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.nombre_cientifico": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_clase(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.clase;

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.clase": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_raza(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.raza;

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.raza": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_especie(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.espe;

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.especie": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_tipo_animal(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.tipo;

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.tipo_animal": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_vertebrado(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.vertebrado;
        if (query != (true || false)) {
            return res.status(404).send({
                status: 404, message: "Param not found"
            })
        };

        let results = await colleccion.use('zoologico');
        db.animales.find({
            "detalles.vertebrado": {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_tipo_habitad(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.tipo_habitad;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.tipo_habitat": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_habitad_natual(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.habi_nat;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.distribicion_geografica.habitat_natural": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_region_geografica(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.reg_geo;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.distribicion_geografica.region_geografica": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_pais(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.pais;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.distribicion_geografica.pais": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_continente(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.cont;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.distribicion_geografica.continente": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_ecosistema(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.eco;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.estado_conservacion": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_estado_conservacion(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.est_conser;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.estado_conservacion": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_estado_depredadores(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.dep;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.depredadores": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_alimento_principal(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.ali_prin;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.alimento_principal": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_importancia_ecologica(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.impor_eco;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.importancia_ecologica": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimales_busqueda_Avanzada_origen(req, res) {ge
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("animales");

        let query = req.params.ori;

        let results = await colleccion.use('zoologico');
        db.animales.find({ "detalles.origen": {
            $regex: `/${query}/i`
        } })
            .sort({ id: 1 })
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}



export async function postAnimales(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("animales");
        let data = req.body;
        const newAnimal = {
            _id: new ObjectId(),
            ...data,
            nombre: req.body.nombre,
            animal: req.body.animal
        };
        await colleccion.insertOne(newAnimal);
        res.status(201).send({ status: 201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};