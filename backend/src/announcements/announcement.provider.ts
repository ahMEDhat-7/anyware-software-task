import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Announcement } from "./entities/announcement.schema";


@Injectable()
export class AnnouncementsProvider {
    constructor(
        @InjectModel(Announcement.name)
        private announcementModel: Model<Announcement>
    ) { }
    async findRecent(limit: number = 5): Promise<Announcement[]> {
        return this.announcementModel
            .find()
            .sort({ createdAt : -1 })
            .limit(limit)
            .exec();
    }
}