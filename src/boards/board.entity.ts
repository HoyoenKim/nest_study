// TypeORM (Object Relational Mapping)은 nodejs에서 실행되고 typescripti로 작성된 객체 관계형 매퍼 라이브러리
// ORM은 관계형 데이터베이스와 객체를 자동으로 연결
// Class <-> DB 연결
// Table 자동 생성, CRUD query 없이도 간단하게, 테이블간 매핑 기능 제공

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { BoardStatus } from "./board-status.enum";
import User from "src/auth/user.entity";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;

    @ManyToOne(type => User, user => user.boards, { eager: false })
    user: User;
}