import React from 'react';

export default function NavBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ maxWidth: '50px' }}>
        <span>Stock center</span>
      </div>
      <span style={{ color: 'red' }}>Items in stock</span>
    </div>
  );
}
