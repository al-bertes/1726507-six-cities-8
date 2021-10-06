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
  valueOffers: number[]
}

function App({valueOffers}: AppProps): JSX.Element {
  return  (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <ManePage valueOffers={valueOffers} />
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Room} exact>
          <Room/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
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
