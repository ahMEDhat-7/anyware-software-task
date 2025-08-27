import { IsString, IsNumber, IsDate, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty({ description: 'Quiz title' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Quiz subject' })
  @IsString()
  subject: string;

  @ApiProperty({ description: 'Quiz due date' })
  @Type(() => Date)
  @IsDate()
  dueDate: Date;

  @ApiProperty({ description: 'Quiz duration in minutes' })
  @IsNumber()
  duration: number;

  @ApiProperty({ description: 'Number of questions' })
  @IsNumber()
  questions: number;

  @ApiPropertyOptional({ description: 'Whether quiz is completed' })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;

  @ApiPropertyOptional({ description: 'Quiz score' })
  @IsOptional()
  @IsNumber()
  score?: number;
}
