const bcrypt = require('bcrypt');

export const createHash = (password: string) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds, (err: Error, hash: string) => {
        if(err) return err
        return hash
    })
}

//TODO
//export const queryHash