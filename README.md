# Bug Report for Graphql Gateway Fedeation

## Gateway:

Graphql gateway which is a managed by apollo graph manager gateway

## Test Service

Simple get user service with static output.

## How to reproduce the problem

First start the Test Service.

Then run this command: (use own api key from apollo graph manager)

```
npx apollo service:push --endpoint=http://localhost:3001/graphql --serviceURL=http://localhost:3001/graphql --serviceName="test-service" --key=<own-api-key>
```

After that start the gateway project.

Run this Mutation on the Gateway:

```
mutation {
  createUser(input: { name: "123", birthday: "123" }) {
    id
    name
    birthday
  }
}
```

Now it will return a 500 error. If you run this directly on the service then it works fine (bad request error)

This problem is only reproduce in managed mode of the gateway
