import {Link} from 'react-router-dom';
import FavoriteCard from './favorite-card';
import { AppRoute } from '../../const';
import {OfferType} from '../../types/offers-type';

type FavoriteLocationTypes = {
  offers: OfferType[],
  city: string,
}

function FavoriteList({offers, city}: FavoriteLocationTypes): JSX.Element {
  const favoriteOffers = offers.filter((item) => item.city.name === city);
  return (

    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Main} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map(({id, ...rest}) => (
          <FavoriteCard
            id={id} key={id} {...rest}
          />))}
      </div>
    </li>
  );
}

export default FavoriteList;
