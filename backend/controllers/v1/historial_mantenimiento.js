import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getHM(req, res) {
    try {
        let db = await con();
        
        let colleccion = db.collection("historial_mantenimiento");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "historial mantenimiento no encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getHMId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("historial_mantenimiento");
        const HMId = parseInt(req.params.id);

        const HM = await collection.findOne({ id:HMId });

        if (!HM) {
            return res.status(404).send({ status: 404, message: "historial mantenimiento no encontrado" });
        }

        res.status(200).json(HM);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};
export async function postHM(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historial_mantenimiento");
        let data = req.body;
        const newHmant = {
            _id: new ObjectId(),
            ...data,
        };
        await colleccion.insertOne(newHmant);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteHM(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historial_mantenimiento");
        const hmId = parseInt(req.params.id);

        const hmant = await colleccion.findOne({ id: hmId });

        if (!hmant) {
            return res.status(404).send({ status: 404, message: "historial mantenimiento no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: hmId });
        
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};