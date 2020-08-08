import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  let message = 'deno is so cool'
  req.respond({ body: "Hello World\n" + message });
}