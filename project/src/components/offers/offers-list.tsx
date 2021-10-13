import { OffersType } from '../../types/offers-type';
import OfferCard from './offer-card';

type OfferListType = {
  offer: OffersType,
}

function OfferList({offer}: OfferListType): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offer.map(({ price, rating, title, previewImage, isPremium, type, id}) =>
        (
          <OfferCard
            key={id}
            price={price}
            rating={rating}
            title={title}
            previewImage={previewImage}
            isPremium={isPremium}
            type={type}
            id={id}
          />
        ),
      )}
    </div>
  );
}


export default OfferList;
