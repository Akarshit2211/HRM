const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(`mongodb+srv://AkarshitJoshi:nvG5m6BOiSJJaIEt
        @hrm.tgacnwe.mongodb.net/?retryWrites=true&w=majority`)
    .then(client => {
        console.log('[Connected to MongoDB]');
        _db = client.db();
        callback();
    })
    .catch(err => console.log(err));
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;