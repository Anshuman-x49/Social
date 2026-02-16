const express = require('express');
const postModel = require('./models/post.model');
const multer = require('multer');
const uploadImage = require('./services/storage.service');

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});

app.post('/create-post', upload.single('image'), async(req,res) => {

    try {
        if (!req.file) {
            return res.status(400).json({
                message: 'No image file provided'
            });
        }

        const result = await uploadImage(req.file.buffer);      
        
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })

        return res.status(201).json({
            message: 'Post created successfully',
            post
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error creating post',
            error: error.message
        });
    }
})

module.exports = app;