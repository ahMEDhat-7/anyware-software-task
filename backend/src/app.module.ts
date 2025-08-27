import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizzesModule } from './quizzes/quizzes.module';


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
],
  controllers: [],
  providers: [],
})
export class AppModule {}
