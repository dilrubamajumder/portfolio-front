import React from "react";
import MyBooks from "../Components/UserBooks/MyBooks";
import "./UserBooks.css";
import Moving from "./Movingimages/Moving";

function UsersBooks() {
  return (
    <div className="mybooks">
      <div >
        <h1>My Books: </h1>
        <h7> Here are all the Books You uploaded</h7>
        <MyBooks />
      </div>
    </div>
  );
}

export default UsersBooks;
