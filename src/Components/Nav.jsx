import "../Styles/Nav.css";

function Nav() {
  return (
    <div className="container">
      <label htmlFor="search">Search</label>
      <br />
      <input type="search" placeholder="What are you looking for?" />
      <ul className="fulllist">
        <li>
          <button>
            DINNERS <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            MEALS<span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            INGREDIENTS<span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            OCCASIONS <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            CUISINES <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            KITCHEN TIPS <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            NEWS <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            FEATURES <span>&#9654;</span>
          </button>
        </li>
        <li>
          <button>
            ABOUT US <span>&#9654;</span>
          </button>
        </li>
      </ul>
      <p>GET THE MAGAZINE</p>
      <div>
        <ul className="sublist">
          <li>
            <small>
              <button>
                <i class="fas fa-user"></i>
                Log In
              </button>
            </small>
          </li>
          <li>
            <small>
              <button>Magazine</button>
            </small>
          </li>
          <li>
            <small>
              <button>Newsletters</button>
            </small>
          </li>
          <li>
            <small>
              <button>Sweepstakes</button>
            </small>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
