import { con} from "../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEmpleados(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function postEmpl(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        let data = req.body;
        const newEvento = {
            _id: new ObjectId(),
            ...data,
            fecha_contratacion: new Date(req.body.fecha_contratacion),
        };
        await colleccion.insertOne(newEvento);
        res.status(201).send({ status:201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};

export async function putEmpleado(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        let data = req.body;
        const updatedEmpleado = {
            ...data,
            fecha_contratacion: new Date(req.body.fecha_contratacion),
        };
        await colleccion.updateOne({Id: req.params.id}, {$set: updatedEmpleado});
        res.status(200).send({ status:200, message: "Updated :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};

export async function deleteEmpleado(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        await colleccion.deleteOne({Id: req.params.id});
        res.status(200).send({ status:200, message: "Deleted :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};
