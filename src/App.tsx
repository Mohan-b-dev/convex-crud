import { useState } from "react";
import Header from "./components/header";
import Taskcard from "./components/task-card";
import Taskmodal from "./components/task-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tasks = [
    {
      _id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      completed: false,
    },
    {
      _id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      completed: true,
    },
    {
      _id: "3",
      title: "Task 3",
      description: "Description for Task 3",
      completed: false,
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTask={handleOpenModal} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Taskcard task={task} />
          ))}
        </div>
      </main>
      <Taskmodal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
