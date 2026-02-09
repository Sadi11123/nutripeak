import { NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    // <div className="w-full bg-[#1b0d12] text-white font-inter fixed mx-auto">
    <div className="w-full  fixed mx-auto top-10 z-50">
      <div className="navbar h-24 w-full max-w-7xl rounded-xl bg-black mx-auto text-white px-10">

        {/* LEFT: LOGO */}
        <div className="navbar-start">
          <NavLink to="/" className="text-2xl font-bold tracking-wide MyFont">
            Nutri
            <span className="text-white MyFont">Peak</span>
          </NavLink>
        </div>

        {/* CENTER: MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium text-lg">
            <li><NavLink to="/shop">Shop All</NavLink></li>
            <li><NavLink to="/bundle">Bundle Builder</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
          </ul>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="navbar-end gap-4">

          {/* Currency Dropdown */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer text-sm font-medium flex items-center">
              USD $
               <FaChevronDown className="ml-2" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 text-black rounded-box w-32 mt-2"
            >
              <li><button>USD $</button></li>
              <li><button>EUR €</button></li>
              <li><button>GBP £</button></li>
            </ul>
          </div>

          {/* Icons */}
          <NavLink to="/search" className="hover:opacity-80 flex flex-col items-center text-sm font-normal">
            <FiSearch size={20} />
            <p>Search</p>
          </NavLink>

          <NavLink to="/account" className="hover:opacity-80 flex flex-col items-center text-sm font-normal">
            <FiUser size={20} />
            <p>Account</p>
          </NavLink>

          <NavLink to="/cart" className="hover:opacity-80 flex flex-col items-center text-sm font-normal">
            <FiShoppingBag size={20} />
            <p>Bag</p>
          </NavLink>

          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li><NavLink to="/shop">Shop All</NavLink></li>
              <li><NavLink to="/bundle">Bundle Builder</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/reviews">Reviews</NavLink></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
