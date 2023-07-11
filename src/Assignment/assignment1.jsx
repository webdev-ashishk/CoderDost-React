import React from "react";
// import "./App.css";
function Skill({ skills }) {
  return (
    <div>
      <h1>
        Skill
        <h6>
          {skills.map((skill, index) => {
            return (
              <>
                <div key={index}>{skill}</div>
              </>
            );
          })}
        </h6>
      </h1>
    </div>
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
                  school:
                  {education.schoolName}
                  <br />
                  college:{education.collegeName}
                  <br />
                  branch-name: {education.branchName}
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
                  company: {experience.companyName}
                  <br />
                  position: {experience.positionName}
                  <br />
                  date: {experience.year}
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
