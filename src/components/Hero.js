import "./Hero.css"
const Hero = () => {
    return(
        <div className="hero-container">
            <h1 align='center'> I 🤍   love Color</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consequatur debitis dolore, doloribus eius excepturi fugiat impedit, ipsam magni mollitia non odio odit omnis quo, quod sed voluptas voluptate?</p>
            <button>Over to you</button>
            <div className="hero-box">
                <div className="hero-item">
                    <div className="hero-image">
                        <img src="https://www.svgrepo.com/show/415822/contact-business-card.svg"/>
                    </div>
                    <h4>Blue</h4>
                    <p1> Blue is the colour, football is the game
                        We're all together, and winning is our aim
                        So cheer us on through the sun and rain
                        'cause Chelsea, Chelsea is our name</p1>
                </div>
                <div className="hero-item">
                    <div className="hero-image">
                        <img src="https://www.svgrepo.com/show/415815/contact-laptop-email.svg"/>
                    </div>
                    <h4>Green</h4>
                    <p1>“Green Is the Colour” is a track on Pink Floyd’s 1969 Soundtrack from the Film More. It was composed and written by Roger Waters and sung by David Gilmour.</p1>
                </div>
                <div className="hero-item">
                    <div className="hero-image">
                        <img src="https://www.svgrepo.com/show/415820/contact-writing-write.svg"/>
                    </div>
                    <h4>Red</h4>
                    <p1>Red is the color of extremes. It’s the color of passionate love, seduction, violence, danger, anger, and adventure.</p1>
                </div>
            </div>
        </div>
    )
}

export default Hero;