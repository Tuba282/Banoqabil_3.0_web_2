import LOGO from "../assets/logo.png"
import '../App.css'
function Header(){

    return (
        <>
            <div className="nav">
                <div className="logo"><img src={LOGO} className="logo"/></div>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Blogs</a></li>
                <div className="btns"><button>Search</button></div>
            </div>
        </>
    )

    
}

export default Header