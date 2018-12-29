import gql from 'graphql-tag';

export default gql`
mutation create($workoutId: ID!, $createdAt: String!, $userId: String, $desc:String, $duration:Int, $capture:String){
    createWorkout(input: {
      workoutId:$workoutId
      createdAt:$createdAt
      userId:$userId
      desc:$desc
      duration:$duration
      capture:$capture
    }) {
      __typename
      workoutId
      createdAt
      userId
      desc
      duration
      capture
    }
}
`;