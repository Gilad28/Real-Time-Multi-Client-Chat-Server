import express from "express";

const router = express.Router();

//pathways for the localhost website api
router.get("/send", (req, res) => {
    res.send("send Message Endpoint");
})

export default router;