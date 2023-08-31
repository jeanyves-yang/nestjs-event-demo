import { Module } from '@nestjs/common';
import { EventDemoListener } from './listener.service';

@Module({
  providers: [EventDemoListener],
})
export class ListenerModule {}
