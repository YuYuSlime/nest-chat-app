import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',  // このオリジンからのリクエストを許可
    methods: 'GET,POST',              // 許可する HTTP メソッドを指定
    allowedHeaders: 'Content-Type',   // 許可するリクエストヘッダーを指定
  });

  await app.listen(8000);
}
bootstrap();
