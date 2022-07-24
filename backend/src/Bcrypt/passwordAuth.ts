const bcrypt = require('bcrypt');
const saltRounds = 10;

export const createHash = async (password: string) => {
    const hashed = await bcrypt.hash(password, saltRounds)
    return hashed
}

export const compare = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash)
}