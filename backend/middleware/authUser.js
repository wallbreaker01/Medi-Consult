// import jwt from 'jsonwebtoken'

// // user authentication middleware
// const authUser = async (req, res, next) => {
//     const { token } = req.headers
//     if (!token) {
//         return res.json({ success: false, message: 'Not Authorized Login Again' })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).json({ success: false, message: error.message });

//     }
// }

// export default authUser;

import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login again.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decode.id; // ✅ Safe and correct location to store user ID
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Token is invalid or expired.' });
    }
};

export default authUser;
