import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notificationBody = { title, body };
    await axios.post("http://localhost:8000/notification", notificationBody);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Body</label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">Send notification</button>
    </form>
  );
};

export default Form;
