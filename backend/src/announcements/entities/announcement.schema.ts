import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type AnnouncementDocument = HydratedDocument<Announcement>;

@Schema({ timestamps: true })
export class Announcement {
    @Prop({ required: true })
    topic: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    author: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);
