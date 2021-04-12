import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { environment } from "./environment/environment";

async function start() {
  const PORT = process.env.PORT
  const app = await NestFactory.create(AppModule)
  await app.listen(environment.APP_PORT, ()=>{
    console.log(`Server up`);
  })
}

start();
