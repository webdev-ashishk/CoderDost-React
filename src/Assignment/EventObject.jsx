import React from "react";

const EventObject = () => {
  function handleClick(event) {
    // alert("working!");
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event);
  }
  return (
    <>
      <h2>Event object!</h2>
      <button onClick={handleClick}>click to check-event-object</button>
    </>
  );
};

export default EventObject;
