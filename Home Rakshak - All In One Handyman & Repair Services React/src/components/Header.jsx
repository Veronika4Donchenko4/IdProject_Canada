import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EmailImg from '../assets/images/svg/email.svg';
import LocationImg from '../assets/images/svg/location.svg';
import FacebookImg from '../assets/images/svg/facebook.svg';
import TwiiterImg from '../assets/images/svg/twiiter.svg';
import InstaImg from '../assets/images/svg/insta.svg';
import LinkdienImg from '../assets/images/svg/linkdien.svg';
import LogoSvg from '../assets/images/svg/logo.svg';
import FooterLogoImg from '../assets/images/svg/footer-logo.svg';
import XImg from '../assets/images/svg/x.svg';
import DownArrowSvg from '../assets/images/svg/down-arrow.svg';
import ImagePhoto from '../assets/images/home-page/image-Photo.png';
import ImagePhoto2 from '../assets/images/home-page/image-Photo2.png';
import ImagePhoto3 from '../assets/images/home-page/image-Photo3.png';
import ImagePhoto4 from '../assets/images/home-page/image-Photo4.png';
import ImagePhoto5 from '../assets/images/home-page/image-Photo5.png';
import HeadphoneSvg from '../assets/images/svg/headphone.svg';
import SideMenu from '../assets/images/svg/menu.svg';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen((v) => !v);
    const closeMenu = () => {
        setMenuOpen(false);
        setOpenDropdown(null);
    };
    const toggleDropdown = (name) =>
        setOpenDropdown((prev) => (prev === name ? null : name));

    // Close menu/dropdowns when clicking outside
    useEffect(() => {
        const handleDocClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target)) {
                // clicked outside the menu
                setMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleDocClick);
        return () => document.removeEventListener("mousedown", handleDocClick);
    }, []);

    // Close side menu / dropdowns on route change
    useEffect(() => {
        setMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    return (
        <>
            {/* <!-- ======================== Header ============================ --> */}
            <header className="header">
                {/* small header */}
                <div className="small-header">
                    <div className="container small-header-sub-main">
                        <div className="small-header-sub">
                            <a href="mailto:contact@home.rakshak.com">
                                <p><img src={EmailImg} alt="email" /> contact@home.rakshak.com</p>
                            </a>
                            <p><img src={LocationImg} alt="location" /> 2972 Westheimer 96 Rd. Mexico</p>
                        </div>
                        <div className="small-header-media-main">
                            <a href="https://www.facebook.com"><img src={FacebookImg} alt="facebook" /></a>
                            <a href="https://x.com"><img src={TwiiterImg} alt="twitter" /></a>
                            <a href="https://www.instagram.com"><img src={InstaImg} alt="insta" /></a>
                            <a href="https://www.linkedin.com"><img src={LinkdienImg} alt="linkedin" /></a>
                        </div>
                    </div>
                </div>

                {/* main header */}
                <div className="container header-sub">
                    <div className="logo">
                        <Link to="/"><img src={LogoSvg} alt="logo" /></Link>
                    </div>

                    {/* overlay */}
                    <div className={`menuOverlay ${menuOpen ? "active" : ""}`} onClick={closeMenu} />

                    {/* side menu */}
                    <nav ref={menuRef} className={`menu ${menuOpen ? "active" : ""}`}>
                        <div className="side-menu-logo">
                            <Link to="/"><img src={FooterLogoImg} alt="logo" /></Link>
                            <button className="close-menu" onClick={closeMenu} aria-label="Close menu">
                                <img src={XImg} alt="close" />
                            </button>
                        </div>

                        <ul className="menu-list">
                            <li className={`wrapper wrapper-men ${[
                                "/", "/Home2", "/Home3", "/Home4"
                            ].includes(location.pathname) ? "active-dropdown" : ""
                                }`}>
                                <Link to="#" className="menu-dropdown menu-text" onClick={() => toggleDropdown("home")} type="button"
                                    aria-expanded={openDropdown === "home"}> Home
                                    <img className={`arrow-icon-menu ${openDropdown === "home" ? "up" : ""}`} src={DownArrowSvg} alt="down" />
                                </Link>
                                {openDropdown === "home" && (
                                    <div className="menu-ul-list menu-ul-list-home">
                                        <ul>
                                            <li>
                                                <Link className={`submenu-link ${location.pathname === "/" ? "active-sub" : ""}`}
                                                    to="/">Home 1 - Default</Link>
                                            </li>
                                            <li>
                                                <Link className={`submenu-link ${location.pathname === "/Home2" ? "active-sub" : ""}`} to="/Home2">Home 2 - Mix Slider</Link>
                                            </li>
                                            <li>
                                                <Link className={`submenu-link ${location.pathname === "/Home3" ? "active-sub" : ""}`} to="/Home3">Home 3 - Video</Link>
                                            </li>
                                            <li>
                                                <Link className={`submenu-link ${location.pathname === "/Home4" ? "active-sub" : ""}`} to="/Home4">Home 4 - Solid Color</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            <li className={`wrapper wrapper-men ${[
                                "/About", "/Team", "/SingleTeam", "/PricingPlan", "/GetQuote",
                                "/OurClients", "/Testimonials", "/FaqPage", "/NotFound", "/ComingSoon"
                            ].includes(location.pathname) ? "active-dropdown" : ""
                                }`}>
                                <Link to="#" className="menu-dropdown menu-text" onClick={() => toggleDropdown("pages")} type="button"
                                    aria-expanded={openDropdown === "pages"}> Pages
                                    <img className={`arrow-icon-menu ${openDropdown === "pages" ? "up" : ""}`} src={DownArrowSvg} alt="down" />
                                </Link>
                                {openDropdown === "pages" && (
                                    <div className="menu-ul-list">
                                        <div className="menu-ul-list-d">
                                            <ul>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/About" ? "active-sub" : ""}`}
                                                        to="/About">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/Team" ? "active-sub" : ""}`} to="/Team">Our Team</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleTeam" ? "active-sub" : ""}`} to="/SingleTeam">Single Team</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/PricingPlan" ? "active-sub" : ""}`} to="/PricingPlan">Pricing Plan</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/GetQuote" ? "active-sub" : ""}`} to="/GetQuote">Get Your Quote</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/OurClients" ? "active-sub" : ""}`} to="/OurClients">Our Clients</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/Testimonials" ? "active-sub" : ""}`} to="/Testimonials">Testimonials</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/FaqPage" ? "active-sub" : ""}`} to="/FaqPage">FAQs</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/NotFound" ? "active-sub" : ""}`} to="/NotFound">404 Page</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/ComingSoon" ? "active-sub" : ""}`} to="/ComingSoon">Coming Soon</Link>
                                                </li>
                                            </ul>
                                            <img src={ImagePhoto} alt="menu visual" />
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li className={`wrapper wrapper-men ${[
                                "/Services", "/PlumbingService", "/RoofingService", "/CarpentryService", "/CleaningService",
                                "/AirConditionService", "/PaintingService", "/ElectricalService", "/SolarService", "/WeldingService"
                            ].includes(location.pathname) ? "active-dropdown" : ""
                                }`}>
                                <Link to="#" className="menu-dropdown menu-text" onClick={() => toggleDropdown("services")} type="button"
                                    aria-expanded={openDropdown === "services"}>Services
                                    <img className={`arrow-icon-menu ${openDropdown === "services" ? "up" : ""}`} src={DownArrowSvg} alt="down" />
                                </Link>
                                {openDropdown === "services" && (
                                    <div className="menu-ul-list">
                                        <div className="menu-ul-list-d">
                                            <ul>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/Services" ? "active-sub" : ""}`} to="/Services">Services</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/PlumbingService" ? "active-sub" : ""}`} to="/PlumbingService">Plumbing Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/RoofingService" ? "active-sub" : ""}`} to="/RoofingService">Roofing Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/CarpentryService" ? "active-sub" : ""}`} to="/CarpentryService">Carpentry Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/CleaningService" ? "active-sub" : ""}`} to="/CleaningService">Cleaning Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/AirConditionService" ? "active-sub" : ""}`} to="/AirConditionService">Air Condition Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/PaintingService" ? "active-sub" : ""}`} to="/PaintingService">Painting Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/ElectricalService" ? "active-sub" : ""}`} to="/ElectricalService">Electrical Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SolarService" ? "active-sub" : ""}`} to="/SolarService">Solar Service</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/WeldingService" ? "active-sub" : ""}`} to="/WeldingService">Welding Service</Link>
                                                </li>
                                            </ul>
                                            <img src={ImagePhoto2} alt="menu visual 2" />
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li className={`wrapper wrapper-men ${[
                                "/projects", "/projects2", "/SingleProject", "/SingleProject2", "/SingleProject3"
                            ].includes(location.pathname) ? "active-dropdown" : ""
                                }`}>
                                <Link to="#" className="menu-dropdown menu-text" onClick={() => toggleDropdown("projects")} type="button"
                                    aria-expanded={openDropdown === "projects"}>Projects
                                    <img className={`arrow-icon-menu ${openDropdown === "projects" ? "up" : ""}`} src={DownArrowSvg} alt="down" />
                                </Link>
                                {openDropdown === "projects" && (
                                    <div className="menu-ul-list">
                                        <div className="menu-ul-list-d">
                                            <ul>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/projects" ? "active-sub" : ""}`} to="/projects">Projects 1</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/projects2" ? "active-sub" : ""}`} to="/projects2">Projects 2</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleProject" ? "active-sub" : ""}`} to="/SingleProject">Single Project 1</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleProject2" ? "active-sub" : ""}`} to="/SingleProject2">Single Project 2</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleProject3" ? "active-sub" : ""}`} to="/SingleProject3">Single Project 3</Link>
                                                </li>
                                            </ul>
                                            <img src={ImagePhoto3} alt="menu visual 3" />
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li className={`wrapper wrapper-men ${[
                                "/OurBlog", "/Blog2", "/Blog3", "/SingleBlog", "/SingleBlog2", "/SingleBlog3"].includes(location.pathname) ? "active-dropdown" : ""}`}>
                                <Link to="#" className="menu-dropdown menu-text" onClick={() => toggleDropdown("blogs")} type="button"
                                    aria-expanded={openDropdown === "projects"}>Blogs
                                    <img className={`arrow-icon-menu ${openDropdown === "blogs" ? "up" : ""}`} src={DownArrowSvg} alt="down" />
                                </Link>
                                {openDropdown === "blogs" && (
                                    <div className="menu-ul-list">
                                        <div className="menu-ul-list-d">
                                            <ul>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/OurBlog" ? "active-sub" : ""}`} to="/OurBlog">Our Blog</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/Blog2" ? "active-sub" : ""}`} to="/Blog2">Two Grid Blog</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/Blog3" ? "active-sub" : ""}`} to="/Blog3">List Blog</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleBlog" ? "active-sub" : ""}`} to="/SingleBlog">Blog Right Sidebar</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleBlog2" ? "active-sub" : ""}`} to="/SingleBlog2">Blog Left Sidebar</Link>
                                                </li>
                                                <li>
                                                    <Link className={`submenu-link ${location.pathname === "/SingleBlog3" ? "active-sub" : ""}`} to="/SingleBlog3">Blog No Sidebar</Link>
                                                </li>
                                            </ul>
                                            <img src={ImagePhoto4} alt="menu visual 4" />
                                        </div>
                                    </div>
                                )}
                            </li>
                            <Link to="/contact" className={`conta-home ${location.pathname === "/contact" ? "active" : ""}`}>
                                Contact Us
                            </Link>
                        </ul>
                        <div className="side-menu-footer">
                            <a href="https://www.facebook.com"><img src={FacebookImg} alt="fb" /></a>
                            <a href="https://x.com"><img src={TwiiterImg} alt="tw" /></a>
                            <a href="https://www.instagram.com"><img src={InstaImg} alt="ig" /></a>
                            <a href="https://www.linkedin.com"><img src={LinkdienImg} alt="li" /></a>
                        </div>
                    </nav>

                    <div className="contact">
                        <div className="icon"><img src={HeadphoneSvg} alt="phone" /></div>
                        <div className="call-info">
                            <p>Call Us</p>
                            <Link to="tel:+12483578866">+1 (248) 357 8866</Link>
                        </div>
                    </div>

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Open menu">
                        <img src={SideMenu} alt="menu" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header