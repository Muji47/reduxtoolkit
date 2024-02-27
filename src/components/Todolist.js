import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaDeleteLeft } from "react-icons/fa6";
import { removeFromList } from "../store/listSlice";

function Todolist() {
  const list = useSelector((state) => state.lists);
  const dispatch=useDispatch()
  return (
    <div>
      <ul>
        {list.map((list, index) => (
          <li key={index} className="border-b-2 m-2">
            {list}
            <button className="float-right" onClick={()=>dispatch(removeFromList(index))}><FaDeleteLeft/></button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
