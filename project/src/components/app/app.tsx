import { OffersType } from '../../types/offers-type';
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
  offer: OffersType;
}

function App({offer}: AppProps): JSX.Element {
  return  (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <ManePage offer={offer}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Room} exact>
          <Room offer={offer}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offer} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
