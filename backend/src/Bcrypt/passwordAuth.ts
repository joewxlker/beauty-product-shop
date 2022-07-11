const bcrypt = require('bcrypt');
const saltRounds = 10;

export const createHash = async (password: string) => {
    console.log(`creating hash key from ${password}`)
    const hashed = await bcrypt.hash(password, saltRounds)
    return hashed
}

//TODO
//export const queryHash