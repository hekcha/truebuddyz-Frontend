import friends from "../assets/quiz_friends.jpg";
import couples from "../assets/quiz_couples.jfif";
import bff from "../assets/quiz_bff.jfif";
import coming_soon from "../assets/coming_soon.jpg";
import Card from "../Card";

function QuizList(){
    return (
        <div id="indexrf" className="container">
            <div className="cards-list">
                <Card link="/quiz/friends" img={friends} text="Friend's Quiz" />
                <Card link="/quiz/couples" img={couples} text="Couples's Quiz" />
                <Card link="/quiz/bff" img={bff} text="BFF Quiz" />
                <Card link="" img={coming_soon} text="" />
                <Card link="" img={coming_soon} text="" />
                <Card link="" img={coming_soon} text="" />
            </div>
        </div>
);
}

export default QuizList