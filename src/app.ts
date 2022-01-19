
import { PORT } from "./config";
import app from "./api";


app.listen(PORT, () =>
  console.log(`✅  Ready on port http://localhost:${PORT}`)
);
