import "./contact.css";
// import 'bootstrap/dist/css/bootstrap.css';

export default function ContactPage() {
  const submitBtn = () => {
    alert("Message Sent Succesfully!!!");
  };

  return (
    <div className="container contact-container">
      <div className="first-contact-container">
        <h2>Are you looking for help?</h2>
        <h3>Contact us any time: </h3>
        <p>
          We are open to discussing any request and we welcome your feedback!
          Please fill out the form below, and we will respond promptly. You can
          also reach us by phone at <br />
          <span>
            <i className="fa fa-phone"></i> <a href="#">+40000111222</a>
          </span>{" "}
          or directly via email at
          <span>
            <br />
            <i className="fa fa-envelope"></i>
            <a href="mailto:">contact@sweetdreams.ro</a>
          </span>
          .
        </p>
      </div>
      <div id="main-form" className="second-contact-container">
        <div>
          <h2 style={{ color: "black" }}>Stay in Touch</h2>
          <div className="social-separator"></div>
        </div>

        <form className="row g-3">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              placeholder="Enter your first name..."
              required
            />
          </div>
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Enter your last name..."
              required
            />
          </div>{" "}
          <label htmlFor="validationDefaultUsername" className="form-label">
            Username @
          </label>
          <div className="col-md-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="validationDefaultUsername"
                aria-describedby="inputGroupPrepend2"
                placeholder="Choose a unique username..."
                required
              />
            </div>
          </div>{" "}
          <label htmlFor="validationDefault03" className="form-label">
            City
          </label>
          <div className="col-md-6">
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value="">
                Choose your city...
              </option>
              <option>Bucuresti</option>
              <option>Timis</option>
              <option>Cluj-Napoca</option>
              <option>Other</option>
            </select>
          </div>{" "}
          <label htmlFor="validationDefault04" className="form-label">
            County
          </label>
          <div className="col-md-3">
            <select className="form-select" id="validationDefault04" defaultValue="Bucuresti" required>
              <option  disabled value="">
                Choose your county...
              </option>
              <option>Bucuresti</option>
              <option>Timis</option>
              <option>Cluj-Napoca</option>
              <option>Other</option>
            </select>
          </div>
          <label htmlFor="validationDefault05" className="form-label">
            Zip Code
          </label>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              placeholder="Enter you Postal Code..."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter your message here..."
              rows="3"
            ></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck2"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              onClick={submitBtn}
              className="btn btn-primary"
              type="submit"
            >
              Submit form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
