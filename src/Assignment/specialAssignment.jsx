const SpecialAssignment = (props) => {
  return (
    <>
      <div
        style={{
          color: "white",
          padding: "30px",
          border: "4px solid red",
          borderRadius: "20px",
          backgroundColor: "#333",
        }}
      >
        <h3>This is from specialAssignment</h3>
        {props.children}
      </div>
    </>
  );
};

export default SpecialAssignment;
