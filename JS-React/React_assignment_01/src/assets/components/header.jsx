function Header() {
    return (
        <>
            {/* header */}
            <div className="nav ">
                <p className="logo ">UNBOUNCE</p>
                <ul className="list-none sm:w[200px] sm:text-sm md:w[200px] md:text-sm">
                    <li><a href="./App.jsx">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Service</a></li>
                </ul>
                <button>Search</button>
            </div>

        </>
    )
}
export default Header