import gql from 'graphql-tag';

export default gql`
mutation createWorkout($workoutId: ID!,$createdAt: String! ) {
  createWorkout(workoutId: $workoutId, createdAt:$createdAt) {
    __typename
    workoutId
    createdAt
    userId
    desc
    duration
    capture
  }
}`