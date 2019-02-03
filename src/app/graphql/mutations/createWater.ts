import gql from 'graphql-tag';

export default gql`
mutation createWater($waterId: ID!, $createdAt : String!, $userId: String, $updatedAt: AWSDate, $intake: Int){
  createWater(input:{
    waterId: $waterId,
    createdAt: $createdAt,
    userId: $userId,
    updatedAt: $updatedAt,
    intake: $intake
  }) {
    waterId
    createdAt
    userId
    updatedAt
    intake
    }
}`