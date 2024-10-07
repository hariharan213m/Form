import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Registration</h1>
      </div>
      <form action="">
        <div className="outer-container">
          <div>
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input type="text" id="name" placeholder="Your name" />
          </div>
        </div>

        <div className="outer-container">
          <div>
            <label htmlFor="collegeName">
              Name of the College<span>*</span>
            </label>
            <input type="text" id="collegeName" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="department">
              Department<span>*</span>
            </label>
            <input type="text" id="department" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="section">
              Section<span>*</span>
            </label>
            <input type="text" id="section" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="city">
              City<span>*</span>
            </label>
            <input type="text" id="city" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="state">
              State<span>*</span>
            </label>
            <input type="text" id="state" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input type="text" id="email" placeholder="Your answer" />
          </div>
        </div>
        <div className="outer-container">
          <div>
            <label htmlFor="contactNumber">
              Contact Number<span>*</span>
            </label>
            <input type="text" id="contactNumber" placeholder="Your answer" />
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
