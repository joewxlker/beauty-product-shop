interface userObj {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    birthday: number,
    birthmonth: number,
    birthyear: number,
}

class user_data {
    userObject: object;
    constructor(user_data: userObj) {
        this.userObject = user_data;
    }
}

export const createUserObj = (object: userObj) => {
    const newUser = new user_data(object);
    return newUser.userObject;
}