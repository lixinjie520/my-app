import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

// 設定 SendGrid API 金鑰
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/api/message", async (req, res) => {
    console.log("收到前端資料：", req);
    const { name, email, message } = req.body;
    console.log("留言成功", name, email, message);

    const content = {
        to: process.env.SENDGRID_TO,
        from: process.env.SENDGRID_TO,
        subject: "個人網站留言",
        text: `您好，您有一封來自個人網站的留言：\n姓名:${name}\nEmail:${email}\n留言內容:${message}`
        
    };

    try {
        await sgMail.send(content);
        res.json({
            message:"留言已送出並寄信通知。"
        })
    } catch (error) {
        console.error("SendGrid 寄信失敗", error);
        res.status(500).json({
            message:"發送失敗，請稍後再試！"
        })
    }
    
})

const port = 3000;
app.listen(port, () => {
    console.log(`在${port}端口監聽中...`)
})
