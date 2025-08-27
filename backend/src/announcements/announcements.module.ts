import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementsController } from './announcements.controller';
import { AnnouncementsProvider } from './announcement.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Announcement, AnnouncementSchema } from './entities/announcement.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Announcement.name ,schema:AnnouncementSchema}])],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService,AnnouncementsProvider],
})
export class AnnouncementsModule {}
