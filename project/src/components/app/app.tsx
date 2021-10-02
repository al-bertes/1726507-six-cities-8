import ManePage from '../main/main-page';

type AppProps = {
  valueOffers: number[]
}
function App({valueOffers}: AppProps): JSX.Element {
  return  (
    <ManePage valueOffers={valueOffers} />
  );
}

export default App;
