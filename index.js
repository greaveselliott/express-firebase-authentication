import Express from 'express';
import bodyParser from 'body-parser';
import { addUser, authenticate } from './src/user';

const App = Express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
App.use(bodyParser.json())

// Create new user
App.post('/user', (req, res) => {
    
    let user_email = req.body['user-email'];
    let user_password = req.body['user-password'];

    addUser(user_email, user_password)
        .then(data => {
            res.send(`Created user ${data.uid}.`);
        })            
        .catch(error => {
            return res.status(403).send(`${error.message}`);
        });
});


// Perform authentication
App.post('/login', (req, res) => {
    let user_email = req.body['user-email'];
    let user_password = req.body['user-password'];

    authenticate(user_email, user_password)
        .then(data => {
            res.send(`${data.uid} signed in.`);
        })
        .catch(error => {
            return res.status(403).send(`${error.message}`);
        });
});

App.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});