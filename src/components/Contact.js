import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="show-contacts">
      <div className="contact">
        <div className="img-contact">
          <img alt="image_profile" src="./../profile.jpg" />
        </div>
        <Link to={{ pathname: `/user/${contact.id}`, state: { contact } }}>
          <div className="info-contact">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
        </Link>
      </div>
      <div className='btns'>
        <Link to={{pathname:`/edit/${contact.id}` , state:{contact}}}>
          <button className="edit_btn">Edit</button>
        </Link>
        <button className="delete_btn" onClick={() => onDelete(contact.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Contact;
