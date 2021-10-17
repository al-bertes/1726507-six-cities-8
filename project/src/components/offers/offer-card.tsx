import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferType } from '../../types/offers-type';

type OfferCardType = {
  offers: OfferType,
  onMouseEnterCard?: (id: number) => void;
  onMouseLeaveCard?: () => void;
}
function OfferCard({offers: {
  price,
  rating,
  title,
  previewImage,
  isPremium,
  type,
  id,
},onMouseEnterCard, onMouseLeaveCard}: OfferCardType): JSX.Element {
  const mouseEnterHandler = () => {
    if (onMouseEnterCard) {
      onMouseEnterCard(id);
    }
  };

  const mouseLeaveHandler = () => {
    if (onMouseLeaveCard) {
      onMouseLeaveCard();
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
    >
      {(isPremium) ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
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
            <span style={{width: `${rating/5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default OfferCard;
