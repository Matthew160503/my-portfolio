import Header from "../components/header/Header";

const Home = () => {
    return (
        <>
        <Header />

        <main className="section">
        <div className="container">
            <div className="about-me">
                <div className="advantages">
                    <h3 className="advantage__title">Education</h3>
                    <p className="advantage__description">Belarusian State Economic University<br/>Faculty of Digital Economy<br/>Future degree: Bachelor<br/>Specialty: Economic cybernetics</p>
                </div>
                <div className="advantages">
                    <h3 className="advantage__title">Skills</h3>
                    <p className="advantage__description">JavaScript (ES6, ES7), React, Redux<br/>HTML, CSS, CSS3<br/>Preprocessors: SCSS, SASS<br/>Graphic editors: Figma, Photoshop<br/>Tools: npm, Git, GitHub<br/>Basic knowledge: Node.js, Phython, Java, MySQL </p>
                </div>
            </div>
        </div>
    </main>
        </>
    );
}
 
export default Home;