import express from "express";
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("html-onwire")
});

export {router as apiRouter};