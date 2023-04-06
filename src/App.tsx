import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import { Result } from './components/Result';
import useFetch from './hooks/useFetch';
import { CryptoInformation } from './models/cryptoInformation';
import { cryptoRequest } from './models/cryptoRequest';
import { Container, Heading, Image } from './styles/global.styles';
import logoApp from './assets/imagen-criptos.png';
import Loader from './components/Loader';

function App() {
  const [values, setValues] = useState<cryptoRequest>({
    crypto: '',
    currency: '',
  });
  const [cotization, setCotization] = useState<CryptoInformation | null>(null);

  const { loading, callEndpoint } = useFetch();

  const getCotization = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${values.crypto}&tsyms=${values.currency}`;
    const result = await callEndpoint(url);
    setCotization(result.DISPLAY[values.crypto][values.currency]);
  };

  useEffect(() => {
    console.log(Object.values(values));
    if (!Object.values(values).includes('')) {
      getCotization();
    }
  }, [values]);

  return (
    <Container>
      <h2>Crypto converter</h2>
      <hr />
      <div id="contInputs">
        <Image src={logoApp} alt="logo app" />
        <Form setValues={setValues} />
      </div>
      {loading && <Loader />}
      {!loading && cotization?.PRICE && <Result info={cotization} />}
    </Container>
  );
}

export default App;
