import { APP_PORT } from "./utils/config";
import logger from "./utils/logger";
import app from "./api";

app.listen(APP_PORT, () =>
  logger.info(`✅ Ready on port http://localhost:${APP_PORT}`)
);
