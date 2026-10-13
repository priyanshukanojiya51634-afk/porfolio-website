import React, { useState } from "react";
import chatImage from "../contect.png";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleclick = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  /*Clear input*/
  const clearinput = () => {
    setformData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };
  const datasender = async (e) => {
    e.preventDefault();

    try {
      const responce = await fetch("http://localhost:5000/userrequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await responce.json();
      console.log(data);
      if (responce.ok) clearinput();
    } catch (error) {
      console.log("Error in the server");
    }
  };

  return (
    <>
      {/*Left side */}
      <div className="contect-container">
        <div className="contect-left">
          <div className="fcontainer">
            <img
              src={chatImage}
              alt="chatgpt custom"
              style={{ width: "400px", height: "300px", borderRadius: "16px" }}
            />
          </div>
        </div>

        <p className="ftext">
          I take on a limited number of new projects each quarter. If your work
          sounds like a good fit, I'd love to hear about it. you can happy for
          my work and skils and i made product pleacse feedback on this form
          type your message and i ensure that i replay you and any problem
          pleacse tell me i solve problem and updating your site and product
        </p>
        {/*Right side */}
        <div className="formcontainer">
          <h1>Feedback-form</h1>
          <form className="f-from" onSubmit={datasender}>
            <div>
              <label htmlFor="Enter your name">Enter your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleclick}
              />
            </div>
            <br />
            <div>
              <label htmlFor="Enter your name">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleclick}
              />
            </div>
            <br />
            <div>
              <label htmlFor="Enter your name">Enter your phone number </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter number"
                value={formData.number}
                onChange={handleclick}
              />
            </div>
            <br />
            <div>
              <label htmlFor="Enter your name">Enter your message</label>
              <br />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleclick}
              ></textarea>
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
