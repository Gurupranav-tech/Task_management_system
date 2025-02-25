import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
