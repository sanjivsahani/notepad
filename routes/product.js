const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/getproduct', fetchuser, async (req, res) => {
    try {
        const notes = await Product.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Product using: POST "/api/notes/addnote". Login required
router.post('/addproduct', fetchuser, [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('qwt', 'Enter a valid quantiry').isLength({ min: 5 }),
    body('price', 'Enter a valid price').isLength({ min: 3 }),
    body('modelno', 'Enter a valid name').isLength({ min: 3 }),

    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { name,qwt,price,modelno } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Product({
                name,qwt,price,modelno , user: req.user.id
            })
            const saveproduct = await note.save()

            res.json(saveproduct)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Product using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { name,qwt,price,modelno } = req.body;

    try {
        // Create a newproduct object
        const newproduct = {};
        if (name) { newproduct.title = name };
        if (qwt) { newproduct.description = qwt };
        if (price) { newproduct.tag = price };
        if (modelno) { newproduct.tag = modelno };


        // Find the note to be updated and update it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        product = await Product.findByIdAndUpdate(req.params.id, { $set: newproduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Product using: DELETE "/api/notes/deletenote". Login required
router.delete('/delteproduct/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Product
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Product has been deleted", note: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router