import { useEffect,useState } from "react";
import Contacts from "../components/Contacts";

const HomePage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      showLocal();
    }, []);
  
    useEffect(() => {
      saveLocal();
    }, [contacts]);
  
    // save Item to LocalStorage
    const saveLocal = () => {
      if (localStorage.getItem("contacts") === null) {
        localStorage.setItem("contacts", JSON.stringify([]));
      } else {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }
    };
  
    // Show Item in LocalStorage
    const showLocal = () => {
      if (localStorage.getItem("contacts") === null) {
        localStorage.setItem("contacts", JSON.stringify([]));
      } else {
        setContacts(JSON.parse(localStorage.getItem("contacts")));
      }
    };
  
    const changeContactHandler = (name, email) => {
      console.log(name, email);
      const newContact = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        email: email,
      };
      setContacts([...contacts, newContact]);
    };
  
    const onDeleteHandler = (id) => {
      const items = contacts.filter((item) => item.id !== id);
      setContacts(items);
    };

    return ( 
      <Contacts contacts={contacts} onDelete={onDeleteHandler} />
     );
}
 
export default HomePage;