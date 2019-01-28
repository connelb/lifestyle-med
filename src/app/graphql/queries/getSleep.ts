
import gql from 'graphql-tag';

export default gql`
query GetSleep {
  getSleep {
    sleepId
    createdAt
  }
}`;

// async GetSleep(sleepId: string, createdAt: string): Promise<GetSleepQuery> {
//     const statement = `query GetSleep($sleepId: String!, $createdAt: String!) {
//         getSleep(sleepId: $sleepId, createdAt: $createdAt) {
//           __typename
//           sleepId
//           createdAt
//           userId
//           updatedAt
//           hours
//         }
//       }`;