import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
    const [tasks, addTask] = useState([]);

    const addContentToArray = (inputContent) => {
        addTask(() => ([ ...tasks, inputContent]));
    }

    const deleteTaskFromArray = (id) => {
        addTask(() => tasks.filter((task, index) => index !== id));
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addContentToArray} />
            {tasks.map((task, index) => (
                <Note key={index} title={task.title} id={index} content={task.content} deleteTask={deleteTaskFromArray} />
            ))}
            <Footer />
        </div>
    );
}

export default App;
