import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getHMed(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("historial_medico");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function postHMed(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historial_medico");
        let data = req.body;
        const newHmed = {
            _id: new ObjectId(),
            ...data,
            fecha: new Date(req.body.fecha),
        };
        await colleccion.insertOne(newHmed);
        res.status(201).send({ status:201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};