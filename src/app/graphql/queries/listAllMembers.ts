import gql from 'graphql-tag';

export default gql`
query ListMembers($filter: TableMemberFilterInput, $limit: Int, $nextToken: String) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      __typename
      items {
        __typename
        id
        conversations {
          __typename
          nextToken
        }
        messages {
          __typename
          nextToken
        }
        username
        firstname
        lastname
        registered
        bio
        image
      }
      nextToken
    }
  }`