export default class User {
    constructor(
        public cognitoId: string,
        //public conversations,
        public id: string,
        //public messages,
        public username: string| null,
        public firstName: string| null,
        public lastName: string| null,
        public registered: boolean,
        public bio: string | null,
        public image: string| null
    ){}
}