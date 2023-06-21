import

export default function Signup() {
    return (
      <div className="container">
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
        <p>Already have an account? <a href="./Login.js">Sign In</a></p>
      </div>
    );
  }
  