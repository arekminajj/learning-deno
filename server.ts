import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
import { Person } from './Person.ts'

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

Deno.writeTextFile("./hello.txt", new Date().toString())

for await (const req of s) {
  let message = 'deno is so cool'
  req.respond({ body: "Hello World\n" + message });
} 