import { OfferType } from '../../types/offers-type';
import { AppRoute, AuthorizationStatus } from '../../const';
import Favorites from '../favorites/favorites';
// import FavoritesEmpty from '../favorites/favorites-empty';
import Login from '../login/login';
// import PropertyNotLogged from '../property/property-not-logged';
import Room  from '../room/room';
import NotFoundPage from '../not-found-page/not-foound-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ManePage from '../main/main-page';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps): JSX.Element {
  return  (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <ManePage offers={offers}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Room} exact>
          <Room offers={offers}/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
