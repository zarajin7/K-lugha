import React from "react";

function AddLessons({ isOpen, onClose, children }) {
  const handleOpenLessons = () => onClose();

    return (
      <div className={`modal ${isOpen ? "block" : "hidden"} fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center`}>
        <div className="modal-content bg-white p-6 rounded-lg h-[70%] flex-col">
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold">Add a lesson</h3>
            <button onClick={onClose} className="text-red-600 text-lg">&times;</button>
          </div>
          {children}
        </div>
      </div>
  );
}

export default AddLessons;
