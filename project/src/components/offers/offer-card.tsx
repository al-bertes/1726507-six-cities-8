import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useState } from 'react';


// import { OfferType } from '../../types/offers-type';

type OfferCardType = {
  price: number,
  rating: string,
  title: string
  previewImage: string,
  isPremium: boolean,
  type: string,
  id: number
}
function OfferCard({
  price,
  rating,
  title,
  previewImage,
  isPremium,
  type,
  id}: OfferCardType): JSX.Element {

  const [offerId, setId] = useState(0);

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => setId(id)}
      onMouseLeave={() => setId(0)}
    >
      {(isPremium) ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room + offerId}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default OfferCard;
