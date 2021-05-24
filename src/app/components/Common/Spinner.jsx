import React from 'react';
import {Spin} from 'antd'

import "../../assets/styles/index.css"


const Spinner = ({status}) => {
    return  status ? (
        <Spin className="centerElement" tip="Loading..." />
      ) : null;
}
export default Spinner;
