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


