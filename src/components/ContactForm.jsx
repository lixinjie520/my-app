import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/message",
        formData
      );
      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("送出失敗", error);
      alert("留言發送失敗，請稍後再試。");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 w-[350px]">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="Name"
        className="border px-2 py-1 text-sm h-10 "
        required
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={formData.email}
        placeholder="Email"
        className="border px-2 py-1 text-sm h-10"
        required
      />
      <textarea
        placeholder="Message"
        name="message"
        onChange={handleChange}
        value={formData.message}
        className="border p-2 text-sm"
        rows="5"
        maxLength="200"
        required
      ></textarea>
      <button
        type="submit"
        className="cursor-pointer py-1 bg-green-600 text-white h-10 hover:bg-green-700 transition-colors duration-200 ease-in-out "
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
