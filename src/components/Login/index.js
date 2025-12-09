
const Login = () => {
    
    const check = () => {

    }

    return (
        <>
            <form onSubmit={check} className="form-container">
                <label>username</label>
                <input type="text" placeholder="username" />
                <input type="text" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login