// NestJS Middleware: Pipes, Filters, Guards, Interceptors
// Pipes: 유효성 검사, 페이로드 변환
// Filters: 오류 처리
// Guards: 인증 (허용 된 사람 알려줌)
// Interceptors: 응답 매핑, 캐시 관리, 
// Middleware 순서
// guard -> interceptor (before) -> pipe -> controller -> service -> controller -> interceptor (after) -> filter -> client
import { Body, Controller, Post, Req, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import User from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto): Promise<void> {
        return this.authService.signUp(authCredentialDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) AuthCredentialDto: AuthCredentialDto): Promise<{accessToken: string}> {
        return this.authService.singIn(AuthCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: User) {
        console.log('user', user);
    }

}
