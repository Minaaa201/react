import logo from "./logo.png"

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="navbar">
        
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contacts</a>
        
      </div>

      <div className="reg">
        
        <button>Sign in</button>
        <button>Sign up</button>
        
      </div>
    </header>
  );
}

export default Header;