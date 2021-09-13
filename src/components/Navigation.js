import { withRouter, NavLink } from "react-router-dom";
const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/add-comment", name: "New Comment" },

];
const Navigation = () => {
  return (
    <header className="nav">
      <nav>
        <ul className="list-nav">
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  activeClassName="active-nav"
                  exact={item.exact || false}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
