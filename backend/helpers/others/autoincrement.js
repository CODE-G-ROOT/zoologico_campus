import con from '../../connection/conect.js'

export default async function auth_id(collection){

    let db = await con();
    let counter = db.collection("counters");

    const secuencesValues = await counter.findOneAndUpdate(
        { counter: `${collection}id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return secuencesValues.value.sequence_value;
};
