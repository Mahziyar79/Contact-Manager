import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import http from "../services/httpService";

const Contacts = () => {
  const [contacts, setContacts] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/contacts");
      setContacts(data);
      setFilteredContacts(data);
    };
    try {
      getContacts();
    } catch (error) {}
  }, []);

  const onDeleteHandler = (id) => {
    const deleteContact = async () => {
      await http.delete(`/contacts/${id}`);
      const { data } = await http.get("/contacts");
      setContacts(data);
    };
    try {
      deleteContact();
    } catch (error) {}
  };

  const searchHandler = (e) => {
    const filterText = e.target.value;
    const filteredItems = contacts.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
    setFilteredContacts(filteredItems);
  };

  return (
    <div className="main-contact">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchHandler(e)}
        ></input>
      </div>
      <div>
        <Link to="/add-comment">
          <button className="add_contact">Add New Comment</button>
        </Link>
      </div>
      {filteredContacts ? (
        filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={onDeleteHandler}
            />
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contacts;
