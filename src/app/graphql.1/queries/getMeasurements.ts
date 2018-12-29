import gql from 'graphql-tag';

export default gql`
query listMeasurements{
  listMeasurements{
    items{
     hips
    }
  }
}`;
