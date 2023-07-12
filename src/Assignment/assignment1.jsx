import React from "react";
// import "./App.css";
function Skill({ skills }) {
  if (skills.length === 0) {
    return <></>;
  }
  return (
    <>
      <h1>Skill</h1>
      <div>
        <h6>
          {skills.map((skill, index) => {
            return (
              <>
                <h2 key={index}>
                  <ul>
                    <li>{skill}</li>
                  </ul>
                </h2>
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
                  <ul>
                    <li> schoolName:{education.schoolName}</li>
                    <li> collegeName:{education.collegeName}</li>
                    <li> branchName: {education.branchName}</li>
                  </ul>
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
                  <ul>
                    <li> company: {experience.companyName}</li>
                    <li>position: {experience.positionName}</li>
                    <li> date: {experience.year}</li>
                  </ul>
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
  return (
    <div>
      <h1 className="anjuSingh">Anju-Singh</h1>
      {/* <Skill ft={resume.skills.frontEnd} be={resume.skills.backend} /> */}
      <Skill skills={resume.skills} />

      <Education educations={resume.education} />
      <Experience experiences={resume.experience} />
    </div>
  );
}
export default ResumeComponent;
