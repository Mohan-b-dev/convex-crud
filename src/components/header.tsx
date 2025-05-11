interface HeaderProps {
  onAddTask: () => void;
}

function Header({ onAddTask }: HeaderProps) {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Task Manger</h1>
          <button
            onClick={onAddTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
