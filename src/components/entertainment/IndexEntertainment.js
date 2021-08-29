import Card from '../Card' 
import coming_soon from "../assets/coming_soon.jpg";
import noimage from "../assets/noimage.jpg";



function IndexEntertainment(props){
    return(
        <div>
            IndexEntertainment
            <div id="indexrf" className="container">
                <div className="cards-list">
                    <Card link="/entertainment/anime" img={noimage} text="anime" />
                    <Card link="/entertainment/dog" img={noimage} text="dog" />
                    <Card link="/entertainment/entrepreneur" img={noimage} text="entrepreneur" />
                </div>
            </div>
        </div>
    );
}

export default IndexEntertainment