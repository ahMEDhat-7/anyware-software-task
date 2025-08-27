import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizzesProvider } from './quizzes.provider';

@ApiTags('quizzes')
@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService,
    private readonly quizzesProvider: QuizzesProvider
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create a new quiz' })
  @ApiBody({ type: CreateQuizDto })
  @ApiResponse({ status: 201, description: 'Quiz created successfully' })
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all quizzes' })
  @ApiResponse({ status: 200, description: 'List of all quizzes' })
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Get upcoming quizzes' })
  @ApiResponse({ status: 200, description: 'List of upcoming quizzes' })
  findUpcoming() {
    return this.quizzesProvider.findUpcoming();
  }

  @Get('completed')
  @ApiOperation({ summary: 'Get completed quizzes' })
  @ApiResponse({ status: 200, description: 'List of completed quizzes' })
  findCompleted() {
    return this.quizzesProvider.findCompleted();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a quiz by ID' })
  @ApiParam({ name: 'id', description: 'Quiz ID' })
  @ApiResponse({ status: 200, description: 'Quiz details' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a quiz' })
  @ApiParam({ name: 'id', description: 'Quiz ID' })
  @ApiBody({ type: UpdateQuizDto })
  @ApiResponse({ status: 200, description: 'Quiz updated successfully' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizzesService.update(id, updateQuizDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a quiz' })
  @ApiParam({ name: 'id', description: 'Quiz ID' })
  @ApiResponse({ status: 204, description: 'Quiz deleted successfully' })
  @ApiResponse({ status: 404, description: 'Quiz not found' })
  remove(@Param('id') id: string) {
    return this.quizzesService.remove(id);
  }
}