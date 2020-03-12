import { IsDateString, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsDateString()
  birthday: Date;
}
