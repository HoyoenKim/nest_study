import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardRepository } from './board.repository';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([BoardRepository]),
    AuthModule
  ],
  controllers: [BoardsController],
  // nest g controller boards --no-spec (no test code)
  providers: [BoardsService],
  // providers는 service, repository, factory 등의 객체로 여러 controller에서 사용(의존성 주입)되는 것들이다.
  // nest g service boards --no-spec (no test code)
})
export class BoardsModule {}
