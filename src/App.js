import React, {
  useState,
 
  useRef,
  
  useReducer,
  createContext,
} from "react";
import "./App.css";

import RenderItem from "./Components/RenderItem";

export const AppContext = createContext(null);

const initialState = [
  {
    id: Date.now(),
    name: "Aravind",
    gender: "Male",
    weight:62,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((user) => {
        return user.id !== action.payload.id;
      });
    default:
      return "error";
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [weight,setWeight]=useState("")
  const result=calculateBodyFat(weight)
  const nameInput = useRef(null);

  function calculateBodyFat(weight){
    while(weight<200000) weight++;
    if(weight<70){
      return "average body fat"
    }
  }

 

  const addUser = (ev) => {
    ev.preventDefault();
    setName("");
    setGender("");
    const newUser = {
      id: Date.now(),
      name,
      gender,
      weight,
    };
    nameInput.current.focus();
    dispatch({ type: "add", payload: newUser });
  };

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="main-container">
        <h1>List of users</h1>
        <form onSubmit={addUser} className="form-container">
          <input
            ref={nameInput}
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Enter gender"
            value={gender}
            onChange={(ev) => setGender(ev.target.value)}
          />
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(ev) => setWeight(ev.target.value)}
          />
          <button type="submit">Add User</button>
        </form>
        <h1>body fat : {result}</h1>
        <RenderItem />
      </div>
    </AppContext.Provider>
  );
};

export default App;
