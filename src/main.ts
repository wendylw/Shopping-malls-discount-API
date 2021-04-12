import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('shopping malls activities')
    .setDescription('The shopping malls activities API description')
    .setVersion('1.0')
    .addTag('shopping malls activities')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('shopping-mall-discount-api', app, document);

  await app.listen(3000);

  console.log('http://localhost:3000/api');
  console.log('http://localhost:3000/shopping-mall-discount-api');
}
bootstrap();
