import React from 'react';
import {Spin} from 'antd';

import "../../../public/styles/index.css";

export const contains = (s1, s2) => s1.toLowerCase().includes(s2.toLowerCase());

export const hasMore = (arr, limit = 1000)=>arr.length <= limit;

export const isEmpty = (arr)=>arr.length === 0;

export const displayEndCatalog = (users) =>
hasMore(users) ? null : <h1 className="centerElement">End Of Catalog</h1>;


export const displaySpinner = (status) =>
status ? (
  <Spin className="centerElement" tip="Loading..." />
) : null;
