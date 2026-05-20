import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // ここで、クライアントからのリクエストに対して返すデータ[Hello World!]を定義する
    //return 'Hello World!';
    return 'こんにちは！';
  }
}
