import './about.scss';
import React from 'react';
import hinata from '../../assets/images/hinata.svg'

const About = () => {
    return (
        <div className="conteiner">
        <div className={'about'}>
            <h1 className={'about__title'}>
                About
            </h1>

            <div className={'about__block'}>
                <div className={'about__left'}>
                    <p className={'about__text'}>Shōyō Hinata, upon seeing a volleyball match, aims to become the next "Little Giant" and thus, joins his junior high volleyball club. <br/>
                        <br/>
                        After finding new members, they set out for the junior high school tournament, where they cross paths with a formidable school with the "King of the Upper Court", Tobio Kageyama. Although his team lost, Shōyō is still determined to aim for the top and exact revenge on Kageyama. <br/>
                        <br/>
                        Upon entering high school, he receives the biggest surprise; he and Kageyama are in the same high school volleyball club! Now they is reaching new achievements
                    </p>
                </div>
                <div className={'about__right'}>
                    <img src={hinata} className={'about__img'} alt="hinata"/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;