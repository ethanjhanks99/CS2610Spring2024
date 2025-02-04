import { Outlet } from 'react-router'

function App() {
  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  return (
    <>
      <nav className="nav">
        <h2>My App</h2>
        <button className="icon-button" onClick={logout}>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </nav>
      <Outlet />
    </>
  )
}

export default App;
