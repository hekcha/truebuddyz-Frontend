import friends from "../assets/quiz_friends.jpg";
import couples from "../assets/quiz_couples.jfif";
import bff from "../assets/quiz_bff.jfif";
import coming_soon from "../assets/coming_soon.jpg";
import Card from "../Card";

function QuizList(){
    return (
		<div className="inner div">
			<header className="header">
				<h1 className="h1" onClick={() => window.location.href='/quiz'} style={{marginBottom:'0em'}}>Quiz</h1>
			</header>
			<section className="tiles section" style={{marginTop:'0'}}>
				<div id="indexrf" className="container">
					<div className="cards-list">
                        <Card link="/quiz/friends" img={friends} text="Friend's Quiz" />
                        <Card link="/quiz/couples" img={couples} text="Couples's Quiz" />
                        <Card link="/quiz/bff" img={bff} text="BFF Quiz" />
                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
                        <Card link="#" img={coming_soon} text="" />
					</div>
				</div>
			</section>
		</div>
    );
}

export default QuizList