import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getInfra(req, res) {
    try {
        let db = await con();

        let colleccion = db.collection("infraestructura");
        let results = await colleccion.find({}).toArray();

        results.length > 0 
            ? res.send(results).status(200) 
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getInfraId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("infraestructura");
        const infraId = parseInt(req.params.id);

        const infra = await collection.findOne({ id:infraId });

        if (!infra) {
            return res.status(404).send({ status: 404, message: "infraestructura no encontrada" });
        }

        res.status(200).json(infra);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};

export async function postInfra(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("infraestructura");
        let data = req.body;
        const newInfra = {
            _id: new ObjectId(),
            ...data,
            fecha: new Date(req.body.fecha),
        };
        await colleccion.insertOne(newInfra);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteInfra(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("infraestructura");
        const infraId = parseInt(req.params.id);

        const infra = await colleccion.findOne({ id: infraId });

        if (!infra) {
            return res.status(404).send({ status: 404, message: "infraestructura no encontrada" });
        }

        const deletionResult = await colleccion.deleteOne({ id: infraId });
        
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};