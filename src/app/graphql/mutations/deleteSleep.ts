
import gql from 'graphql-tag';

export default gql`
mutation DeleteSleep ($sleepId: String!, $createdAt: String!) {
    deleteSleep(input:{
      sleepId:$sleepId,
  createdAt:$createdAt
    }) {
        sleepId
        createdAt
        userId
        updatedAt
        hours
    }
  }`
