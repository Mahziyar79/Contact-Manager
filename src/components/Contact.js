import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div key={contact.id} className="show-contacts">
      <div className="contact">
        <div className="img-contact">
          <img alt="image_profile" src="./../profile.jpg" />
        </div>
        <Link to={{pathname:`/user/${contact.id}` , state:{contact}}}>
          <div className="info-contact">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
        </Link>
      </div>
      <div className="delete">
        <button onClick={() => onDelete(contact.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Contact;
