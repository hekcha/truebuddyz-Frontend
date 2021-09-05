import Card from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";
import noimage from "../assets/noimage.jpg";


function IndexEntertainment(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 onClick={() => window.location.href='/entertainment'} style={{marginBottom:'0em'}}>Entertainment</h1>
            </header>
            <section className="tiles section" style={{marginTop:'0'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <Card link="/entertainment/anime" img={noimage} text="anime" />
                        <Card link="/entertainment/dog" img={noimage} text="dog" />
                        <Card link="/entertainment/entrepreneur" img={noimage} text="entrepreneur" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                        <Card link="" img={coming_soon} text="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default IndexEntertainment