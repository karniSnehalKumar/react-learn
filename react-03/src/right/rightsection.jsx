import React from "react";
const RightSection = ({notes, setNotes}) => {
    const deteleNote=(index)=>{
        const newNotes=notes.filter((note,i)=>i!==index);
        setNotes(newNotes);
    };
    return (
        <div className="px-10 py-15">
          <h2 className="font-bold text-4xl pb-10">NOTES</h2>
            <div className="mt-5 flex flex-col gap-4">
                {notes.map((note, index) => (
                    <div key={index} className="border border-gray-300 rounded py-2 px-4">
                        <h3 className="font-bold text-lg">{note.note}</h3>
                        <p className="text-gray-600">{note.details}</p>
                        <button  onClick={() => deteleNote(index)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300">Delete</button>
                    </div>
                ))}
            </div>

        </div>
    )

}

export default RightSection;