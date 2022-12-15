import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import OneList from './OneList';

export default function List() {
  const items = useSelector((state) => state.item);
  return (
    <>
      <div className="list-group-item d-flex justify-content-between align-items-start" style={{ margin: '5% 5% 20px 5%', fontWeight: 'bold' }}>

        <div style={{ minWidth: '14%' }}>#</div>
        <div style={{ minWidth: '33%' }}>Title</div>
        <div style={{ minWidth: '33%' }}>Price, USD</div>
        <div style={{ minWidth: '30%' }}>Date and time</div>

      </div>
      <ol className="list-group list-group-numbered">
        {
              items.map((el) => (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <OneList item={el} />
                </li>
              ))
          }

      </ol>
      <Modal />
    </>
  );
}
