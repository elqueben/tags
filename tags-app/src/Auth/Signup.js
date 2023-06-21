import Login from "./Login";

export default function Signup() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <form className="signup-form">
            <h3 className="mb-4">Sign Up</h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
          <p className="mt-3">
            Already have an account? <a href="./Login.js">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
