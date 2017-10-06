import http from 'http';
import express from 'express';
import routes from './routes';
import config from './config';
import bodyParser from 'body-parser';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use('/home', routes);

app.server.listen(config.port);

console.log(`Server is running on the port ${app.server.address().port}`);

export default app;
