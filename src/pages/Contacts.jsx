import { useRef } from 'react';
import returnImg from './../img/icons/return.svg';

const Contacts = () => {
    const ref = useRef();

    const handleReturnCard = () => {
        ref.current.classList.toggle("turn-over");
    }

    return (
        <main className="section">
            <div className="container">
                <div onClick={handleReturnCard} className="card__wrapper">
                    <div ref={ref} className="card">
                        <div className="side front">
                            <h2 className="card__title">Contacts</h2>
                            <p className="card-description">Click to see <img alt='return' className="return-img" src={returnImg}/></p>
                        </div>
                        <div className="side back">
                            <ul className="content-list">
                                <li className="content-list__item">
                                    <h2 className="card-description">Phone</h2>
                                    <p><a href="tel:+375299265453">+375 (29) 926-54-53</a></p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="card-description">Telegram</h2>
                                    <p><a href="https://t.me/mkurylovich">@mkurylovich</a></p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="card-description">Email</h2>
                                    <p><a href="mailto:webdev@protonmail.com">mr.kurilovich2000@gmail.com</a></p>
                                </li>
                                <li className="content-list__item">
                                    <h2 className="card-description">Location</h2>
                                    <p>Minsk, Belarus</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </main>
    );
}
 
export default Contacts;