import friends from "../assets/quiz_friends.jpg";
import couples from "../assets/quiz_couples.jfif";
import bff from "../assets/quiz_bff.jfif";
import coming_soon from "../assets/coming_soon.jpg";

function QuizList(){
    return (
        <div id="indexrf" className="container">
            <div class="cards-list">
                <div class="card 1">
                    <div onClick={() => (window.location.href = "/quiz/friends")} class="card_image"><img src={friends} /></div>
                    <div class="card_title title-white"><p>Friend's Quiz</p></div>
                </div>
                <div class="card 2">
                    <div onClick={() => (window.location.href = "/quiz/couples")} class="card_image"><img src={couples} /></div>
                    <div class="card_title title-white"><p>Couple's Quiz</p></div>
                </div>
                <div class="card 3">
                    <div onClick={() => (window.location.href = "/quiz/bff")} class="card_image"><img src={bff} /></div>
                    <div class="card_title title-white"><p>BFF Quiz</p></div>
                </div>
                <div class="card 3">
                    <div class="card_image"><img src={coming_soon} /></div>
                    {/* <div class="card_title"><p>Coming Soon</p></div> */}
                </div>
                <div class="card 3">
                    <div class="card_image"><img src={coming_soon} /></div>
                    {/* <div class="card_title"><p>Coming Soon</p></div> */}
                </div>
                <div class="card 3">
                    <div class="card_image"><img src={coming_soon} /></div>
                    {/* <div class="card_title"><p>Coming Soon</p></div> */}
                </div>
            </div>
        </div>
);
}

export default QuizList