/* eslint-disable promise/always-return */

const Firebase = () => {
    const functions = require('firebase-functions');
    const admin = require('firebase-admin');

    var serviceAccount = require("./skindexPremission.json");

    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://skindex-3feb3.firebaseio.com"
    });

    const express = require('express');
    const app = express();
    const db = admin.firestore();

    const cors = require('cors');
    app.use(cors({origin:true}))

    //Routes
    app.get('/hello-world', (req, res) => {
        return res.status(200).send('Hello World!');
    })


    //Create
    //Post
    app.post('/api/create', (req, res) => {
        (async () => {
            try
            {
                await db.collection('products').doc('/' + req.body.id + '/')
                .create({
                    name: req.body.name,
                    // productType: req.body.productType,
                    price:req.body.price
                    // order:req.body.order
                })

                return res.status(200).send();
            }
            catch (error)
            {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });

    //Read a specific product based on ID
    //Get
    app.get('/api/read/:id', (req, res) => {
        (async () => {
            try
            {
                const document = db.collection('products').doc(req.params.id);
                let product = await document.get();
                let response =product.data();

                return res.status(200).send(response);
            }
            catch (error)
            {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });


    //Read all products
    //Get
    app.get('/api/read/', (req, res) => {
        (async () => {
            try
            {
                let query = db.collection('products');
                let response = [];

                await query.get().then(querySnapshot => {
                    let docs = querySnapshot.docs;

                    for (let doc of docs) {
                        const selectedItem = {
                            id: doc.id,
                            name: doc.data().name,
                            description: doc.data().description,
                            price: doc.data().price
                        };
                        response.push(selectedItem);
                    }
                    return response;
                })
                return res.status(200).send(response);
            }
            catch (error)
            {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });


    //Update
    //Put
    app.put('/api/update/:id', (req, res) => {
        (async () => {
            try
            {
                const document = db.collection('products').doc(req.params.id);
                
                console.log(req.body, "req");

                await document.update({
                    name: req.body.name,
                    description: req.body.description,
                    price:req.body.price
                });
                console.log(res, "response");
                return res.status(200).send();
            }
            catch (error)
            {
                console.log("update put");
                return res.status(500).send(error);
            }
        })();
    });


    //Delete
    app.delete('/api/delete/:id', (req, res) => {
        (async () => {
            try
            {
                const document = db.collection('products').doc(req.params.id);

                await document.delete();

                return res.status(200).send();
            }
            catch (error)
            {
                console.log(error);
                return res.status(500).send(error);
            }
        })();
    });
    exports.app = functions.https.onRequest(app);
}

export default Firebase;

//Export the app to firebase cloud functions