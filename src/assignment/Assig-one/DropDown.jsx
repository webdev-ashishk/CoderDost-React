import { useState } from "react";
const DropDown = () => {
  const [nations, setNations] = useState([
    { name: "India", value: "IN" },
    { name: "Pak", value: "PK" },
    { name: "Bangladesh", value: "BG" },
    { name: "ashish", value: "241" },
  ]);
  // const nations = [
  //   { name: "India", value: "IN" },
  //   { name: "Pak", value: "PK" },
  //   { name: "Bangladesh", value: "BG" },
  // ];

  function handleSubmit(e) {
    e.preventDefault();
    // alert("welcome ");
    const ibox1 = document.getElementById("ibox1").value;
    const ibox2 = document.getElementById("ibox2").value;
    // console.log(ibox1);
    // console.log(ibox2);
    const storeNewValue = {
      name: ibox1,
      value: ibox2,
    };
    // console.log(find);
    setNations([...nations, storeNewValue]);
    // nations.push(storeNewValue);
    console.log(nations);
  }
  // function handleOption(e) {
  //   console.log(e.target.value);
  // }
  function handleSelect() {
    var subjectIdNode = document.getElementById("subjectName");
    var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    console.log("The selected value=" + value);
  }
  return (
    <>
      <select onChange={handleSelect} id="subjectName">
        {nations.map((nation, index) => (
          <option value={nation.value} key={index}>
            {nation.name}
          </option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="country"
          placeholder="contry-name"
          style={{ margin: "5px" }}
          id="ibox1"
        />
        <input
          type="text"
          name="country"
          placeholder="contry-code"
          id="ibox2"
          style={{ margin: "5px" }}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default DropDown;
