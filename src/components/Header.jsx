import "../styles/Header.css"
import { Link } from 'react-router-dom'
import { useRef, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
function Header() {
    const [isMobile, setIsMobile] = useState(false)


    return (

        <header className="header_container">
            <div className="coding">
                <h1>&lt;/&gt;</h1>
            </div>
            <nav className="nav_container">
                <div className={isMobile ? "mobile_nav_items" : "nav_items"} onClick={()=>setIsMobile(false)}>
                    <Link className="nav_item" to="/">Home</Link>
                    <Link className="nav_item" to="/Sobre">Sobre</Link>
                    <Link className="nav_item" to="/Skills">Skills</Link>
                    <Link className="nav_item" to="/Projetos">Projetos</Link>
                </div>
            </nav>
            <div className="mobile_btn" onClick={() => { setIsMobile(!isMobile) }}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </div>

        </header>

    )
}

export default Header