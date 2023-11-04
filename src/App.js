import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Addtodo from "./components/Addtodo";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";

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

  // {
  //   sno: 1,
  //   title: "Grocery Shopping",
  //   desc: "Buy fruits, vegetables, milk, and bread at the local supermarket.",
  // },
  // {
  //   sno: 2,
  //   title: "Work Presentation",
  //   desc: "Prepare slides and practice presentation for the upcoming meeting at the office.",
  // },

  // {
  //   sno: 3,
  //   title: "Home Cleaning",
  //   desc: "Vacuum the floors, dust the furniture, and clean the kitchen and bathroom.",
  // },
  // {
  //   sno: 4,
  //   title: "Fitness Routine",
  //   desc: " Go for a 30-minute run and do a 20-minute strength training workout at the gym.",
  // },
  // {
  //   sno: 5,
  //   title: "Study for Exam",
  //   desc: "Review chapters 1 to 5 for the upcoming history exam, create flashcards, and take practice quizzes.",
  // },
  // {
  //   sno: 6,
  //   title: "Budget Review",
  //   desc: " Sit down and review your monthly budget, track expenses, and plan for savings and investments.",
  // },
  return (
    <>
      {/* <Router> */}
        <Navbar title="My Todos List" />
        {/* <Switch> */}
          {/* <Route
            exact
            path="/"
            render={() => {
              return (
                <> */}
                  <Addtodo addtodo={addtodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                {/* </>
              );
            }}
          ></Route>
          <Route exact path="/about"> */}
            <About />
          {/* </Route> */}
        {/*  </Switch> */}

        <Footer />
      {/* </Router> */}
    </>
  );
}

export default App;
