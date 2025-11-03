// ShowData.jsx
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";

export default function ShowData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(db, "users");

    // Listen to changes
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.values(data);
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  return (
    <div>
      <h3>Data from Firebase:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
