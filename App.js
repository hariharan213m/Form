import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [department, setDepartment] = useState("");
  const [section, setSection] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="title">
        <h1>Registration</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="outer-container">
          <div>
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="outer-container">
          <div>
            <label htmlFor="collegeName">
              Name of the College<span>*</span>
            </label>
            <input
              type="text"
              id="collegeName"
              placeholder="Your answer"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="department">
              Department<span>*</span>
            </label>
            <input
              type="text"
              id="department"
              placeholder="Your answer"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="section">
              Section<span>*</span>
            </label>
            <input
              type="text"
              id="section"
              placeholder="Your answer"
              value={section}
              onChange={(e) => setSection(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <input
              type="text"
              id="city"
              placeholder="Your answer"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="state">
              State<span>*</span>
            </label>
            <input
              type="text"
              id="state"
              placeholder="Your answer"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Your answer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="contactNumber">
              Contact Number<span>*</span>
            </label>
            <input
              type="text"
              id="contactNumber"
              placeholder="Your answer"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
