import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getHello()).toBe('Hello World!');
    });
  });

  describe('status-code', () => {
    it('should return statuscode with message', async () => {
      expect(await appController.getStatusCode()).toHaveProperty('statusCode');
      expect(await appController.getStatusCode()).toHaveProperty('message');
      //   .toMatchObject({
      //   message: 'Ok',
      //   statusCode: 200,
      // });
    });
  });
});
