import "./App.css";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import NotFoundPage from "./pages/NotFoundPage";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/user/:id" component={ContactDetail} />
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/add-comment" component={AddContact} />
            <Route path="/" exact component={Contacts} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
