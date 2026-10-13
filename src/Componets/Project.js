import React from "react";

function Project() {
  return (
    <>
      <div className="projectcontainer">
        <div className="projectcard">
          <h1>Food Delivery System</h1>

          <div className="ptext">
            <span>
              This was my first project, and I built the food delivery system
              myself. It includes an admin panel to manage and oversee the
              platform, along with an AI-powered chatbot that helps
              non-technical users understand how to use the website. The chatbot
              guides users in simple language, making it easier to navigate the
              site and find the help they need. Building this project gave me
              hands-on experience bringing website features, admin workflows,
              and AI assistance together.
            </span>
            <div className="requiredskills">
              <p>Html</p>
            </div>
            <div className="requiredskills">
              <p>css</p>
            </div>
            <div className="requiredskills">
              <p>javascript</p>
            </div>
            <div className="requiredskills">
              <p>node.js</p>
            </div>
            <div className="requiredskills">
              <p>mongodb</p>
            </div>
          </div>
        </div>
        <div className="projectcard">
          <h1>AI PDF Manager</h1>

          <div className="ptext">
            <span>
              My second project is a professional AI-powered PDF manager built
              to make working with documents faster and easier. It uses JWT
              authentication to manage secure user access and rate limiting to
              control request traffic. Its AI can scan uploaded documents and
              automatically generate concise summaries, helping users quickly
              understand the key information. This project gave me practical
              experience combining authentication, API protection, and AI
              document processing in one application.
            </span>
            <div className="requiredskills">Html</div>
            <div className="requiredskills">css</div>
            <div className="requiredskills">javascript</div>
            <div className="requiredskills">node.js</div>
            <div className="requiredskills">mongodb</div>
          </div>
        </div>
        <div className="projectcard">
          <h1>News Application</h1>

          <div className="ptext">
            <span>
              I built this React-based news application while learning with
              CodeWithHarry. It uses a free news API to fetch and display news
              articles, and Bootstrap to create a clean, responsive layout. This
              project helped me practice building React components, working with
              API data, and creating a user-friendly interface with Bootstrap.
              in this application i used react class bassed componet.
            </span>
            <div className="requiredskills">React.js</div>
          </div>
        </div>
        <div className="projectcard">
          <h1>Text-utils application</h1>

          <div className="ptext">
            <span>
              My first project in react is the Text-utils application i build
              this codewithharry and impliment bootstrep and translate text in
              any languvage i used google api this project i learned
              react-router-dom and other function of react like
              useState,pops,function basced componet.
            </span>
            <div className="requiredskills">React.js</div>
          </div>
        </div>
        <div className="projectcard">
          <h1>i-Chat Application</h1>

          <div className="ptext">
            <span>
              I built this simple chat application while learning full-stack
              development. I used WebSockets to handle messages between users
              and enable real-time communication without needing to refresh the
              page. This project helped me understand how the frontend and
              backend work together to send and receive messages instantly.
            </span>
            <div className="requiredskills">React.js</div>
          </div>
        </div>
        <div className="projectcard">
          <h1>i-Notebook Application</h1>

          <div className="ptext">
            <span>
              I built i-Notebook as a digital note-taking application that helps
              users create and organize their notes in one place. I focused on
              keeping the experience simple and making it easy to work with
              notes. Building this project gave me practice creating an
              interactive web application and handling user-entered data.
            </span>
            <div className="requiredskills">React.js</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
