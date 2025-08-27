import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizzesModule } from './quizzes/quizzes.module';
import { AnnouncementsModule } from './announcements/announcements.module';


@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env.dev',
    isGlobal:true 
  }),
  MongooseModule.forRootAsync({
    inject:[ConfigService],
    useFactory: (configService :ConfigService) => ({
      uri: configService.get<string>("MONGO_URI"),
    })
  }),
  QuizzesModule,
  AnnouncementsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
