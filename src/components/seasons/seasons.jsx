import React from 'react';
import './seasons.scss'
import s1 from '../../assets/images/s1.svg'
import s2 from '../../assets/images/s2.svg'
import s3 from '../../assets/images/s3.svg'
import s4 from '../../assets/images/s4.svg'
import s5 from '../../assets/images/s5.svg'
import s6 from '../../assets/images/s6.svg'


const Seasons = () => {
    return (
        <div>
            <div className={'conteiner'}>
                <div className={'season'}>
                    <h1 className={'season__title'}>
                        Seasons
                    </h1>
                    <div className={'season__block'}>
                        <div className={'season__card'}>
                            <img src={s1} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyu!!
                            </h1>
                            <p className={'season__text'}>
                                Hinato Shoyo decides to take up volleyball <br/> seriously after watching this game several <br/> times. Now he is reaching new <br/> achievements
                            </p>
                        </div>
                        <div className={'season__card'}>
                            <img src={s2} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyu!! 2
                            </h1>
                            <p className={'season__text'}>
                                Having moved to the new Karasuno High <br/> School, Hinata also joins her volleyball <br/> club. By coincidence, he means his old <br/> enemy, who defeated his old team.
                            </p>
                        </div>
                        <div className={'season__card'}>
                            <img src={s3} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyu!! 3
                            </h1>
                            <p className={'season__text'}>
                                His team made it to the finals important tournament! Hinata vowed to avenge this defeat next season. There will be a fight with teams from high school!
                            </p>
                        </div>
                        <div className={'season__card'}>
                            <img src={s4} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyu!! To the top
                            </h1>
                            <p className={'season__text'}>
                                His team made it to the finals important tournament! Hinata vowed to avenge this defeat next season. There will be a fight with teams from high school!
                            </p>
                        </div>
                        <div className={'season__card'}>
                            <img src={s5} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyu!! 2 To the top
                            </h1>
                            <p className={'season__text'}>
                                His team made it to the finals important tournament! Hinata vowed to avenge this defeat next season. There will be a fight with teams from high school!
                            </p>
                        </div>
                        <div className={'season__card'}>
                            <img src={s6} className={'season__img'} alt=""/>
                            <h1 className={'season__title-card'}>
                                Haikyuu!! Decisive Battle at the...
                            </h1>
                            <p className={'season__text'}>
                                Set after Karasuno High's win against Inarizaki High, it will center on Karasuna High's decisive match against Nekoma High.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seasons;