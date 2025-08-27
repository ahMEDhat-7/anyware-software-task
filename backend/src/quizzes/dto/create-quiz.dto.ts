import { IsString, IsNumber, IsDate, IsOptional, IsBoolean, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty({ description: 'Quiz title' })
  @IsString()
  topic: string;

  @ApiProperty({ description: 'Quiz subject' })
  @IsString()
  course: string;

  @ApiProperty({ description: 'Quiz due date' })
  @Type(() => Date)
  @IsDate()
  dueDate: Date;

}
