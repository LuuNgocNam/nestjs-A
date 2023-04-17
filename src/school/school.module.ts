import { School } from './entities/school.entity';
import { SchoolService } from './school.service';
import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolController } from './school.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([School]),
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
