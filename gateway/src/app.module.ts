import { Module } from "@nestjs/common";
import { GraphQLGatewayModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
        engine: {
          apiKey: "<own-apollo-api-key>"
        }
      }
    })
  ]
})
export class AppModule {}
