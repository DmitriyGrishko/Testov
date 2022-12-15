import React from 'react';

export default function OneList({ item }) {
  return (
    <>
      <div style={{ minWidth: '20%', maxWidth: '30%', wordBreak: 'break-all' }}>
        {' '}
        <p>{item.title}</p>
        {' '}
      </div>
      <div style={{ minWidth: '20%' }}>{item.price}</div>
      <div style={{ minWidth: '20%' }}>
        {item.date.substring(0, 10)}
        {' '}
        <br />
        {item.date.substring(10)}
      </div>
    </>
  );
}
