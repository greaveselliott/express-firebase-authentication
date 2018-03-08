import Express from 'express';
import { addUser, authenticate } from './src/user';

const App = Express();
const PORT = process.env.PORT || 3000;

// Create new user
App.post('/user', (req, res) => {
    
    console.log(req);
    let user_email = req.body['user-email'];
    let user_password = req.body['user-password'];

    addUser(user_email, user_password, (error) => {
        if (error) {
            return res.status(500).send('Error when creating user.');
        } else {
            return res.status(201).send(res)
        }
    });
});

// Perform authentication
App.post('/login', (req, res) => {
    let user_email = req.headers['user-email'];
    let user_password = req.headers['user-pass'];
    

    authenticate(user_email, user_password, (error, auth_data) => {
        if (error) {
            return res.status(401).send('Unathorized');
        } else {
            return res.status(200).send(auth_data);
        }
    });
});



App.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});