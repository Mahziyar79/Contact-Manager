import { FaTrash } from "react-icons/fa";

const Contacts = ({ contacts, onDelete }) => {
  return (
    <div className="main-contact">
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="show-contacts">
            <div className="contact">
              <div className="img-contact">
                <img alt="image_profile" src="./../profile.jpg" />
              </div>
              <div className="info-contact">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
            </div>
            <div className="delete">
              <button onClick={() => onDelete(contact.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
