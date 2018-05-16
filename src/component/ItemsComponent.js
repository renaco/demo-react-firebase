import React, { Component } from 'react';

const ItemsComponent = ({ items, done }) => {
  let lis = []
  let mark = done === false ? '\u2713' : 'x';
  for (let i in items) {
    if (items[i].completed === done) {
      lis.push(<li key={i}>{items[i].item} <span>{mark}</span></li>)
    }
  }
  return <ul className="items"> {lis} </ul>
}

export default ItemsComponent;