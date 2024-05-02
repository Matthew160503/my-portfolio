import photo from './../../img/photo_5251393106673260320_y.jpg';

import html from './../../img/skills/html.svg';
import css from './../../img/skills/css.svg';
import react from './../../img/skills/react.svg';
import js from './../../img/skills/js.svg';
import scss from './../../img/skills/scss.svg';
import node from './../../img/skills/node.svg';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="description-wrapper">
                    <h1 className="section__title"><strong>MATTHEW KURYLOVICH</strong></h1>
                    <p className="subtitle">Hi, I'm a passionate front-end<br/>developer from Belarus, Minsk.</p>
                </div>
                <div className="photo-wrapper"><img src={photo} alt="presentation"/></div>
                <ul className="skills-icons">
                    <li className="skill-desc">Tech stack |</li>
                    <li className="skill"><img src={html} alt="skill"/></li>
                    <li className="skill"><img src={css} alt="skill"/></li>
                    <li className="skill"><img src={react} alt="skill"/></li>
                    <li className="skill"><img src={js} alt="skill"/></li>
                    <li className="skill"><img src={scss} alt="skill"/></li>
                    <li className="skill"><img src={node} alt="skill"/></li>
                </ul>
            </div>
        </div>
    </header>
    );
}
 
export default Header;