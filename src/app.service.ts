import { Injectable } from '@nestjs/common';
import { httpStatusCodes } from './common/httpcodes';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Hello World!';
  }

  async getStatus(): Promise<object> {
    return httpStatusCodes[Math.floor(Math.random() * httpStatusCodes.length)];
  }
}
