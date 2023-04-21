import { IsInt, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @MaxLength(5)
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
