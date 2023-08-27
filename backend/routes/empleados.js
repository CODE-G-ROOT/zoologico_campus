import { con} from "../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEmpleados(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}