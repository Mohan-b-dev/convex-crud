
interface HeaderProps { 
    onAddTask: () => void;
}

function Header({onAddTask}:HeaderProps) {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Task Manger</h1>
          <button onClick={onAddTask} className="bg-blue-100">Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
