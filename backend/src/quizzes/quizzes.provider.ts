import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Quiz } from "./entities/quiz.schema";



@Injectable()
export class QuizzesProvider{
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}
     async findUpcoming(): Promise<Quiz[]> {
    const currentDate = new Date();
    return this.quizModel
      .find({ 
        dueDate: { $gte: currentDate }, 
        completed: false 
      })
      .sort({ dueDate: 1 })
      .exec();
  }

  async findCompleted(): Promise<Quiz[]> {
    return this.quizModel
      .find({ completed: true })
      .sort({ updatedAt: -1 })
      .exec();
  }
}