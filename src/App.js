import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItemArr, setTodoItemArr] = useState([]);

  const addTodo = () => {
    setTodoItemArr([...todoItemArr, inputValue]);
    console.log(todoItemArr);
    // setTodoItemArr([]);
  };

  const deleteItem = (itemToRemove) => {
    const updatedArray = todoItemArr.filter((item) => item !== itemToRemove);
    setTodoItemArr(updatedArray);
  };

  return (
    <div className="App">
      <div className="input">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <div className="todoList">
        {todoItemArr.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              display: "flex",
              width: 600,
              justifyContent: "space-between",
            }}
          >
            <p>{item}</p>
            <button onClick={() => deleteItem(item)}>Удалчить эту чушь</button>
            <button>Выполнил эту задачку</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
