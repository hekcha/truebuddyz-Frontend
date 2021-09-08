import Card from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";
import noimage from "../assets/noimage.jpg";


function IndexYouLookLike(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 onClick={() => window.location.href='/youlooklike'} style={{marginBottom:'0em'}}>You Look Like</h1>
            </header>
            <section className="tiles section" style={{marginTop:'0'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <Card link="/youlooklike/anime" img={noimage} text="anime" />
                        <Card link="/youlooklike/dog" img={noimage} text="dog" />
                        <Card link="/youlooklike/entrepreneur" img={noimage} text="entrepreneur" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndexYouLookLike