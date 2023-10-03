import { Injectable } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';
import { sendEmail } from './utils/task.sendEmail.service';


@Injectable()
export class TasksService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}


  async create(task: Task) {
    const createTask = new this.taskModel(task);
    await sendEmail(task)

    return await createTask.save();
  }

  async findAll() {
    return await this.taskModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
