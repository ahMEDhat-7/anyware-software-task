import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema({ timestamps: true })
export class Announcement {
  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  date: Date;

  @Prop({ required: true })
  author: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
