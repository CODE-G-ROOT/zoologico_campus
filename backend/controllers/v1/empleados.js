import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEmpleados(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "No Encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

/* export async function getEmpleadoId(req,res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        const empleadoId = req.params.id;
        let results = await colleccion.findOne({empleadoId});
        //const results = await collection.findOne({ id: empleadoId });

        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Empleado no encontrado :(" })
    
        res.send(results).status(200);
    } catch(error){
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
} */

export async function getEmpleadoId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("empleados");
        const empleadoId = parseInt(req.params.id);

        const empleado = await collection.findOne({ id: empleadoId });

        if (!empleado) {
            return res.status(404).send({ status: 404, message: "Empleado no encontrado" });
        }

        res.status(200).json(empleado);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};

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
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

/* export async function putEmpleado(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        let data = req.body;
        const updatedEmpleado = {
            ...data,
            fecha_contratacion: new Date(req.body.fecha_contratacion),
        };
        await colleccion.updateOne({Id: req.body.data.id}, {$set: updatedEmpleado});
        res.status(200).send({ status:200, message: "Updated :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
}; */
/* 
export async function putEmpleado(req, res) {
    try {
        const db = await con();
        const collection = db.collection("empleados");
        const empleadoId = parseInt(req.params.id); // Convierte el parámetro en un número entero

        // Buscar un empleado por el campo "id"
        const results = await collection.findOne({ id: empleadoId });
        results ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Empleado no encontrado" })
    
        const updatedEmpleadoData = req.body;
        const updatedEmpleado = {
            ...updatedEmpleadoData,
            fecha_contratacion: new Date(updatedEmpleadoData.fecha_contratacion),
        };

        await collection.updateOne({ id: empleadoId }, { $set: updatedEmpleado });

        res.status(200).send({ status: 200, message: "Empleado actualizado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};
 */

export async function putEmpleado(req, res) {
    try {
        const db = await con();
        const collection = db.collection("empleados");
        const empleadoId = req.params.id;

        // Verifica si el empleado existe antes de intentar actualizarlo
        const existingEmpleado = await collection.findOne({ id: empleadoId });

        if (!existingEmpleado) {
            return res.status(404).send({ status: 404, message: "Empleado no encontrado" });
        }

        // Actualiza los datos del empleado
        const data = req.body;
        const updatedEmpleado = {
            ...existingEmpleado, // Mantén los valores existentes
            ...data, // Actualiza con los nuevos valores proporcionados
            fecha_contratacion: new Date(req.body.fecha_contratacion),
        };

        await collection.updateOne({ id: empleadoId }, { $set: updatedEmpleado });

        res.status(200).send({ status: 200, message: "Empleado actualizado" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
}



export async function deleteEmpleado(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("empleados");
        await colleccion.deleteOne({Id: req.params.id});
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};
