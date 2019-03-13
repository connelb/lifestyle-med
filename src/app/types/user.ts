type User = {
  cognitoId: string,
  username: string,
  id: string,
  registered: boolean,
  bio: string | null,
  image: string | null
};
export default User;
