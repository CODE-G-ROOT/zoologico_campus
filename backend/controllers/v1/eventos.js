import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEventos(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("eventos");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function postEventos(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("eventos");
        let data = req.body;
        const newEvento = {
            _id: new ObjectId(),
            ...data,
            fecha: new Date(req.body.fecha),
        };
        await colleccion.insertOne(newEvento);
        res.status(201).send({ status:201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};