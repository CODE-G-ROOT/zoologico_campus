import { con } from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEventos(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_id(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = parseInt(req.params.id);

        db.eventos.find({
            id: query
        })
            .sort({ id: 1 })
            .limit(25)
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_nombre_show(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = req.params.name;

        db.eventos.find({
            nombre: {
                $regex: `/${query}/i` //Cambiar show por el nombre que se desee buscar
            }
        })
            .sort({ id: 1 })
            .limit(25)
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_encargado(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = req.params.encarg;

        db.eventos.find({
            encargado: {
                $regex: `/${query}/i` //Cambiar "domingo por el encargado que se desee buscar"
            }
        })
            .sort({ id: 1 })
            .limit(25)
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_horario_dias(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = {
            h: req.params.h, //hora formato HH/MM AM|PM
            m: req.params.m, //minuto 
            d: req.params.d, //am o pm
            d_s: req.params.d_s //dia de la semana
        }

        db.eventos.find({
            "horario.dias": {
                $regex: `/${query.d_s}/i` //Cambiar "Domingos por el dia que se busque"
            },
            "horario.hora": {
                $regex: `/${query.h}:${query.m} ${query.d}/i` //Cambiar La hora
            }
        })
            .sort({ id: 1 })
            .limit(25)
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_animales_participantes(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = req.params.ani_p;

        db.eventos.find({
            animales_participantes: {
                $regex: `/${query}/i`
            }
        })
            .sort({ id: 1 })
            .limit(25)
            .toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};

export async function getEventos_animales_participantes_grupo(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("eventos");
        let results = await colleccion.use('zoologico');
        let query = [req.params.ani_p, req.params.ani_p2]

        if (query[0].length > 0 && query[1].length > 0 && query[2].length > 0) {
            db.eventos.find({
                animales_participantes: {
                    $regex: `/${query[0]}|${query[1]}|${query[2]}/i`
                }
            })
                .sort({ id: 1 })
                .limit(25)
                .toArray();

            return results.length > 0
                ? res.send(results).status(200)
                : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
        }

        else if (query[0].length > 0 && query[1].length > 0) {
            db.eventos.find({
                animales_participantes: {
                    $regex: `/${query[0]}|${query[1]}}/i`
                }
            })
                .sort({ id: 1 })
                .limit(25)
                .toArray();

            return results.length > 0
                ? res.send(results).status(200)
                : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
        }

        else if (query[0].length > 0 && query[1].length > 0 && query[2].length > 0) {
            db.eventos.find({
                animales_participantes: {
                    $regex: `/${query[0]}|${query[1]}|${query[2]}/i`
                }
            })
                .sort({ id: 1 })
                .limit(25)
                .toArray();

            return results.length > 0
                ? res.send(results).status(200)
                : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
        }



    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};




































export async function postEventos(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("eventos");
        let data = req.body;
        const newEvento = {
            _id: new ObjectId(),
            ...data,
            fecha: new Date(req.body.fecha),
        };
        await colleccion.insertOne(newEvento);
        res.status(201).send({ status: 201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};