import { useRef, useState } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAddProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
      <div className="w-[35rem]">
        <Modal ref={modal} buttonCaption={"Close"}>
          <h2 className="text-xl font-bold text-stone-700 my-4">
            Invalid Input
          </h2>
          <p className="text-stone-600 mb-4">
            uWu looks like you forgot to enter a value.{" "}
          </p>
          <p className="text-stone-600 mb-4">
            Make sure all input fields are completed before clicking 'Save'!
          </p>
        </Modal>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
