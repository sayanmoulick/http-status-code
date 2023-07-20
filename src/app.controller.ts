import { Controller, Get, Header, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Get('/status-code')
  @Header('Cache-Control', 'none')
  @HttpCode(200)
  async getStatusCode(): Promise<object> {
    return await this.appService.getStatus();
  }
}
