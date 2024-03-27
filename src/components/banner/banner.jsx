import './banner.scss';
import season1 from'../../assets/images/season1.svg'
import season2 from'../../assets/images/season2.svg'

function Banner() {
    return (
      <div className='banner'>
          <div className={'banner__info'}>
              <h1 className={'banner__japan'}>
                  アニメ 配給
              </h1>
              <h1 className={'banner__title'}>
                  Anime Haikuu
              </h1>
              <p className={'banner__text'}>
                  Hinato Shoyo decides to take up volleyball <br/> seriously after watching this game several <br/> times. Now he is reaching new achievements
              </p>
          </div>

          <div className={'banner__seasen'}>
              <div className={'banner__left'}>
                  <div className={'banner__info__rating'}>
                      <h1 className={'banner__info__rating-title'}>
                          Rating
                      </h1>
                      <br/> <span className={'banner__info__rating-star'}>
                              <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z" fill="#FF9900"/>
<path d="M45 0L48.3677 10.3647H59.2658L50.4491 16.7705L53.8168 27.1353L45 20.7295L36.1832 27.1353L39.5509 16.7705L30.7342 10.3647H41.6323L45 0Z" fill="#FF9900"/>
<path d="M75 0L78.3677 10.3647H89.2658L80.4491 16.7705L83.8168 27.1353L75 20.7295L66.1832 27.1353L69.5509 16.7705L60.7342 10.3647H71.6323L75 0Z" fill="#FF9900"/>
<path d="M105 0L108.368 10.3647H119.266L110.449 16.7705L113.817 27.1353L105 20.7295L96.1832 27.1353L99.5509 16.7705L90.7342 10.3647H101.632L105 0Z" fill="#FF9900"/>
<path d="M135 0L138.368 10.3647H149.266L140.449 16.7705L143.817 27.1353L135 20.7295L126.183 27.1353L129.551 16.7705L120.734 10.3647H131.632L135 0Z" fill="#D9D9D9"/>
</svg>

                          </span>
                  </div>
                  <div className={'banner__info-genre'}>
                      <h1 className={'banner__info__genre-title'}>
                          Genre
                      </h1>
                      <br/><p className={'banner__info__genre__text'}>
                          Sport, Drama, School,<br/> Comedy
                      </p>
                  </div>
                  <div className={'banner__info-studio'}>
                      <h1 className={'banner__info__studio-title'}>
                          Studio
                      </h1>
                      <br/><p className={'banner__info__studio-text'}>
                          Production I.G
                      </p>
                  </div>
              </div>
              <div className={'banner__right'}>
                  <div className={'banner__left-view'}>
                      <img src={season1} className={'banner__view-img'} alt="season"/>
                      <p className={'banner__view-text'}>
                          1st season
                      </p>

                      <div className={'banner__right-view'}>
                          <img src={season2} className={'banner__view-img'} alt="season"/>
                          <p className={'banner__view-text'}>
                              2ed season
                          </p>
                      </div>

                  </div>
              </div>
          </div>
      </div>
    )
  }
export default Banner