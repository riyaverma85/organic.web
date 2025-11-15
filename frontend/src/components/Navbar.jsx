import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/images/logoweb.svg"
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useAppContext } from '../context/appContext';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [profileOpen, setProfileOpen] = React.useState(false);
    const { user, setUser, setShowUserLogin, navigate } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate("/");
        setProfileOpen(false);
    }

    // Click outside to close profile dropdown
    const profileRef = React.useRef();
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
            
            {/* Logo */}
            <NavLink to="/" onClick={() => setOpen(false)}>
                <img src={logo} alt="logo" className='h-9'/>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/products">About</NavLink>
                <NavLink to="/">Contact</NavLink>

                {/* Search */}
                <div className="relative w-72">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                </div>

                {/* Cart */}
                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <FaShoppingCart className="hover:text-green-600" />
                    <button className="absolute -top-2 -right-3 text-[10px] text-white bg-green-600 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                        3
                    </button>
                </div>

                {/* Login / Profile */}
                {!user ? (
                    <button
                        onClick={() => setShowUserLogin(true)}
                        className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                    >
                        Login
                    </button>
                ) : (
                    <div ref={profileRef} className="relative group">
                        <FaUserCircle
                            className="text-3xl text-green-600 hover:text-green-700 transition cursor-pointer"
                            onClick={() => setProfileOpen(!profileOpen)}
                        />
                        {/* Dropdown */}
                        <ul className={`
                            absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-36 rounded-md text-sm z-50
                            transition-all duration-200
                            ${profileOpen ? "block" : "hidden"} 
                            group-hover:block
                        `}>
                            <li
                                onClick={() => {
                                    navigate("my-orders");
                                    setProfileOpen(false);
                                }}
                                className='p-2 pl-3 hover:bg-primary/10 cursor-pointer'
                            >
                                My Orders
                            </li>
                            <li
                                onClick={logout}
                                className='p-2 pl-3 hover:bg-primary/10 cursor-pointer'
                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden">
                    <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to="/products" onClick={() => setOpen(false)}>All Product</NavLink>
                    {user && <NavLink to="/products" onClick={() => setOpen(false)}>My Orders</NavLink>}
                    <NavLink to="/" onClick={() => setOpen(false)}>Contact</NavLink>

                    {!user ? (
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowUserLogin(true);
                            }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
