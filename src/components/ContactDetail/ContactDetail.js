import { Link } from "react-router-dom";

const ContactDetail = ({location}) => {
    const {contact} = location.state
    return ( 
        <div>
            <div>My Name is : {contact.name}</div>
            <div>My email is : {contact.email}</div>
            <Link to='/'>Back to Contact List</Link>
        </div>
     );
}
 
export default ContactDetail;