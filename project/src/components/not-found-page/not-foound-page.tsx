import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>404. Lerka не найдена</h1>
      <Link to={AppRoute.Main} ><h2 style={{textAlign: 'center', color: 'blue'}}>вернуться на главную страницу</h2></Link>
    </>);
}

export default NotFoundPage;
