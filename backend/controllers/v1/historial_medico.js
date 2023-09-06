import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getHMed(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("historial_medico");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "historial medico no encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}
export async function getHMedId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("historial_medico");
        const hmedId = parseInt(req.params.id);

        const hmed = await collection.findOne({ id:hmedId });

        if (!hmed) {
            return res.status(404).send({ status: 404, message: "historial medico no encontrado" });
        }

        res.status(200).json(hmed);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};
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
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteHMed(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historial_medico");
        const hmedId = parseInt(req.params.id);

        const hmed = await colleccion.findOne({ id: hmedId });

        if (!hmed) {
            return res.status(404).send({ status: 404, message: "historial medico no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: hmedId });
        
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};