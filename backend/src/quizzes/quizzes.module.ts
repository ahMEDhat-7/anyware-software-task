import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { QuizzesProvider } from './quizzes.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, QuizSchema } from './entities/quiz.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Quiz.name,schema:QuizSchema}])],
  controllers: [QuizzesController],
  providers: [QuizzesService, QuizzesProvider],
})
export class QuizzesModule {}
