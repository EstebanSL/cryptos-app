import React, {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import { Currencies } from '../models/Currencies';
import { cryptoRequest } from '../models/cryptoRequest';
import { FormCont } from '../styles/components/Form.styles';

interface Props {
  setValues: Dispatch<SetStateAction<cryptoRequest>>;
}

const Form = ({ setValues }: Props) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const { callEndpoint } = useFetch();

  const currencies: Currencies[] = [
    { id: 'COP', name: 'Peso colombiano' },
    { id: 'USD', name: 'Dólar estadounidense' },
    { id: 'EUR', name: 'Euro' },
  ];

  const { select: currency, SelectValue: SelectCurrency } = useSelect(
    'Choose a currency',
    currencies
  );
  const { select: crypto, SelectValue: SelectCrypto } = useSelect(
    'Choose a cryptocurrency',
    cryptos
  );

  const queryApi = async () => {
    const url =
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    const result = await callEndpoint(url);
    const arrayCryptos = result.Data.map((crypto: any) => {
      const object = {
        id: crypto.CoinInfo.Name,
        name: crypto.CoinInfo.FullName,
      };
      return object;
    });
    setCryptos(arrayCryptos);
  };

  useEffect(() => {
    queryApi();
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();

    if ([currency, crypto].includes('')) {
      console.log('error');
      setError(true);
      return;
    }
    setValues({
      currency,
      crypto,
    });
    setError(false);
  };

  return (
    <FormCont>
      <form onSubmit={(e) => onSubmit(e)}>
        <SelectCurrency />
        <SelectCrypto />
        {error && <Error>All fields are required</Error>}
        <input type="submit" value="Cotizar" />
      </form>
    </FormCont>
  );
};

export default Form;
