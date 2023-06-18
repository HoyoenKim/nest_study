import { Board } from "src/boards/board.entity";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from "typeorm";

@Entity()
@Unique(['username'])
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => Board, board => board.user, { eager: true })
    boards: Board[]
    // eager가 true이면 하위 엔티티를 전부 가져온다. (join으로 N+1 문제 해결)
    // Promise<Board[]> 이면 Lazy Relations 으로 Board 엔티티에 접근할 떄 데이터를 가져온다.

}