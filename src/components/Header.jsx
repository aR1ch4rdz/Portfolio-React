import "../Header.css"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header_container">
            <header>
                <div className="nav_container">
                    <nav>
                        <div className="nav_content">
                            <div className="coding">
                                <h1>&lt;/&gt;</h1>
                            </div>

                            <div className="nav_items">
                                <Link to="/">Home</Link>
                                <Link to="/Sobre">Sobre</Link>
                                <Link to="/Skills">Skills</Link>
                                <Link to="/Projetos">Projetos</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header