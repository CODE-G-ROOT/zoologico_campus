import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getFinanzas(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("finanzas");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Finanzas no encontradas" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getFinanzaId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("finanzas");
        const finanzaId = parseInt(req.params.id);

        const finanza = await collection.findOne({ id:finanzaId });

        if (!finanza) {
            return res.status(404).send({ status: 404, message: "Finanzas no encontradas" });
        }

        res.status(200).json(finanza);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};

export async function postFinanzas(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("finanzas");
        let data = req.body;
        const newFin = {
            _id: new ObjectId(),
            ...data,
            fecha: new Date(req.body.fecha),
        };
        await colleccion.insertOne(newFin);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteFinanza(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("finanzas");
        const finanzaId = parseInt(req.params.id);

        const finanza = await colleccion.findOne({ id: finanzaId });

        if (!finanza) {
            return res.status(404).send({ status: 404, message: "finanza no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: finanzaId });
        //console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};