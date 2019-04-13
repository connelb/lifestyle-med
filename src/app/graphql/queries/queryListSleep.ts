import gql from 'graphql-tag';

export default gql`
query ListAllSleep {
    listSleeps{
      items{
        hours
        userId
        sleepId
        createdAt
        updatedAt
      }
    }
  }
`;

// query ListSleeps(
//   $filter: TableSleepFilterInput
//   $limit: Int
//   $nextToken: String
// ) {
//   listSleeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
//     items {
//       sleepId
//       createdAt
//       userId
//       updatedAt
//       hours
//     }
//     nextToken
//   }
// }


