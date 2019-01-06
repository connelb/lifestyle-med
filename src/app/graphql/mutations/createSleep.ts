import gql from 'graphql-tag';

export default gql`
mutation createSleep($sleepId: String!, $createdAt : String!, $userId: String, $updatedAt: String, $hours: String){
  createSleep(input:{
    sleepId: $sleepId,
    createdAt: $createdAt,
    userId: $userId,
    updatedAt: $updatedAt,
    hours: $hours
  }) {
    sleepId
    createdAt
    userId
    updatedAt
    hours
    }
}`