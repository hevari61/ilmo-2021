const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://hevari:Kontio1961&@cluster0.beap7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    
    try {
        await client.connect();

        await createListing(client, {
            Name: "Hevonkoski Ari",
            Osall: "2"
        });

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
    
}

main().catch(console.error);

async function createListing(client, newListing) {
    const result = await client.db("hevari").collection("kseurantadb").insertOne
    (newListing);

    console.log(`Uusi listaus luotu idllä: ${result.insertedId}`);


}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
        
    });


}