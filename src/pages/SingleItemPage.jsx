import { Navigate, useLocation, useNavigate } from "react-router-dom";
import css from "./SingleItemPage.module.css";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function SingleItemPage() {
  const location = useLocation();
  const sObj = location.state;
  const [counter, setCounter] = useState(0);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  function countMinus() {
    if (counter <= 0) {
      setErrorMessageVisible(true);
      return;
    } else {
      setCounter(counter - 1);
      setErrorMessageVisible(false);
      setTotalPrice(parseFloat(sObj.price).toFixed(2) * (counter - 1));
    }
  }

  function countPlus() {
    setCounter(counter + 1);
    setErrorMessageVisible(false);
    setTotalPrice(parseFloat(sObj.price).toFixed(2) * (counter + 1));
  }

  async function handleDelete(itemId) {
    console.log("delete", itemId);

    await deleteDoc(doc(db, "items", itemId));
    navigate("/store");
  }

  return (
    <div className={css.singleItemContainer}>
      <div className={css.singleItemGrid}>
        <img
          className={css.singleItemImg}
          src={sObj.imageUrl}
          alt="Item picture"
        />
        <div className={css.singleItemInfo}>
          <div>
            <h2 className={css.singleItemName}>{sObj.itemName}</h2>
            <p>Item Id: {sObj.id}</p>
          </div>
          <div>
            <h4 className={css.singleItemPriceTitle}>Price</h4>
            <p className={css.singleItemPrice}>
              {parseFloat(sObj.price).toFixed(2)} €
            </p>
          </div>
          <div className={css.singleItemCart}>
            <div className={css.singleItemCountrContainer}>
              <button onClick={countMinus} className={css.singleItemCountBtn}>
                -
              </button>
              <p className={css.singleItemCounter}>{counter}</p>
              <button onClick={countPlus} className={css.singleItemCountBtn}>
                +
              </button>
            </div>
            <button className={css.singleItemCartBtn}>To Cart</button>
          </div>
          <div
            className={
              errorMessageVisible ? css.singleItemErrorAndTotalPrice : ""
            }
          >
            <p
              className={
                errorMessageVisible
                  ? css.singleItemShowError
                  : css.singleItemHideError
              }
            >
              Negative number not possible
            </p>
            <p className={css.singleItemTotalPrice}>Total : {totalPrice} €</p>
          </div>
        </div>
      </div>
      <div>
        <button
          className={css.deleteButton}
          onClick={() => handleDelete(sObj.id)}
        >
          Delete
        </button>
        <div>
          <h2 className={css.singleItemBottomTitle}>Product Information</h2>
        </div>
        <div className={css.singleItemBottomFlex}>
          <div>
            <h4 className={css.singleItemDescription}>Description</h4>
            <p> {sObj.description}</p>
            <ul>
              <li className={css.singleItemLi}> Type: {sObj.type}</li>
              <li className={css.singleItemLi}> Maker: {sObj.maker}</li>
              <li className={css.singleItemLi}> Model: {sObj.model}</li>
              <li className={css.singleItemLi}> Year: {sObj.year}</li>
            </ul>
          </div>
          <div>
            <h4>Find us At:</h4>
            <ul>
              <li className={css.singleItemLi}>{sObj.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
