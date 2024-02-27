import { useState } from "react";
import Button from "./components/Button";
import Todolist from "./components/Todolist";
import { useDispatch } from "react-redux";
import { addToList,removeAll } from "./store/listSlice";

function Todolists() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleButton=()=>{
        dispatch(addToList(text))
            setText("")
    }
  return (
    <div className="w-[50%] m-auto">
        <div className="m-auto w-[50%]">
    <h1 className="text-4xl my-8">Todo list</h1>
    <label for="todoinput">Todo:</label>
    <input
      type="text"
      id="todoinput"
      required
      className="bg-slate-300 outline-none p-2 mx-1"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <Button
      className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white mx-2"
      onClick={handleButton}
    >
      Add
    </Button>
    </div>
    <Todolist />
    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white mx-2 float-right"
      onClick={()=>dispatch(removeAll())}>Delete All</Button>
  </div>
  )
}

export default Todolists