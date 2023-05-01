import express from "express";
import path from 'path';

import serviceModel from "../models/serviceModel.js";

const router = express.Router();

router.get('/', (req, res)=>{
    res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
})

router.get('/contact', (req, res)=>{
    res.sendFile(path.join(process.cwd(), 'views', 'contact.html'));
})

router.get('/project', (req, res)=>{
    res.sendFile(path.join(process.cwd(), 'views', 'project.html'));
})

router.get('/achievement', (req, res)=>{
    res.sendFile(path.join(process.cwd(), 'views', 'achievement.html'));
})

router.post('/contact', async (req, res)=>{
    try {
        const serviceDoc = new serviceModel({
            name : req.body.name,
            call : req.body.number,
            mail : req.body.email,
            message : req.body.message
        })
        await serviceDoc.save();
        res.sendFile(path.join(process.cwd(), 'views', '/Accepted.html'));
    } catch (error) {
        res.redirect('/contact');
    }
})

export default router;