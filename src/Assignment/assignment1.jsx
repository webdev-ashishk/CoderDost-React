import React from "react";
// import "./Assignment/App.css";
import "./style.css";
function Skill({ skills }) {
  if (skills.length === 0) {
    return <></>;
  }
  return (
    <>
      <h1>Skill</h1>
      <div>
        <h6 style={{ display: "flex" }}>
          {skills.map((skill, index) => {
            return (
              <>
                <div className="skilles">
                  <ol>
                    <h2 key={index}>
                      <li>{skill}</li>
                    </h2>
                  </ol>
                </div>
              </>
            );
          })}
        </h6>
      </div>
    </>
  );
}
function Education({ educations }) {
  return (
    <>
      <h1>
        education
        <h6>
          {educations.map((education) => {
            return (
              <>
                <div key={education.id}>
                  <ol>
                    <li> schoolName:{education.schoolName}</li>
                    <li> collegeName:{education.collegeName}</li>
                    <li> branchName: {education.branchName}</li>
                  </ol>
                </div>
              </>
            );
          })}
        </h6>
      </h1>
    </>
  );
}
function Experience({ experiences }) {
  return (
    <>
      <h1>
        Experience
        <h6>
          {experiences.map((experience) => {
            return (
              <>
                <div key={experience.id}>
                  <ol>
                    <li> company: {experience.companyName}</li>
                    <li>position: {experience.positionName}</li>
                    <li> date: {experience.year}</li>
                  </ol>
                </div>
              </>
            );
          })}
        </h6>
      </h1>
    </>
  );
}
function ResumeComponent() {
  const resume = {
    // skills: { frontEnd: "reactjs", backend: "nodejs" },
    skills: [
      "html",
      "css",
      "javascript",
      "bootstrap",
      "tailwind",
      "git",
      "docker",
      "react-js",
      "mui",
      "Nodejs",
      "mongoose",
    ],
    education: [
      { id: 11, schoolName: "birla", collegeName: "azad", branchName: "cse" },
    ],
    experience: [
      {
        id: 1,
        year: 2016,
        companyName: "google",
        positionName: "reactDevelopment",
      },
      {
        id: 2,
        year: 2017,
        companyName: "microsoft",
        positionName: "FullStackDevelopment",
      },
      {
        id: 3,
        year: 2018,
        companyName: "Remote",
        positionName: "FullStackDevelopment",
      },
    ],
  };
  function handlePrintResume() {
    // alert("Welcome to resume!");
    // let bttn = document.querySelector("#bntDiv");
    // console.log(bttn);
    // bttn.style.display = "none";

    // assignment-4
    window.print();

    // assignment-7
    // window.close(); //close the current window tab
  }

  return (
    <div>
      <h1 className="anjuSingh">Anju-Singh</h1>
      {/* <Skill ft={resume.skills.frontEnd} be={resume.skills.backend} /> */}
      <Skill skills={resume.skills} />

      <Education educations={resume.education} />
      <Experience experiences={resume.experience} />
      <div className="btn" id="btnDiv">
        <button onClick={handlePrintResume}>Print-resume</button>
      </div>
    </div>
  );
}
export default ResumeComponent;
