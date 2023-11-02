import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("Item was deleted", todo);
    settodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };  

  const [todos, settodo] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You can go to the Market and buy a something.",
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "You can go to the Market and buy a something.",
    },

    {
      sno: 3,
      title: "Go to the College",
      desc: "You can go to the Market and buy a something.",
    },
    {
      sno: 4,
      title: "Go to the Hospital",
      desc: "You can go to the Market and buy a something.",
    },
    {
      sno: 5,
      title: "Go to the Garden",
      desc: "You can go to the Market and buy a something.",
    },
  ]);
  return (
    <>
      <Navbar title="My Todos List" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </>
  );
}

export default App;
