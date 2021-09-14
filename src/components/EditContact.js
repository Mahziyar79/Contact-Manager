import { useState } from "react";
import http from "../services/httpService";

const EditContact = ({ history, location, editHandler }) => {
  const { contact } = location.state;

  const [newContact, setNewContact] = useState({
    name: contact.name,
    email: contact.email,
  });

  const nameHandler = (e) => {
    setNewContact({ ...newContact, name: e.target.value });
  };
  const emailHandler = (e) => {
    setNewContact({ ...newContact, email: e.target.value });
  };

  const submitHandler = async (e) => {
    if (!contact.name || !contact.email)
      return alert("please Enter the name and email");
    e.preventDefault();
    try {
      await http.put(`/contacts/${contact.id}`, newContact);
      setNewContact({ name: "", email: "" });
      history.push("/");
    } catch (error) {}
  };

  return (
    <form className="addform" onSubmit={(e) => submitHandler(e)}>
      <h2>Update Contact</h2>
      <div className="name-input">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name..."
          value={newContact.name}
          onChange={(e) => nameHandler(e)}
        ></input>
      </div>
      <div className="email-input">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email..."
          value={newContact.email}
          onChange={(e) => emailHandler(e)}
        ></input>
      </div>
      <button className="add_btn" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditContact;
