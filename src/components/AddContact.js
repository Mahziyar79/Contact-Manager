import { useState } from "react";
import http from "../services/httpService";

const AddContact = ({ history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const nameHandler = (e) => {
    setContact({ ...contact, name: e.target.value });
  };
  const emailHandler = (e) => {
    setContact({ ...contact, email: e.target.value });
  };

  const submitHandler = async (e) => {
    if (!contact.name || !contact.email)
      return alert("please Enter the name and email");
    e.preventDefault();
    try {
      await http.post("/contacts", contact);
      setContact({ name: "", email: "" });
      history.push("/");
    } catch (error) {}
  };

  return (
    <form className="addform" onSubmit={(e) => submitHandler(e)}>
      <h2>Add Contact</h2>
      <div className="name-input">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name..."
          value={contact.name}
          onChange={(e) => nameHandler(e)}
        ></input>
      </div>
      <div className="email-input">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email..."
          value={contact.email}
          onChange={(e) => emailHandler(e)}
        ></input>
      </div>
      <button className="add_btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddContact;
