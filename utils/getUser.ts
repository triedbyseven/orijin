import jwt from 'jsonwebtoken';


export const getUser = token => {
    try {
        if (token) {
            return jwt.verify(token, '123456');
        }
        return null;
    } catch (error) {
        return error;
    }
}