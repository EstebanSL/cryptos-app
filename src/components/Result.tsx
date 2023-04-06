import React from 'react';
import { ResultCont } from '../styles/components/Result.styles';

export const Result = ({ info }: any) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    info;
  return (
    <ResultCont>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="currency logo" />
      <div>
        <p>
          <b>Actual price: </b> <span>{PRICE}</span>
        </p>
        <p>
          <b>Day highest price: </b> <span>{HIGHDAY}</span>
        </p>
        <p>
          <b>Day lowest price: </b> <span>{LOWDAY}</span>
        </p>
        <p>
          <b>Variation last 24 hours: </b> <span>{CHANGEPCT24HOUR}</span>
        </p>
        <p>
          <b>Last update: </b> <span>{LASTUPDATE}</span>
        </p>
      </div>
    </ResultCont>
  );
};
