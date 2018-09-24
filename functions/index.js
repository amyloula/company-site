import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const db = admin.database();
const app = express();
const main = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));
// webApi is your functions name, and you will pass main as
// a parameter
export const webApi = functions.https.onRequest(main);
import {writeNewPost} from "./postsController";
// Add new post
app.post('/posts', (req, res) => {
    writeNewPost(req.body);
    res.send('Create a new post');
});
// Update new post
app.patch('/posts/:postId', (req, res) => {
    // firebaseHelper.firestore
    //     .updateDocument(db, contactsCollection, req.params.contactId, req.body);
    res.send('Update a new contact');
});
// View a post
app.get('/posts/:postId', (req, res) => {
    // firebaseHelper.firestore
    //     .getDocument(db, contactsCollection, req.params.contactId)
.
    then(doc => res.status(200).send(doc));
});
// View all posts
app.get('/posts', (req, res) => {
    // firebaseHelper.firestore
    //     .backup(db, contactsCollection)
.
    then(data => res.status(200).send(data))
});
// Delete a post
app.delete('/posts/:postId', (req, res) => {
    // firebaseHelper.firestore
    //     .deleteDocument(db, contactsCollection, req.params.contactId);
    res.send('Document deleted');
});