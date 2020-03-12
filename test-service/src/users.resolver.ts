import {
  Args,
  Query,
  Resolver,
  ResolveReference,
  Mutation
} from "@nestjs/graphql";
import { CreateUserDto } from "./dto/create-user.dto";

@Resolver("User")
export class UsersResolvers {
  @Mutation()
  createUser(@Args("input") args: CreateUserDto) {
    console.log(args);

    return {
      id: 1,
      name: args.name,
      birthday: args.birthday
    };
  }
}
