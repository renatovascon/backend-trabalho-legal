import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskSchema} from './tasks.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
