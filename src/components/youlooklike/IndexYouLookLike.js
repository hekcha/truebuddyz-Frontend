import Card, { GradientCard } from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";


function IndexYouLookLike(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 className="h1" onClick={() => window.location.href='/youlooklike'} style={{marginBottom:'0em'}}>You Look Like</h1>
            </header>
            <section className="tiles section" style={{marginTop:'30px'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <GradientCard link="/youlooklike/anime" text="Anime" />
                        <GradientCard link="/youlooklike/dog" text="dog" />
                        <GradientCard link="/youlooklike/entrepreneur" text="entrepreneur" />

                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />

                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndexYouLookLike