
import React from 'react';
import IdrLogo from '../svg/IdrLogo';

export default ({ dataFetch }) => (
  <div className="App-header">
    {dataFetch
      ? (dataFetch.fulfilled && dataFetch.value.data.Name) && dataFetch.value.data.Name
      : <IdrLogo />
    }
  </div>
);
