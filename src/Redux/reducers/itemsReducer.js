import { ADD_ITEM } from '../type';

let prev = [];
(function () {
  try {
    // eslint-disable-next-line no-unused-expressions
    sessionStorage.test
      ? prev = [...JSON.parse(sessionStorage.test)]
      : prev = [
        {
          title: 'Headphones',
          price: parseFloat(10.00).toFixed(2),
          date: '11.01.2021 10:00:00',
        },
        {
          title: 'Mouse',
          price: parseFloat(15.20).toFixed(2),
          date: '12.01.2021 15:00:00',
        },
        {
          title: 'Keyboard',
          price: parseFloat(9.99).toFixed(2),
          date: '12.01.2021 15:01:00',
        },
      ];
  } catch { console.log(); }
}());
export default function listsReducer(state = prev, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
    //   def.push(payload);
      sessionStorage.setItem('test', JSON.stringify([...state, payload]));
      return [...state, payload];
    default:
      return state;
  }
}
