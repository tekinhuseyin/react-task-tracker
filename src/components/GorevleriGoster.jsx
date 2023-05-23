import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons

const GorevleriGoster = ({gorevler, setGorevler}) => {

  const del = (x)=>{
    setGorevler(gorevler.filter(a=>a.id!==x.id))
  }

  return (
    <div>
      {gorevler.map((x) => {

        return (
          <div key={x.id}
          className={x.bitti==true ? "done" : "gorev"}
          onDoubleClick={
            ()=>{
              setGorevler(
                gorevler.map((a) =>
                  x.id == a.id ? { ...a, bitti: !a.bitti } : a
                )
              );
            }
          }
          
          >
            <h3>
              {x.text}
              <FaTimesCircle
                style={{ color: "red" }}
                type="button"
                onClick={()=>del(x)}
               
              />
            </h3>
            <h6>{x.day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
