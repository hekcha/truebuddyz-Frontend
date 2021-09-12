import Card, { GradientCard } from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";


function IndexHowWellUKnow(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 onClick={() => window.location.href='/howwelluknow'} style={{marginBottom:'0em'}}>How Well You Know</h1>
            </header>
            <section className="tiles section" style={{marginTop:'0'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <GradientCard link="/howwelluknow/marvel" text="marvel" />
                        <GradientCard link="/howwelluknow/bollywood " text="bollywood " />

                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndexHowWellUKnow