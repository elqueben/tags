import Signup from "./Signup";

export default function Login() {
  return (
    <div className="container">
      <form className="login-form">
        <h3 className="mb-4">Log In</h3>
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
          Sign In
        </button>
      </form>
      <p>
        Don't have an account? <a href="./Signup">Sign Up</a>
      </p>
    </div>
  );
}
