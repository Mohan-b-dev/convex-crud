import Header from "./components/header";
import Taskcard from "./components/task-card";
import Taskmodal from "./components/task-modal";


function App() {
  const tasks = [
    {
      id: '1',
      title: "Task 1",
      description: "Description for Task 1",
      completed: false,
    },
    {
      id: '2',
      title: "Task 2",
      description: "Description for Task 2",
      completed: true,
    },
    {
      id: '3',
      title: "Task 3",
      description: "Description for Task 3",
      completed: false,
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTask={() => {}} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Taskcard task={task} />
          ))}
        </div>
      </main>
      <Taskmodal isOpen={true} />
    </div>
  );
}

export default App
