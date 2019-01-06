import gql from 'graphql-tag';

export default gql`
query ListSleeps($filter: TableSleepFilterInput, $limit: Int, $nextToken: String) {
  listSleeps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    __typename
    items {
      __typename
      sleepId
      createdAt
      userId
      updatedAt
      hours
    }
    nextToken
  }
}`;
