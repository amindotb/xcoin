import express from "express";
import { CORS_ORIGINS } from "./utils/config";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import catchMiddleware from "./middleware/catch.middleware";
import responseModel from "./middleware/response.middleware";

const app = express();

app.use(responseModel);
app.use(cors({ origin: CORS_ORIGINS }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(catchMiddleware);

export default app;
