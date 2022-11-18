import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { deleteUser } from "./routes/delete.ts";
import { booleanIdUser, getUser } from "./routes/get.ts";
import { postAuthor, postBook, postUser } from "./routes/post.ts";


const router = new Router();

router
  .post("/addUser",postUser)
  .post("/addAuthor",postAuthor)
  .post("/addBook",postBook )
  .delete("/deleteUser/:id",deleteUser)
  .get("/getUser/:id",getUser)
  /*Se que estas funciones no las tengo que hacer, se que existe alguna forma de hacerlo desde las 
  funciones que nos has perdido pero no logro hacerlo. Se me ha ocurrido hacer 3 funciones extra
  que serviran para comprobar que existe author, usuario y libro. A nivel codigo no es lo mejor pero
  es funcional
  */
 .get("/booleanUser/:id",(booleanIdUser)=>{})
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 7777 });
