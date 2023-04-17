import { StudentModule } from './student/student.module';
import { ClassModule } from './class/class.module';
import { SchoolModule } from './school/school.module';
import { AppService } from './app.service';
import { Module, Post } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';
import { PostModule } from './post/post.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsLoggerFilter } from './utils/exceptions-logger-filter/exceptions-logger-filter';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule} from './auth/auth.module'


 
@Module({
  imports: [
    PostModule,
    UserModule,
    AuthModule,
    ClassModule,
    StudentModule,
    SchoolModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        // PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      })
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}