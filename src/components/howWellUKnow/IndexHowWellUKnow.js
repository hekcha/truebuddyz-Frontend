import Card from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";
import noimage from "../assets/noimage.jpg";


function IndexHowWellUKnow(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 onClick={() => window.location.href='/howwelluknow'} style={{marginBottom:'0em'}}>How Well You Know</h1>
            </header>
            <section className="tiles section" style={{marginTop:'0'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <Card link="/howwelluknow/marvel" img={noimage} text="Marvel" />
                        <Card link="/howwelluknow/bollywood" img={noimage} text="Bollywood" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndexHowWellUKnow