import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Contacts = ({ contacts, onDelete, match }) => {
  const id = match.params.id;
  return (
    <div className="main-contact">
      <div>
        <Link to="/add-comment">
          <button>Add New Comment</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        return <Contact contact={contact} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default Contacts;
