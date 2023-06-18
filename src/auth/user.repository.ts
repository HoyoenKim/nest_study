import { Repository } from "typeorm";
import User from "./user.entity";
import { CustomRepository } from "src/db/typeorm-ex.decorator";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from 'bcryptjs'

@CustomRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
        const { username, password } = authCredentialDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = this.create({username, password: hashedPassword});

        try {
            await this.save(user);
        }
        catch(error) {
            if(error.code === '23505') {
                throw new ConflictException('Existing username');
            }
            else {
                throw new InternalServerErrorException();
            }
        }
    }
}