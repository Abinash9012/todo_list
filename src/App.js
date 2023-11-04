import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Addtodo from "./components/Addtodo";
import About from "./components/About";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Item was deleted", todo);
    settodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    console.log("adding a todo", title, desc);
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const Mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodo([...todos, Mytodo]);
    console.log(Mytodo);
  };

  const [todos, settodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Main>
        <Navbar title="My Todos List" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Addtodo addtodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Main>
    </>
  );
}

export default App;
