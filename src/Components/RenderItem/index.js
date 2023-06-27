import { useContext } from "react";
import { AppContext } from "../../App";
import "./index.css";

const RenderItem = () => {
  const { state, dispatch } = useContext(AppContext);
  

 

  return (
   
    <ul className="each-user">
        <div className="heading-block">
            <h4>Name</h4>
            <h4 style={{marginLeft:"50px"}}>Gender</h4>
            <h4 style={{marginLeft:"50px"}}>Weight</h4>
        </div>
      {state.map((eachUser) => {
        return (
          <div key={eachUser.id} className="each-user-block">
            <h3>{eachUser.name}</h3>
            <p>{eachUser.gender}</p>
            <p>{eachUser.weight}</p>
            <button
              type="button"
              className="delete-button"
              onClick={() =>
                dispatch({ type: "delete", payload: { id: eachUser.id } })
              }
            >
              delete
            </button>
          </div>
        );
      })}
    </ul>
   
  );
};

export default RenderItem;
