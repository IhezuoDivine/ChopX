import "../Styles/Nav.css";
import React, { useState } from "react";
import Footer from "./Footer";

function Nav({ isOpen, menu }) {
  if (!isOpen) return null;
  const items = [
    "DINNERS",
    "MEALS",
    "INGREDIENTS",
    "OCCASIONS",
    "CUISINES",
    "KITCHEN TIPS",
    "NEWS",
    "FEATURES",
    "ABOUT US",
    "Sweepstakes",
  ];
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="container-nav">
      <label htmlFor="search">Search</label>
      <br />
      <input
        type="search"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
      <p className="newsline">NEWS LINE </p>
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
      <Footer />
    </div>
  );
}
export default Nav;
