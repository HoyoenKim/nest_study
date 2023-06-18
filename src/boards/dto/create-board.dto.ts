//DTO는 interface, class 둘다 가능, class의 경우에 런타임에서 돌아서 파이프와 같은 기능을 쓸때 유리
// 파이프는 @Injectable() 데코레이터로 주석이 달린다.
// 파이프는 dt와 dv를 위해 사용된다. 파이프는 컨트롤러 인수에 대해 작동한다.
// Nest는 Method 호출 전에 파이프를 삽입, 이에 대해 작동한다.
// dt ex) '7' -> 7
// dv ex) 길이 varcahr(10) 이하?

// Pipe (Handler-level, Parameter-level, Grobal-level)
// Grobal-level: 모든 어플리케이션
// app.useGlobalPipes(GlobalPipes)
// Handler-level: 특정 핸들러의 파라미터 모두
// @UsePipes(pipe)
// Parameter-level: 특정 파라미터
// @Body('title', pipe)

// 미리 정의된 6개의 Pipe 존재
// ValidationPipe, PAresInt/Bool/Array/UUIDPipe, DefaultValuePipe

import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}