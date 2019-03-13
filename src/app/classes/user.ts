export default class User {
    constructor(
        public cognitoId: string,
        public id: string,
        public username: string| null,
        public firstName: string| null,
        public lastName: string| null,
        public registered: boolean,
        public bio: string | null,
        public image: string| null
    ){}
}