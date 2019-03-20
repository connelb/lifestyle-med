type User = {
  cognitoId: string,
  username: string,
  id: string,
  registered: boolean,
  firstname: string,
  lastname: string,
  bio: string | null,
  image: string | null
};
export default User;
