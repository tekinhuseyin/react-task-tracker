import { useState } from "react";

const GorevEkle = ({setGorevler, gorevler}) => {
 
 const [textInput, setTextInput]=useState("")

 const [dayInput, setDayInput]=useState("")

  const [buton, setButon] = useState(true);


 const add =(e)=>{
  e.preventDefault()

  const yeniGorevler = {
    id: gorevler.length+1,
    text: textInput,
    day: dayInput,
    bitti: false,
  };
  setGorevler([...gorevler, yeniGorevler])
 } 

 const handleClick=()=>{
  setButon(!buton)
 }
 
  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button
          onClick={handleClick}
          className={buton == true ? "btn2" : "btn"}
        >
          {buton == true ? "Show Add Task Bar" : "Close Add Task Bar"}
        </button>
      </header>
      {!buton && (
        <form onSubmit={add}>
          <div className="form-control">
            <label htmlFor="text">Task</label>
            <input
              id="text"
              type="text"
              name="text"
              value={textInput}
              placeholder="Add Task"
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="date"
              name="day"
              value={dayInput}
              placeholder="Add Task"
              onChange={(e) => setDayInput(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-submit" type="submit">
              SUBMİT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GorevEkle;
