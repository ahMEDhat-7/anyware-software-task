# Full Structure# Student Dashboard Backend

A NestJS backend application with MongoDB for managing student quizzes and announcements.

## Features

- **Quizzes Management**: Full CRUD operations for quizzes
- **Announcements Management**: Full CRUD operations for announcements
- **MongoDB Integration**: Using Mongoose for data persistence
- **API Documentation**: Swagger/OpenAPI documentation
- **Validation**: Input validation using class-validator
- **TypeScript**: Fully typed with TypeScript
- **Testing**: Unit and E2E tests included

## Installation

```bash
# Install dependencies
npm install

# Start MongoDB (make sure MongoDB is running)
mongod

# Start the application in development mode
npm run start:dev

# Build for production
npm run build

# Start in production mode
npm run start:prod
```

## API Endpoints

### Quizzes
- `GET /quizzes` - Get all quizzes
- `GET /quizzes/upcoming` - Get upcoming quizzes
- `GET /quizzes/completed` - Get completed quizzes
- `GET /quizzes/:id` - Get quiz by ID
- `POST /quizzes` - Create new quiz
- `PATCH /quizzes/:id` - Update quiz
- `DELETE /quizzes/:id` - Delete quiz

### Announcements
- `GET /announcements` - Get all announcements
- `GET /announcements/recent` - Get recent announcements
- `GET /announcements?priority=high` - Filter by priority
- `GET /announcements/:id` - Get announcement by ID
- `POST /announcements` - Create new announcement
- `PATCH /announcements/:id` - Update announcement
- `DELETE /announcements/:id` - Delete announcement

## API Documentation

Once the server is running, visit `http://localhost:3000/docs` for Swagger documentation.

## Database Schema

### Quiz Schema
- topic: string (required)
- course: string (required)
- dueDate: Date (required)

### Announcement Schema
- topic: string (required)
- content: string (required)
- author: string (required)