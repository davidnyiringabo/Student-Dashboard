import "./Note.css";
import Note_Item from "./Note_Item";
import { FaPlusCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import NoteDetails from "../context/context";

let count = 1;
const Note = () => {
  const { noteData, setShowModal, noteReady } = useContext(NoteDetails);

  const addToNote = () => {
    setShowModal(true);
  };

  return (
    <section className="mt-3">
      <div className="w-full  px-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-2 mt-4 bg-blue-500 rounded text-white h-10 py-2 w-10/12 text-center">
            Notes
          </h1>
          <div className=" flex items-center justify-center">
            <FaPlusCircle
              size={30}
              className="text-blue-500 "
              onClick={addToNote}
            />
          </div>
        </div>

        <div className="h-60 overflow-scroll py-3 ">
          {noteReady
            ? noteData.listOfNotes.map((item, id) => (
                <div
                  key={id}
                  className="mt-3 w-full grid grid-cols-5 border dark:border-0 shadow-md "
                >
                  <div className="col-span-4 border-2 border-black">
                    <Note_Item key={id} item={item} id={id} />
                  </div>
                  {noteData.date}
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Note;