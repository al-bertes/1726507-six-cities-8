import { OfferType } from '../../types/offers-type';
import OfferCard from './offer-card';

type OfferListType = {
  offers: OfferType[],
  onMouseEnterCard?: (id: number) => void,
  onMouseLeaveCard?: () => void,
}

function OfferList({offers, onMouseEnterCard, onMouseLeaveCard}: OfferListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) =>
        (
          <OfferCard
            key={offer.id}
            offers={offer}
            onMouseEnterCard={onMouseEnterCard}
            onMouseLeaveCard={onMouseLeaveCard}
          />
        ),
      )}
    </div>
  );
}


export default OfferList;
