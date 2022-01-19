import { APP_PORT } from "./config";
import app from "./api";

app.listen(APP_PORT, () =>
  console.log(`✅ Ready on port http://localhost:${APP_PORT}`)
);
