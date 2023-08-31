import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EmitterService } from './emitter/emitter.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly emitterService: EmitterService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test-event')
  getTestEvent(): void {
    this.emitterService.emitEvent('this is a test event');
  }
}
