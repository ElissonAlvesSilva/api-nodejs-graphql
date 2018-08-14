'use strict';

const express = require('express');
const express_graphql = require('express-graphql');
const schema = require('../src/graphql/schema');

const app = express();

app.use('/', express_graphql({
    schema: schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('Server is running at port 4000....');
});

