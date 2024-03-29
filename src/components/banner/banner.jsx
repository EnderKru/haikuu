import './banner.scss';
// import season1 from'../../assets/images/season1.svg'
// import season2 from'../../assets/images/season2.svg'

function Banner() {
    return (
     <div className='banner'>
         <div className="conteiner">
          <div className={'banner__info'}>
              <h1 className={'banner__japan'}>
                  アニメ 配給
              </h1>
              <h1 className={'banner__title'}>
                  Anime Haikuu
              < /h1>
              <p className={'banner__text'}>
                  Hinato Shoyo decides to take up volleyball <br/> seriously after watching this game several <br/> times. Now he is reaching new achievements
              </p>
          </div>
             <div className={'banner__info-bottom'}>
                 <div className={'banner__rating1'}>
                     <h1 className={'banner__info-rating'}>
                         Rating
                     </h1>
                     <span className={'banner__span'}>
                         <svg width="225" height="45" viewBox="0 0 225 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 0L27.5516 15.5471H43.8988L30.6736 25.1558L35.7252 40.7029L22.5 31.0942L9.27483 40.7029L14.3264 25.1558L1.10123 15.5471H17.4484L22.5 0Z" fill="#FF9900"/>
<path d="M67.5 0L72.5516 15.5471H88.8988L75.6736 25.1558L80.7252 40.7029L67.5 31.0942L54.2748 40.7029L59.3264 25.1558L46.1012 15.5471H62.4484L67.5 0Z" fill="#FF9900"/>
<path d="M112.5 0L117.552 15.5471H133.899L120.674 25.1558L125.725 40.7029L112.5 31.0942L99.2748 40.7029L104.326 25.1558L91.1012 15.5471H107.448L112.5 0Z" fill="#FF9900"/>
<path d="M157.5 0L162.552 15.5471H178.899L165.674 25.1558L170.725 40.7029L157.5 31.0942L144.275 40.7029L149.326 25.1558L136.101 15.5471H152.448L157.5 0Z" fill="#FF9900"/>
<path d="M202.5 0L207.552 15.5471H223.899L210.674 25.1558L215.725 40.7029L202.5 31.0942L189.275 40.7029L194.326 25.1558L181.101 15.5471H197.448L202.5 0Z" fill="#D9D9D9"/>
</svg>
                     </span>
                 </div>
                 <div className={'banner__genre'}>
                     <h1 className={'banner__info-rating'}>
                         Genre
                     </h1>
                     <p className={'banner__info-text'}>
                         Sport, Drama, School, Comedy
                     </p>
                 </div>
                 <div className={'banner__studio'}>
                     <h1 className={'banner__info-rating'}>
                         Studio
                     </h1>
                     <p className={'banner__info-text'}>
                         Production I.G
                     </p>
                 </div>
             </div>
         </div>
      </div>
    )
  }
export default Banner