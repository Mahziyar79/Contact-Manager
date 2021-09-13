import "./App.css";
import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import ContactDetail from "./components/ContactDetail/ContactDetail";

function App() {
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
    
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
          <Route 
            path='/user/:id'
            component={ContactDetail}
            />
            <Route 
            path='/add-comment'
            render={(props)=><AddContact changeContact={changeContactHandler} {...props}/>}
            />
            <Route 
            path='/'
            render={(props)=><Contacts contacts={contacts} onDelete={onDeleteHandler} {...props}/>}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
      {/* <Navigation /> */}
      {/* <AddContact changeContact={changeContactHandler} /> */}
      {/* <Contacts contacts={contacts} onDelete={onDeleteHandler} /> */}
    </div>
  );
}

export default App;
