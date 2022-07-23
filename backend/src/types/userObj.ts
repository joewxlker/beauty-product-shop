export interface userObj {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    day: number,
    month: number,
    year: number,
    verified: boolean,
}

class user_data {
    userObject: object;
    constructor(user_data: object) {
        this.userObject = user_data;
    }
}
export const createUserObj = (object: object) => {
    const newUser = new user_data(object);
    return newUser.userObject;
}