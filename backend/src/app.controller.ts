import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 下記の@=== は、アプリケーションのリクエストを処理するクラスを定義するためのデコレーター
// @controllerや@get などいろいろある

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // GET メソッドで呼ばれたリクエストはここにくる
    // app.service.ts の getHelloメソッドを呼び出して、その結果を返す
    return this.appService.getHello();
  }
}
