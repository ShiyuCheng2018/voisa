import {create} from "dva-core-ts";
import models from "@/models/index";

// create dva instance
const app = create();

// load dva object
models.forEach(model =>{
    app.model(model);
})
// start dva
app.start();

// export dva data
export default app._store;
