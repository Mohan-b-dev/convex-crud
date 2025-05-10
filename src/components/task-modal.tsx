interface TaskModalProps {
  isOpen: boolean;
}

const TaskModal = ({ isOpen }: TaskModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-bold">Modal</h1>
      </div>
    </div>
  );
};

export default TaskModal;
