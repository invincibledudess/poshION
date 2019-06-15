
import {USERS} from "./users";


export function validateUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = USERS[Object.keys(USERS).find((u) => USERS[u].username === username)];

    if (user.password === password) {
        res.status(200).json(user);
    } else {
        res.status(401).json({error: 'Invalid credentials'});
    }
}
