// jwt (json web token), 당사자간 정보를 JSON 개체로 안전하게 전송하는 표준, 이는 디지털 서명이 되어 있음
// 유저의 권한을 체크하기 위해 사용됨.
// Header (Token metadata ex) 타입, SHA256등의 해싱 알고리즘)
// Payload (유저 정보, 만료 기간)
// Verify Signature (서명)
// Admin 만 볼 수 있는 글 -> Token의 Header를 넣어서 요청 -> 서버에서는 JWT로 Token을 재생성 후 둘을 비교
// Signature 를 만들어서 비교함. Signautre = header + payload + secret
// secret 은 서버에서 가지고 있는 특수한 문자

import { IsString, MaxLength, MinLength, Matches } from "class-validator";

export class AuthCredentialDto {
    @IsString()
    @MinLength(1)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts english and number'
    })
    password: string;
}