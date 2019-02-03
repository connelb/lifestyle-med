import gql from 'graphql-tag';

export default gql`
query ListAllWater {
    listWaters{
      items{
        intake
        userId
        waterId
        createdAt
        updatedAt
      }
    }
  }
`;