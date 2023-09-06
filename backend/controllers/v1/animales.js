import { con} from "../../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getAnimales(req, res) {
    try {
        let db = await con();

        let colleccion = db.collection("animales");

        let results = await colleccion.find({ id: 1 }).sort({ id: 1 }).toArray();
        
        
        results.length > 0 
            ? res.send(results).status(200) 
            : res.status(404).send({ status: 404, message: "Found But Without Contain :(" });

    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function postAnimales(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("animales");
        let data = req.body;
        const newAnimal = {
            _id: new ObjectId(),
            ...data,
            nombre: req.body.nombre,
            animal: req.body.animal
        };
        await colleccion.insertOne(newAnimal);
        res.status(201).send({ status:201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};