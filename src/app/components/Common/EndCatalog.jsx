import React from 'react';

import "../../assets/styles/index.css"

const EndCatalog = ({visibility}) => {
    return visibility ?  <h1 className="centerElement">End Of Catalog</h1>: null ;
}
export default EndCatalog;