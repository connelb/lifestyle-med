export default class User {
    constructor(
        public cognitoId: string,
        //public conversations,
        public id: string,
        //public messages,
        public username: string| null,
        public firstname: string| null,
        public lastname: string| null,
        public registered: boolean,
        public bio: string | null,
        public image: string| null
    ){}
}