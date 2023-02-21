import "../Header.css"
import { Link } from 'react-router-dom'
import { useRef } from "react"
function Header() {
    const HeaderItems = useRef(null)
    let currentPos = 0
    
    function changePosition(pos){
        HeaderItems.current.children[currentPos].classList.remove("userPosition")
        currentPos = pos
        HeaderItems.current.children[pos].classList.add("userPosition")
    }

    return (
        <div className="header_container">
            <header>
                <div className="nav_container">
                    <nav>
                        <div className="nav_content">
                            <div className="coding">
                                <h1>&lt;/&gt;</h1>
                            </div>

                            <div ref={HeaderItems} className="nav_items">
                                <Link className="nav_item userPosition" onClick={()=>{changePosition(0)}} to="/">Home</Link>
                                <Link className="nav_item" onClick={()=>{changePosition(1)}} to="/Sobre">Sobre</Link>
                                <Link className="nav_item" onClick={()=>{changePosition(2)}} to="/Skills">Skills</Link>
                                <Link className="nav_item" onClick={()=>{changePosition(3)}} to="/Projetos">Projetos</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header