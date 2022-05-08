import React from "react";
export default function Home(props) {
    const user_id = localStorage.getItem("user_id")


  return (
      <div>
          This is homepage, welcome {user_id}!
      </div>
  );
}