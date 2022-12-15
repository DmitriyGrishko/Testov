import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';
import { addItemThunk } from '../../Redux/actions/itemsAction';

function Example(args) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [priceFlag, setPriceFlag] = useState(false);
  const [titleFlag, setTitleFlag] = useState(false);
  const [dateFlag, setDateFlag] = useState(false);

  const toggle = () => {
    setPriceFlag(false);
    setTitleFlag(false);
    setDateFlag(false);
    return setModal(!modal);
  };
  return (
    <div>
      <Button color="danger" onClick={toggle} style={{ display: 'block', margin: '30px auto' }}>
        New item
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} centered="true">
        <ModalHeader toggle={toggle}>New item</ModalHeader>
        <ModalBody>
          <form
            id="form"
            className="form-vpn__form"
            style={{
              display: 'flex', flexWrap: 'wrap', alignContent: 'center', flexDirection: 'column',
            }}
            onSubmit={(e) => {
              e.preventDefault();
              const inputs = Object.fromEntries(new FormData(e.target));
              inputs.price = parseFloat(inputs.price).toFixed(2);
              const tmp = moment(inputs.date, 'DD.MM.YYYY hh:mm:ss', true).isValid();
              if (inputs.price < 0 || Number.isNaN(inputs.price)) setPriceFlag(true);
              if (!inputs.title) setTitleFlag(true);
              if (!inputs.date || !tmp) setDateFlag(true);
              if (inputs.title && inputs.price && inputs.date && inputs.price >= 0 && tmp) {
                dispatch(addItemThunk(inputs));
                toggle();
              } else if (inputs.price < 0) setPriceFlag(true);
            }}
          >
            <div>
              <p>Title</p>
              <input type="text" placeholder="Title" name="title" />
              {titleFlag && <p style={{ color: 'red' }}>Invalid title</p> }

            </div>
            <div>
              <p>Price</p>
              <input type="text" placeholder="Price" name="price" />
              {priceFlag && <p style={{ color: 'red' }}>Invalid price</p> }
            </div>
            <div>
              <p>Date and time</p>
              <input type="text" placeholder="Date and time" name="date" />
              {dateFlag && <p style={{ color: 'red' }}>Invalid date time</p> }
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
          <Button color="primary" type="submit" form="form">
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
