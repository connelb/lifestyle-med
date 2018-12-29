import gql from 'graphql-tag';

export default gql`
mutation createWorkout($workoutId: String!, $createdAt : String!, $userId: String, $desc: String, $duration: String,$capture: String    ){
  createWorkout(input:{
workoutId: $workoutId,
createdAt: $createdAt,
userId: $userId,
desc: $desc,
duration: $duration,
capture: $capture
  }) {
    workoutId
    createdAt
    userId
    desc
    duration
    capture
    }
}`