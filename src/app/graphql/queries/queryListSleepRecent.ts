import gql from 'graphql-tag';

export default gql`
query ListAllSleepRecent {
    listSleeps(limit:7){
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