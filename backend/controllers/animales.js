import { con} from "../connection/conect.js";
import { ObjectId } from "mongodb";

export async function getAnimal(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("animales");
        let results = await colleccion.find({}).sort({ fecha: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "animales no encontrados" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error :(" });
    }
}

export async function getAnimalId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("animales");
        const animalId = parseInt(req.params.id);

        const animal = await collection.findOne({ id:animalId });

        if (!animal) {
            return res.status(404).send({ status: 404, message: "animal no encontrado" });
        }

        res.status(200).json(animal);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};

export async function postAnimal(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("animales");
        let data = req.body;
        const newAnimal = {
            _id: new ObjectId(),
            ...data
        };
        await colleccion.insertOne(newAnimal);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteAnimal(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("animales");
        const AnimalId = parseInt(req.params.id);

        const Animal = await colleccion.findOne({ id: AnimalId });

        if (!Animal) {
            return res.status(404).send({ status: 404, message: "animal no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: AnimalId });
        //console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};