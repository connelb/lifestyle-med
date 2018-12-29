import gql from 'graphql-tag';

export default gql`
query listme {
  listMeasurements{
    items{
     hips
    }
  }
}`;
