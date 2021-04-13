require('dotenv').config();

const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const db = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
}

const dbURI = `mongodb+srv://${db.user}:${db.pass}@cluster0.n3oh1.mongodb.net/${db.name}?retryWrites=true&w=majority`

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbURI, dbOptions);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
    .then(({ url }) => console.log(`Server ready at ${url}`))
    .catch(err => console.log(`Server failed: ${err}`));