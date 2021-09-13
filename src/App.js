import "./App.css";
import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import NotFoundPage from "./pages/NotFoundPage";
import http from "./services/httpService";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/contacts");
      setContacts(data);
    };
    try {
      getContacts();
    } catch (error) {}
  }, []);

  const changeContactHandler = (name, email) => {
    const newContact = {
      // id: Math.floor(Math.random() * 1000),
      name: name,
      email: email,
    };
    const postContacts = async () => {
      await http.post("/contacts", newContact);
      const { data } = await http.get("/contacts");
      setContacts(data);
    };
    postContacts();
  };

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

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/user/:id" component={ContactDetail} />
            <Route
              path="/add-comment"
              render={(props) => (
                <AddContact changeContact={changeContactHandler} {...props} />
              )}
            />
            <Route
              path="/"
              exact
              render={(props) => (
                <Contacts
                  contacts={contacts}
                  onDelete={onDeleteHandler}
                  {...props}
                />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
