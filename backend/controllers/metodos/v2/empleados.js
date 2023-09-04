import { con } from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getEmpleados(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");

        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_id(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = parseInt(req.params.id);

        let results = await colleccion.find({ id: query }).sort({ fecha: -1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_nombre(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = req.params.name;

        let results = await colleccion.find({
            nombre_completo: {
                $regex: `/${query}/i`
            }
        });

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_cargo(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = req.params.carg;

        let results = await colleccion.find({ "cargo": `${query}` })
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_salario(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = parseInt(req.params.sal);

        let results = await colleccion.find({ "salario": { $gte: `${query}` } })
            .sort({ id: 1 })
            .toArray();


        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_nombre_cargo(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = {
            nombre_completo: { $regex: `/${req.params.name_compl}/i` },//AQUÍ VA EL NOMBRE
            cargo: req.params.carg //AQUÍ VA EL CARGO
        };

        let results = await colleccion.find({ query }).sort({ id: 1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_nombre_salario(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = {
            nombre_completo: { $regex: `/${req.params.name_compl}/i` },//AQUÍ VA EL NOMBRE
            salario: { $gte: parseInt(req.params.sal)}
        };

        let results = await colleccion.find({ query }).sort({ id: 1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getEmpleados_nombre_salario_cargo(req, res) {
    try {
        let db = await con();
        console.log("get function");
        let colleccion = db.collection("empleados");
        let query = {
            nombre_completo: { $regex: `/${req.params.name_compl}/i` },//AQUÍ VA EL NOMBRE
            salario: { $gte: parseInt(req.params.sal)},
            cargo: req.params.car
        };

        let results = await colleccion.find({ query }).sort({ id: 1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}


























export async function postEmpl(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("empleados");
        let data = req.body;
        const newEvento = {
            _id: new ObjectId(),
            ...data,
            fecha_contratacion: new Date(req.body.fecha_contratacion),
        };
        await colleccion.insertOne(newEvento);
        res.status(201).send({ status: 201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
};