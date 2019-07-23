var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    
    const url = 'mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTERNAME>-<DABERITI>.mongodb.net/<DBNAME>?retryWrites=true'

    
    return MongoClient.connect(url,{useNewUrlParser: true})
        .then(client => {
            console.log('Connected to MongoDB2');
            // If we get disconnected (e.g. db is down)
            client.on('close', ()=>{
                console.log('MongoDB2 Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
