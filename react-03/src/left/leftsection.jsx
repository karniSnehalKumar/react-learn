import React, { useState } from "react";
const Leftsection=({ setNotes })=>{
    const [note,setNote]=useState("");
    const [details,setDetails]=useState("");
    const updatenote=(e)=>{
       
        setNote(e.target.value);
        console.log(note);
    }
    const updatedesc=(e)=>{
       
        setDetails(e.target.value);
    }
    const update=(e)=>{
        e.preventDefault();
        const newNote={
            note,details
        }
        setNote("");
        setDetails("");
        setNotes((prev)=>
            [...prev,newNote]
        )
    }
    return (
        <div className="px-10 py-15">
            <h2 className="text-4xl font-bold pb-5">ADD NOTES</h2>
            <form action="" onSubmit={update}  className="mt-5 flex flex-col gap-4">
                <input type="text" placeholder="Enter note..." onChange={(e)=>{
                    updatenote(e);

                }}
                value={note}
                
                    className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" />
                <textarea placeholder="Write Details here" onChange={(e)=>{
                    updatedesc(e);
                }} value={details} className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32"></textarea>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Add Note</button>
            </form>
        </div>
    )
}
export default Leftsection;