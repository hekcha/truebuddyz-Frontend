import Card from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";


function IndexYouLookLike(){
    return(
        <div className="inner div">
            <header className="header">
                <h1 onClick={() => window.location.href='/youlooklike'} style={{marginBottom:'0em'}}>You Look Like</h1>
            </header>
            <section className="tiles section" style={{marginTop:'30px'}}>
                <div id="indexrf" className="container">
                    <div className="cards-list">
                        <div 
                            className="card" 
                            onClick={()=>window.location.href="/youlooklike/anime"}
                            style={{
                                fontSize:'65px',
                                backgroundColor:'blue',
                                color:'white',
                                fontWeight:'700',
                                margin:'auto',
                                alignItems:'center',
                                justifyContent:'center',
                                textTransform:'capitalize',
                            }}
                        >
                            Anime
                        </div>

                        <div 
                            className="card" 
                            onClick={()=>window.location.href="/youlooklike/dog"}
                            style={{
                                fontSize:'65px',
                                backgroundColor:'blue',
                                color:'white',
                                fontWeight:'700',
                                margin:'auto',
                                alignItems:'center',
                                justifyContent:'center',
                                textTransform:'capitalize',
                            }}
                        >
                            Dog
                        </div>

                        <div 
                            className="card" 
                            onClick={()=>window.location.href="/youlooklike/entrepreneur"}
                            style={{
                                fontSize:'45px',
                                backgroundColor:'blue',
                                color:'white',
                                fontWeight:'700',
                                margin:'auto',
                                alignItems:'center',
                                justifyContent:'center',
                                textTransform:'capitalize',
                            }}
                        >
                            entrepreneur
                        </div>

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