import React, { useState } from "react";

function Hireme() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [internFormData, setInternFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleclick = (e, updateFormData) => {
    updateFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };
  const requestsenderp = async (e) => {
    e.preventDefault();
    try {
      const responce = await fetch("http://localhost:5001/puser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await responce.json();
      console.log(data);
      if (responce.ok) {
        console.log(
          "Request queued successfully; waiting for database processing.",
        );
        setformData({ name: "", email: "", number: "", message: "" });
      } else {
        console.error("Failed to submit request:", data.message);
      }
    } catch (error) {
      console.error("Could not submit request:", error);
    }
  };
  const requestsenderi = async (e) => {
    e.preventDefault();
    try {
      const responce2 = await fetch("http://localhost:5002/iuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(internFormData),
      });
      const data2 = await responce2.json();
      console.log(data2);
      if (responce2.ok) {
        console.log(
          "Request queued successfully; waiting for database processing.",
        );
        setInternFormData({ name: "", email: "", number: "", message: "" });
      } else {
        console.error("Failed to submit request:", data2.message);
      }
    } catch (error) {
      console.error("Could not submit request:", error);
    }
  };
  return (
    <>
      <div className="hcontainer">
        <h1>Let’s make work that matters.</h1>
        <p>
          Choose the kind of collaboration you have in mind. I review every
          thoughtful inquiry and usually reply within 48 hours. Firstley i am a
          Fullstack devloper i creating userfrendliey and respncive UI/UX it is
          fit on every new devices i heldle server respnce and other page
          flaxiblity
        </p>
      </div>
      <div className="hire-container">
        <div className="hireleft">
          <h1>Freelincer</h1>
          <form className="hireform" onSubmit={requestsenderp}>
            <label htmlFor="Enter your name">Enter your name</label>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleclick(e, setformData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your email">Enter your email</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleclick(e, setformData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your name">Enter your number</label>
            <div>
              <input
                type="number"
                name="number"
                placeholder="Enter your number"
                value={formData.number}
                onChange={(e) => handleclick(e, setformData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your project detalie">
              Enter your project detalie
            </label>
            <div>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={(e) => handleclick(e, setformData)}
              ></textarea>
            </div>
            <br />
            <button className="hirebtn" type="submit">
              Hire project
            </button>
          </form>
        </div>
        <div className="hireright">
          <h1>intern/job</h1>
          <form className="rhireform" onSubmit={requestsenderi}>
            <label htmlFor="Enter your name">Enter your name</label>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={internFormData.name}
                onChange={(e) => handleclick(e, setInternFormData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your email">Enter your email</label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={internFormData.email}
                onChange={(e) => handleclick(e, setInternFormData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your name">Enter your number</label>
            <div>
              <input
                type="number"
                name="number"
                placeholder="Enter your number"
                value={internFormData.number}
                onChange={(e) => handleclick(e, setInternFormData)}
              />
            </div>
            <br />
            <label htmlFor="Enter your project detalie">
              Enter your project detalie
            </label>
            <div>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={internFormData.message}
                onChange={(e) => handleclick(e, setInternFormData)}
              ></textarea>
            </div>
            <br />
            <button className="hirebtn" type="submit">
              Hire intern
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hireme;
