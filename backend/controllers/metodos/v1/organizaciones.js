import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getOrg(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("organizaciones");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "organizaciones no encontradas" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getOrgId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("organizaciones");
        const orgId = parseInt(req.params.id);

        const org = await collection.findOne({ id:orgId });

        if (!org) {
            return res.status(404).send({ status: 404, message: "organizacion no encontrada" });
        }

        res.status(200).json(org);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};

export async function postOrg(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("organizaciones");
        let data = req.body;
        const newOrg = {
            _id: new ObjectId(),
            ...data,
            fecha_creacion: new Date(req.body.fecha_creacion),
        };
        await colleccion.insertOne(newOrg);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteOrg(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("organizaciones");
        const orgId = parseInt(req.params.id);

        const org = await colleccion.findOne({ id: orgId });

        if (!org) {
            return res.status(404).send({ status: 404, message: "organizacion no encontrada" });
        }

        const deletionResult = await colleccion.deleteOne({ id: orgId });
        //console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};