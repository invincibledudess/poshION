
import {USERS} from "./users";


export function validateUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    console.info('USERS[username] : ', USERS[username], req.body);
    // console.info('USERS[username].password : ', USERS[username].password, password);
    if (USERS[username] && USERS[username].password === password) {
        res.status(200).json(USERS[username]);
    } else {
        res.status(401).json({error: 'Invalid credentials'});
    }
}