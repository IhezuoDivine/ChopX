import "../Styles/Header.css";
function Header({ showAuthLinks = true }) {
  return (
    <header>
      <div className="logo">
        <button className="menu">
          <i class="fas fa-bars menu"></i>
        </button>
        <h1>ChopX</h1>
      </div>
      {showAuthLinks && (
        <div className="authlinks">
          <button>LogIn</button>
          <button>SignUp</button>
        </div>
      )}
    </header>
  );
}
export default Header;
