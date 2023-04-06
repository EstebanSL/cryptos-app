import React from 'react';
import '../styles/components/Spinner.styles.css'
const Loader = () => {
  return (
    <div className="lds-ripple"><div></div><div></div></div>
  );
};

export default Loader;
