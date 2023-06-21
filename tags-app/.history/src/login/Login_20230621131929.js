export default function Login() {
    return (
        <div>
            <form>
                <h3>Log In</h3>
                <input type="text" placeholder="Username" required></input>
                <input type="text" placeholder="Password" required></input>
                <button>Sign In</button>
            </form>
            <p>don't have an account? <a>Sign Up</a></p>
        </div>
    )
}