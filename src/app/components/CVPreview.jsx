"use client"

import React, { useState } from 'react'
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function CVPreview() {

  const [showEdit, setShowEdit] = useState("none")
  const [fullName, setFullName] = useState("Boss Nattawat")
  const [email, setEmail] = useState("example@gmail.com")
  const [location, setLocation] = useState("Suphanburi, Thailand")
  const [phone, setPhone] = useState("555-555-555")

  const [school, setSchool] = useState([{schoolName:"University of London", degree:"B.S. in Computer Science", gpax:"3.6" , graduationYear:"Aug 2024 - May 2028", schoolLocation:"London, England"}])
  const [schoolName, setSchoolName] = useState("")
  const [degree, setDegree] = useState("")
  const [gpax, setGPAX] = useState("")
  const [graduationYear, setGraduationYear] = useState("")
  const [schoolLocation, setSchoolLocation] = useState("")

  const [language, setLanguage] = useState("JavaScript, Python, C Language, Java, HTML, CSS")
  const [framwork, setFramwork] = useState("React, Tailwind CSS, daisyUI")
  const [tool, setTool] = useState("Git, Webpack, VS Code")

  const [projects, setProjects] = useState([{projectName:"Enigma", stack:"Python", description:"Lorem ipsum dolor sit amet consectetur adipisicing.", complete:"Nov 2024"}, {projectName:"Weather App", stack:"HTML, CSS, JavaScript", description:"Lorem ipsum dolor sit amet consectetur adipisicing.", complete:"Nov 2024"}])
  const [projectName, setProjectName] = useState("")
  const [stack, setStack] = useState("")
  const [description, setDescription] = useState("")
  const [complete, setComplete] = useState("")

  const [experience, setExperience] = useState([{company:"Innovatech LLC", position:"Software Engineer Intern", responsibilities:["Assisted in developing backend services with Node.js and Express", "Participated in code reviews and agile sprint planning"], companyLocation:"London, England", duration:"Jan 2024 - May 2026"}, {company:"Tech Solutions", position:"Software Engineer", responsibilities:["Designed and implemented software solutions", "Developed desktop applications"], companyLocation:"London, England", duration:"Jan 2022 - May 2023"}])
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [responsibilities, setResponsibilities] = useState([])
  const [companyLocation, setCompanyLocation] = useState("")
  const [duration, setDuration] = useState("")

  const [addResponsibility, setAddResponsibility] = useState("")

  function editResume(){
    showEdit === "none" ? setShowEdit("flex") : setShowEdit("none")
  }

  function clearForm() {
    setFullName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setSchoolName('');
    setDegree('');
    setGPAX('');
    setGraduationYear('');
    setSchoolLocation('');
    setSchool([]);
    setLanguage("")
    setFramwork("")
    setTool("")
    setProjects([])
    setExperience([])
    setResponsibilities([])
  }

  function addSchool(){
    setSchool((prev) => [...prev, {schoolName, degree, gpax, graduationYear, schoolLocation}])
    setSchoolName("")
    setDegree("")
    setGPAX("")
    setGraduationYear("")
    setSchoolLocation("")
  }

  function addProject(){
    setProjects((prev) => [...prev, {projectName, stack, description, complete}])
    setProjectName("")
    setStack("")
    setDescription("")
    setComplete("")
  }

  function addExperience(){
    setExperience((prev) => [...prev, {company, position, responsibilities, companyLocation, duration}])
    setCompany("")
    setPosition("")
    setResponsibilities([])
    setCompanyLocation("")
    setDuration("")
  }

  function addResponsibilities(){
    setResponsibilities((prev) => [...prev, addResponsibility])
    setAddResponsibility("")
  }

  function deleteSchool(indexToDelete) {
    setSchool((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
  
  function deleteProject(indexToDelete) {
    setProjects((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
  
  function deleteExperience(indexToDelete) {
    setExperience((prev) => prev.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className='flex flex-col p-20 w-[1100px]'>

      <div className="editResumeForm bg-slate-600 absolute w-[948.55px] h-[850px] overflow-scroll flex flex-col p-7 rounded-md" style={{display: showEdit}}>
        <h1 className='font-bold text-3xl text-center mb-7'>Resume Builder</h1>
        <button className='btn btn-primary font-bold rounded-md text-xl' onClick={() => clearForm()}>Clear Form</button>

        <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md">
          <h1 className='text-2xl font-bold'>Your Info</h1>
          <input type="text" placeholder="Name" onChange={(e) => setFullName(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
        </div>

        <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md">
          <h1 className='text-2xl font-bold'>School Info</h1>
          <input type="text" placeholder="School" onChange={(e) => setSchoolName(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Degree" onChange={(e) => setDegree(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="GPAX" onChange={(e) => setGPAX(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Graduation Year" onChange={(e) => setGraduationYear(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Location" onChange={(e) => setSchoolLocation(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => addSchool()}>Add Education</button>
        </div>

        {school.map((item, index) => (
          <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md" key={index}>
            <div className="flex justify-between mt-3" key={index}>
              <div className="">
                <h4 className='font-bold'>{item.schoolName}</h4>
                <p>{item.degree}</p>
                <p className='font-semibold'>▪ GPA: {item.gpax} / 4.0</p>
              </div>
              <div className="">
                <h4 className='font-bold'>{item.graduationYear}</h4>
                <p>{item.schoolLocation}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => deleteSchool(index)}>Delete</button>
            </div>
          </div>
        ))}

        <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md">
          <h1 className='text-2xl font-bold'>Your Skills</h1>
          <input type="text" placeholder="Languages" onChange={(e) => setLanguage(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Framworks" onChange={(e) => setFramwork(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Tools" onChange={(e) => setTool(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
        </div>

        <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md">
          <h1 className='text-2xl font-bold'>Project Info</h1>
          <input type="text" placeholder="Name" onChange={(e) => setProjectName(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Stack" onChange={(e) => setStack(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Completed" onChange={(e) => setComplete(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => addProject()}>Add Project</button>
        </div>

        {projects.map((item, index) => (
          <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md" key={index}>
            <div className="flex justify-between mt-3" key={index}>
              <div className="">
                <h4 className='font-bold'>{item.projectName}</h4>
                <p className='my-1'><strong className='font-semibold'>Stack</strong>: {item.stack}</p>
                <p className='max-w-[500px]'><strong className='font-semibold'>Description</strong>: {item.description}</p>
              </div>
              <div className="">
                <h4 className='font-bold'>Complete: {item.complete}</h4>
              </div>
            </div>
            <div className="flex flex-col">
              <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => deleteProject(index)}>Delete</button>
            </div>
          </div>
        ))}

        <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md">
          <h1 className='text-2xl font-bold'>Experience Info</h1>
          <input type="text" placeholder="Company" onChange={(e) => setCompany(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Responsibilities" onChange={(e) => setAddResponsibility(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <div className="flex items-center justify-center">
            <button className='btn btn-primary font-bold rounded-md text-lg mt-3' onClick={() => addResponsibilities()}>Add Responsibilities</button>
          </div>
          <input type="text" placeholder="Duration" onChange={(e) => setDuration(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <input type="text" placeholder="Location" onChange={(e) => setCompanyLocation(e.target.value)} className="input rounded-md input-bordered input-primary w-full mt-3" />
          <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => addExperience()}>Add Experience</button>
        </div>

        {experience.map((item, index) => (
          <div className="flex flex-col mt-5 bg-zinc-900 p-5 rounded-md" key={index}>
            <div className="flex justify-between my-3" key={index}>
              <div className="">
                <h4 className='font-bold'>{item.company}</h4>
                <p>{item.position}</p>
                {item.responsibilities.map((respon, index) => (
                  <p key={index}>▪ {respon}</p>
                ))}
              </div>
              <div className="">
                <h4 className='font-bold'>{item.duration}</h4>
                <p>{item.companyLocation}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <button className='btn btn-primary font-bold rounded-md text-xl mt-3' onClick={() => deleteExperience(index)}>Delete</button>
            </div>
          </div>
        ))}

        <button className='btn btn-primary font-bold rounded-md text-xl mt-5' onClick={() => editResume()}>Preview Resume</button>

      </div>

      <header className='flex gap-7'>
        <h1 className='text-4xl font-semibold mb-7'>Your Resume</h1>
        <button className='btn btn-primary font-bold rounded-md text-xl' onClick={() => editResume()}>Edit</button>
        {/* <button className="btn btn-secondary font-bold rounded-md text-xl" onClick={() => downloadPDF()}>Download PDF</button> */}
      </header>

      <main id='resume' className='bg-slate-100 text-primary p-14 flex flex-col min-w-[2,480px] min-h-[3,508px]'>
        
        <header className='flex flex-col items-center justify-center'>
          <h2 className='font-bold text-3xl'>{fullName}</h2>
          <p className='font-semibold text-xl my-5'>Email: {email} ◆ Tell: {phone} ◆ Location: {location}</p>
        </header>

        <section>
          <h3 className='text-xl font-bold'>Education</h3>
          <hr className='border-primary border-[1px] my-2'/>

          {school.map((item, index) => (
              <div className="flex justify-between mt-3" key={index}>
              <div className="">
                <h4 className='font-bold'>{item.schoolName}</h4>
                <p>{item.degree}</p>
                <p className='font-semibold'>▪ GPA: {item.gpax} / 4.0</p>
              </div>
              <div className="">
                <h4 className='font-bold'>{item.graduationYear}</h4>
                <p>{item.schoolLocation}</p>
              </div>
            </div>
          ))}

        </section>

        <section className='my-4'>
          <h3 className='text-xl font-bold'>Skills</h3>
          <hr className='border-primary border-[1px] my-2'/>
          <div className="">
            <h4 className='flex font-bold'>▪ Language: &nbsp;<p className='font-medium'>{language}</p></h4>
            <h4 className='flex font-bold'>▪ Framworks: &nbsp;<p className='font-medium'>{framwork}</p></h4>
            <h4 className='flex font-bold'>▪ Tools: &nbsp;<p className='font-medium'>{tool}</p></h4>
          </div>
        </section>

        <section className='my-4'>
          <h3 className='text-xl font-bold'>Projects</h3>
          <hr className='border-primary border-[1px] my-2'/>

            <div className="projectContainer">
              {projects.map((item, index) => (
                <div className="flex justify-between mt-3" key={index}>
                  <div className="">
                    <h4 className='font-bold'>{item.projectName}</h4>
                    <p className='my-1'><strong className='font-semibold'>Stack</strong>: {item.stack}</p>
                    <p className='max-w-[500px]'><strong className='font-semibold'>Description</strong>: {item.description}</p>
                  </div>
                  <div className="">
                    <h4 className='font-bold'>Complete: {item.complete}</h4>
                  </div>
                </div>
              ))}
            </div>
        </section>

        <section className='my-4'>
          <h3 className='text-xl font-bold'>Experience</h3>
          <hr className='border-primary border-[1px] my-2'/>

          {experience.map((item, index) => (
            <div className="flex justify-between my-3" key={index}>
              <div className="">
                <h4 className='font-bold'>{item.company}</h4>
                <p>{item.position}</p>
                {item.responsibilities.map((respon, index) => (
                  <p key={index}>▪ {respon}</p>
                ))}
              </div>
              <div className="">
                <h4 className='font-bold'>{item.duration}</h4>
                <p>{item.companyLocation}</p>
              </div>
            </div>
          ))}

        </section>
      </main>
    </div>
  )
}

export default CVPreview