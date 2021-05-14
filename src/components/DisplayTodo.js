import React from "react";

const DisplayTodo = ({ todos, setTodos, filteredTodos }) => {
  const onComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {filteredTodos.map((todo) => (
        <section
          className="flex bg-white container mx-auto px-6 py-3"
          key={todo.id}
        >
          <div className="w-full rounded-lg shadow-lg p-4">
            <input
              type="checkbox"
              onChange={() => onComplete(todo)}
              checked={todo.completed}
            />
            <input
              type="text"
              value={todo.title}
              className="ml-2"
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button
                className="puppercase font-semibold tracking-wide bg-green-100 text-green-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-green-200 text-xs"
                onClick={() => onComplete(todo)}
              >
                Done
              </button>
              <button
                className="ml-2 puppercase font-semibold tracking-wide bg-red-100 text-red-700 px-2 py-1 rounded-lg mt-2 focus:outline-none hover:bg-red-200 text-xs"
                onClick={() => onDelete(todo)}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DisplayTodo;
