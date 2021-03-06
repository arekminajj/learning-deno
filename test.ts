import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
import { getFullName, makePersonOlder, person } from "./controllers/people.ts";
import { createRequire } from "https://deno.land/std/node/module.ts";

const require = createRequire(import.meta.url);

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

const moment = require("moment");
console.log(moment().format("MMMM Do YYYY"));

console.log(person.FirstName);
console.log(getFullName());
console.log(person.Age);
makePersonOlder(10);
console.log(person.Age);

Deno.writeTextFile("./hello.txt", new Date().toString());

for await (const req of s) {
  let message = "deno is so cool";
  req.respond({ body: "Hello World\n" + message });
}
