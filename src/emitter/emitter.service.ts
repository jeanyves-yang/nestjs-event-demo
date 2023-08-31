import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EmitterService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitEvent(data: string) {
    console.log('EmitterService emitEvent start');
    this.eventEmitter.emit('msg.test', data);
    console.log('EmitterService emitEvent event emitted');
  }
}
