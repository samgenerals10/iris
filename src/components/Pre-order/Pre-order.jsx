import React from "react";
import "../Pre-order/Pre-order.css";
import PreOrder from "../PreOrder/PreOrder";
import { Button } from 'react-bootstrap';

function Preorder() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="button-Box">
        <button  className="preOrde" onClick={() => setModalShow(true)}>
          Pre-order now
        </button>
      </div>

      <PreOrder show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Preorder;
