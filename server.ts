import { Application, Router } from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: any) => {
  ctx.response.body = "main get page";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
