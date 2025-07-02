import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./src/Data/schema";


const root = {
    hello: () => {
        return "Hello world!";
    },
};

const app = express();
const PORT = 3000;

// serving static files
app.use(express.static("public"));

// GraphQl end point
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
