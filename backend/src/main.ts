import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// このままだとNestJSのサーバーが起動しないため、以下のコードをコメントアウトしてください。
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }
// bootstrap();

// 上記のコードを以下のように書き換えてください。
// CORSを有効にして、サーバーを起動するコード
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORSを有効にする【ココ重要】
  app.enableCors({
    origin: 'http://localhost:5173', // フロントエンドのURLを指定
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 許可するHTTPメソッドを指定
    credentials: true, // クッキーを使用する場合はtrueにする
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();