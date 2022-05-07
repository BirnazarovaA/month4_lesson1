import "./components/Header.css"
const Header = () => {
    return(
        <header className="nav-container">
            <img src="https://whenindanang.com/wp-content/uploads/2020/11/logo-designs-that-you-may-fall-in-love-with-7.png" alt="logo" width={200} height={100}/>
            <ul className="links-container">
                <li><a href="#">Red</a></li>
                <li><a href="#">Blue</a></li>
                <li><a href="#">Yellow</a></li>
                <li><a href="#">Green</a></li>
                <li><a href="#">Purple</a></li>
            </ul>
        </header>
    )
}

export default Header;