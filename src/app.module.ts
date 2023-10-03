import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
const dotenv = require('dotenv').config()


@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vwwjuot.mongodb.net/?retryWrites=true&w=majority`),
  TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}