import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmitterModule } from './emitter/emitter.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ListenerModule } from './listener/listener.module';

@Module({
  imports: [EventEmitterModule.forRoot(), EmitterModule, ListenerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
