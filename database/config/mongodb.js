const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://jayaprasadb718:9632119392Jp78m@cluster0.bhccjgv.mongodb.net/userdata?retryWrites=true&w=majority;'

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;