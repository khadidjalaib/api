import { useState, useEffect } from "react";
import axios from "axios";
import "../src/App.css";
const App = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data;
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
        setError(false);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <div className="liste">
          <ul>
            {users.map((element) => (
              <li> {element.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
