import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type QuizDocument = HydratedDocument<Quiz>;

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  dueDate: Date;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  questions: number;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ default: null })
  score: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);