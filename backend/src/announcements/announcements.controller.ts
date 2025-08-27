import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { AnnouncementsProvider } from './announcement.provider';

@ApiTags('announcements')
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService,
    private readonly announcementsProvider: AnnouncementsProvider
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new announcement' })
  @ApiBody({ type: CreateAnnouncementDto })
  @ApiResponse({ status: 201, description: 'Announcement created successfully' })
  create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementsService.create(createAnnouncementDto);
  }
  
  @Get('recent')
  @ApiOperation({ summary: 'Get recent announcements' })
  @ApiQuery({ name: 'limit', required: false, description: 'Number of announcements to return' })
  @ApiResponse({ status: 200, description: 'List of recent announcements' })
  findRecent(@Query('limit') limit?: string) {
    const limitNumber = limit ? parseInt(limit, 10) : 5;
    return this.announcementsProvider.findRecent(limitNumber);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an announcement by ID' })
  @ApiParam({ name: 'id', description: 'Announcement ID' })
  @ApiResponse({ status: 200, description: 'Announcement details' })
  @ApiResponse({ status: 404, description: 'Announcement not found' })
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an announcement' })
  @ApiParam({ name: 'id', description: 'Announcement ID' })
  @ApiBody({ type: UpdateAnnouncementDto })
  @ApiResponse({ status: 200, description: 'Announcement updated successfully' })
  @ApiResponse({ status: 404, description: 'Announcement not found' })
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementsService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete an announcement' })
  @ApiParam({ name: 'id', description: 'Announcement ID' })
  @ApiResponse({ status: 204, description: 'Announcement deleted successfully' })
  @ApiResponse({ status: 404, description: 'Announcement not found' })
  remove(@Param('id') id: string) {
    return this.announcementsService.remove(id);
  }
}