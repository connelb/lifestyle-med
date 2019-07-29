import gql from 'graphql-tag';

export default gql`
query ListAllWater($userId:String){
  listWaters(
    filter:{
         userId:{
           eq: $userId
          }
      }
  ){
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

// listWaters(filter:{
//   userId:{
//       eq: $userId
//     }
// }){

//  query ListAllWater {
//   listWaters{
//     items{
//       intake
//       userId
//       waterId
//       createdAt
//       updatedAt
//     }
//   }
// }


// query listwater{
//   listWaters(filter:{
//     userId:{
//         eq: "4e13fa4d-5d51-4c18-834b-406ba731054b"
//       }
//   }){
//     items{
//       waterId
//     }
//   }
// }

// query getConversationMessages($conversationId: ID!, $after: String, $first: Int) {
//   allMessageConnection(conversationId: $conversationId, after: $after, first: $first) {
//     __typename
//     nextToken,
//     messages {
//       __typename
//       id
//       conversationId
//       content
//       createdAt
//       sender
//       isSent
//     }
//   }
// }`;