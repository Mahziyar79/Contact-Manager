import { useState } from "react";

const AddContact = ({ changeContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    if (!name || !email) return alert("please Enter the name and email");
    e.preventDefault();
    changeContact(name, email);
    setName("");
    setEmail("");
  
  };

  return (
    <form className="addform" onSubmit={(e) => submitHandler(e)}>
      <h2>Add Contact</h2>
      <div className="name-input">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => nameHandler(e)}
        ></input>
      </div>
      <div className="email-input">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => emailHandler(e)}
        ></input>
      </div>
      <button className='add_btn' type="submit">Add</button>
    </form>
  );
};

export default AddContact;
