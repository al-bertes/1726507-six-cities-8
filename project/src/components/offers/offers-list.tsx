import { OffersType } from '../../types/offers-type';
import OfferCard from './offer-card';

type OfferListType = {
  offers: OffersType,
}

function OfferList({offers}: OfferListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <OfferCard
            key={offer.id}
            offers={offer}
          />
        ),
      )}
    </div>
  );
}


export default OfferList;
