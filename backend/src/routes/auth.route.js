import express from "express";

const router = express.Router();

//pathways for the localhost website api
router.get("/signup", (req, res) => {
    res.send("Signup endpoint");
})

router.get("/login", (req, res) => {
    res.send("Login endpoint");
})

router.get("/logout", (req, res) => {
    res.send("Logout endpoint");
})

export default router;