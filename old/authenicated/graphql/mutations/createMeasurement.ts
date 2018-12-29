import gql from 'graphql-tag';

export default gql`
mutation create($measurementId: ID!, $createdAt: String!, $chest:Int, $hips:Int, $leftArm: Int,$leftThigh:Int,$rightArm:Int,$rightThigh:Int,$waist:Int,$weight:Int){
  CreateMeasurementInput(input: {
      measurementId:$measurementId
      createdAt:$createdAt
      chest:$chest
      hips:$hips
      leftArm: $leftArm
      leftThigh: $leftThigh
      rightArm: $rightArm
      rightThigh: $rightThigh
      waist: $waist
      weight: $weight
    }) {
      __typename
      measurementId
      createdAt
      chest
      hips
      leftArm
      leftThigh
      rightArm
      rightThigh
      waist
      weight
    }
}
`;
