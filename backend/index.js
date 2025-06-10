import express from "express";
import cors from "cors";
const port = 3000;
const app = express();
app.use(express.json());
app.use(cors())

app.post("/api/message", (req, res) => {
    const { name, email, message } = req.body;
    console.log("留言成功", name, email, message);
    res.json({
        message:"留言成功送出！"
    })
})

app.listen(port, () => {
    console.log(`在${port}端口監聽中...`)
})
