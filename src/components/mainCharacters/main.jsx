import React from 'react';
import hinato from'../../assets/images/hinato.svg'
import kageyama from '../../assets/images/kageyama.svg'
import "./main.scss"

const Main = () => {
    return (
        <div className={'main'}>
            <div className={'conteiner'}>
                <h1 className={'main__title'}>
                    Main characters
                </h1>
                <div className={'main__block'}>
                    <div className={'main__left'}>
                        <img src={hinato} className={'main__img'} alt=""/>
                        <h1 className={'main__left-title'}>
                            Shoyo Hinata
                        </h1>

                        <div className={'main__row'}>
                            <ul className={'main__list'}>
                                <li className={'main__item'}>
                                    Position:
                                </li>
                                <li className={'main__item'}>
                                    Height
                                </li>
                                <li className={'main__item'}>
                                    Date of birth:
                                </li>
                                <li className={'main__item'}>
                                    Jumping
                                    reach:
                                </li>
                            </ul>
                            <ul className={'main__list1'}>
                                <li className={'main__item1'}>Middle Blocker</li>
                                <li className={'main__item1'}>164.2cm</li>
                                <br/><br/>
                                <li className={'main__item1'}>June 21, 1996</li>
                                <br/> <br/>
                                <li className={'main__item1'}>333 cm</li>
                            </ul>
                        </div>

                    </div>
                    <div className={'main__right'}>
                        <img src={kageyama} className={'main__img'} alt=""/>
                        <h1 className={'main__right-title'}>
                            Tobio Kageyama
                        </h1>

                        <div className={'main__row'}>
                            <ul className={'main__list'}>
                                <li className={'main__item'}>
                                    Position:
                                </li>
                                <li className={'main__item'}>
                                    Height:
                                </li>
                                <li className={'main__item'}>
                                    Date of birth:
                                </li>
                                <li className={'main__item'}>
                                    Jumping
                                    reach:
                                </li>
                            </ul>
                            <ul className={'main__list1'}>
                                <li className={'main__item1'}>Setter</li>
                                <li className={'main__item1'}>181.9cm</li>
                                <br/><br/>
                                <li className={'main__item1'}>December 22, 1996</li>
                                <br/><br/>
                                <li className={'main__item1'}>337 cm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;