import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Addtodo from "./components/Addtodo";

function App() {
  const onDelete = (todo) => {
    console.log("Item was deleted", todo);
    settodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
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
    console.log(Mytodo);

    settodo([...todos, Mytodo]);
  };

  const [todos, settodo] = useState([
    {
      sno: 1,
      title: "Grocery Shopping",
      desc: "Buy fruits, vegetables, milk, and bread at the local supermarket.",
    },
    {
      sno: 2,
      title: "Work Presentation",
      desc: "Prepare slides and practice presentation for the upcoming meeting at the office.",
    },

    {
      sno: 3,
      title: "Home Cleaning",
      desc: "Vacuum the floors, dust the furniture, and clean the kitchen and bathroom.",
    },
    {
      sno: 4,
      title: "Fitness Routine",
      desc: " Go for a 30-minute run and do a 20-minute strength training workout at the gym.",
    },
    {
      sno: 5,
      title: "Study for Exam",
      desc: "Review chapters 1 to 5 for the upcoming history exam, create flashcards, and take practice quizzes.",
    },
    {
      sno: 6,
      title: "Budget Review",
      desc: " Sit down and review your monthly budget, track expenses, and plan for savings and investments.",
    },
  ]);
  return (
    <>
      <Navbar title="My Todos List" />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
