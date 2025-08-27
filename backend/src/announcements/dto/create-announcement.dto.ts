
import { IsString, IsOptional, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAnnouncementDto {
  @ApiProperty({ description: 'Announcement content' })
  @IsString()
  content: string;

  @ApiPropertyOptional({ description: 'Announcement date' })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date?: Date;

  @ApiProperty({ description: 'Author name' })
  @IsString()
  author: string;
}
