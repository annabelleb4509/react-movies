

function LoginPage ({ username, handleChange, handleSubmit }) {

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <input value={username} onChange={handleChange} required />
              <button type="submit">LOG IN </button>
            </form>
        </div>
      );

}

export default LoginPage