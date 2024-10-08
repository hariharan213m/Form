import "./App.css";
import { Button, Form, Container, Header } from "semantic-ui-react";
import axios from "axios";
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
    const objt = {
      name,
      collegeName,
      department,
      section,
      city,
      state,
      email,
      contactNumber,
    };
    console.log(objt);

    axios
      .post(
        "https://api.sheetbest.com/sheets/fb4554fd-adf8-4f80-802e-38dd3f1cecaf",
        objt
      )
      .then((response) => {
        console.log(response);
      });

      alert("You are successfully")
  };
  return (
    <Container fluid className="container">
      <Header as="h2" className="title">Registration</Header>
      <Form onSubmit={handleSubmit}>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>

        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="outer-container">
          <Form.Field>
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
          </Form.Field>
        </div>
        <div className="btn">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
}

export default App;
