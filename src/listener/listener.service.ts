import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EventDemoListener {
  constructor() {
    console.log('EventDemoListener constructor');
  }

  @OnEvent('msg.test')
  listenToEvent(data: string) {
    console.log('Message Received:', data);
  }
}
