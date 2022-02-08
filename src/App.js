import React from "react";
import NavBar from "./component/navbar";
import Body from "./component/body";
import Footer from "./component/footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/00");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Date Town Village Country</p>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {`${user.id}  ${user.Date}  ${user.Time}  ${user.Brief_Description_of_sighting}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
