import { Counters } from "../collections/counters.js";

export default async function autoIncrementID(col) {
    const nuevoId = new Counters();
    nuevoId.collection = col;
    const res = await nuevoId.getID();
    return res;
}