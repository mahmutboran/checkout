import React from "react";
import Button from "react-bootstrap/Button";

const Buttons = ({show,setShow,text}) => {
  return (
    <div className="d-flex justify-content-center">
      <Button className="mb-2 " onClick={()=>{setShow(!show)}} variant={show ? "warning" : "primary"}>{text } Product Bar</Button>
    </div>
  );
};

export default Buttons;