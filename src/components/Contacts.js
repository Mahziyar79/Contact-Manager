import { Link } from "react-router-dom";
import Contact from "./Contact";

const Contacts = ({ contacts, onDelete, match }) => {
  return (
    <div className="main-contact">
      <div>
        <Link to="/add-comment">
          <button className='add_contact'>Add New Comment</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default Contacts;
