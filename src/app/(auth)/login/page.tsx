export default function Login() {
    return (
        <>
            <h1>Login Page</h1>
            <p>Please enter your credentials to log in.</p>
            <form action="get">
                <label htmlFor="Username">Username</label>
                <input type="text" id="Username" name="Username" placeholder="Enter your username"></input>
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" name="Password" placeholder="Enter your password"></input>
                <button type="submit"> Login </button>
            </form>
        </>
    );
}   