export {default as Button} from "./Button.jsx"
export {default as CardMenu} from "./CardMenu.jsx"
export {default as TegLine} from "./TagLine.jsx"
export {default as Footer} from "./Footer.jsx"
export {default as IconMedia} from "./IconMedia.jsx"
export {default as CheckOut} from "./CheckOut"



import {default as Navbar} from "./Navbar"
import {default as Hamburger} from "./Navbar/Hamburger"
import {default as OpstionMobile} from "./Navbar/OpstionMobile"
import {default as OpstionDekstop} from "./Navbar/OpstionDekstop"

Navbar.Hamburger = Hamburger;
Navbar.OpstionMobile = OpstionMobile;
Navbar.OpstionDesktop = OpstionDekstop;

export {Navbar,OpstionMobile,OpstionDekstop,Hamburger};