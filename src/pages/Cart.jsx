import React, { useEffect, useState } from "react";
import { useAuth } from "../store/AuthProvider";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import css from "./Cart.module.css";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const [localCartArr, setLocalCartArr] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountCodeValid, setIsDiscountCodeValid] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const ctx = useAuth();

  const userId = ctx.userUid || localStorage.getItem("localUserId");

  async function getItemsFromFirebase() {
    if (!userId) {
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, `cart_${userId}`));
      const itemsBack = [];
      querySnapshot.forEach((item) => {
        itemsBack.push({
          id: item.id,
          ...item.data(),
        });
      });
      setLocalCartArr(itemsBack);
      console.log("Discount code - Intern");
    } catch (error) {}
  }

  function handleDiscount() {
    const discountAmount = discountCode === "Intern" ? 0.8 : 1;
    const discountedTotalPrice = totalPrice * discountAmount;
    return discountedTotalPrice;
  }

  async function countMinus(itemId) {
    const item = localCartArr.find((item) => item.id === itemId);
    if (item.quantity === 1) {
      await deleteDoc(doc(db, `cart_${userId}`, itemId));
      toast.success("Item deleted from Cart");
      getItemsFromFirebase();

      return;
    } else {
      const updatedCart = localCartArr.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
      setLocalCartArr(updatedCart);
    }
  }

  function countPlus(itemId) {
    const updatedCart = localCartArr.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setLocalCartArr(updatedCart);
  }

  function handleDiscountCodeChange(event) {
    setDiscountCode(event.target.value);

    setIsDiscountCodeValid(true);

    if (event.target.value !== "Intern") {
      setIsDiscountCodeValid(false);
    }
  }

  useEffect(() => {
    if (userId) {
      getItemsFromFirebase();
    }
  }, [userId]);

  useEffect(() => {
    let newTotalPrice = 0;
    let newTotalItems = 0;

    localCartArr.forEach((sObj) => {
      newTotalPrice += sObj.quantity * sObj.price;
      newTotalItems += sObj.quantity;
    });

    setTotalPrice(newTotalPrice);
    setTotalItems(newTotalItems);
  }, [localCartArr]);

  useEffect(() => {
    if (discountCode === "Intern") {
      toast.success("Discount added");
    }
  }, [discountCode]);

  return (
    <div>
      <h2 className={css.cartPageTitle}>Cart</h2>
      <section className={css.cartList}>
        <div className={css.flexCartAndPay}>
          <div
            className={`${css.cartItemFlexHeadlines} ${
              localCartArr.length === 0 ? css.emptyCartItemFlex : ""
            }`}
          >
            <p>Image</p>
            <p>Product Name</p>
            <p>Model</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total price</p>
          </div>
          {localCartArr.length > 0 ? (
            localCartArr.map((sObj) => (
              <div className={css.cartItemFlex} key={sObj.id}>
                <img
                  className={css.cartItemImg}
                  src={sObj.imageUrl}
                  alt="Product image"
                />
                <h4>{sObj.itemName}</h4>
                <h5>{sObj.model}</h5>
                <div>
                  <p className={css.responsiveProductsHeadlines}>Price</p>
                  <p>{sObj.price} €</p>
                </div>
                <div>
                  <p className={css.responsiveProductsHeadlines}>Quantity</p>
                  <div className={css.cartQuantity}>
                    <p>{sObj.quantity}</p>
                    <button onClick={() => countPlus(sObj.id)}>+</button>
                    <button onClick={() => countMinus(sObj.id)}>-</button>
                  </div>
                </div>
                <div>
                  <p className={css.responsiveProductsHeadlines}>Total price</p>
                  <p>{sObj.quantity * sObj.price} €</p>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p> No items in the cart </p>
              <img
                src="https://static.thenounproject.com/png/4440881-200.png"
                alt="No items found"
              />
            </div>
          )}
          {localCartArr.length > 0 ? (
            localCartArr.map((sObj) => (
              <div className={css.lowResCartItems} key={sObj.id}>
                <div className={css.productImgAndName}>
                  <img
                    className={css.cartItemImg}
                    src={sObj.imageUrl}
                    alt="Product image"
                  />
                  <div className={css.nameAndModel}>
                    <h4>{sObj.itemName}</h4>
                    <h5>{sObj.model}</h5>
                  </div>
                </div>
                <div className={css.productPriceAndQuantity}>
                  <div>
                    <p className={css.responsiveProductsHeadlines}>Price</p>
                    <p>{sObj.price} €</p>
                  </div>
                  <div>
                    <p className={css.responsiveProductsHeadlines}>Quantity</p>
                    <div className={css.cartQuantity}>
                      <p>{sObj.quantity}</p>
                      <button onClick={() => countPlus(sObj.id)}>+</button>
                      <button onClick={() => countMinus(sObj.id)}>-</button>
                    </div>
                  </div>
                  <div>
                    <p className={css.responsiveProductsHeadlines}>
                      Total price
                    </p>
                    <p>{sObj.quantity * sObj.price} €</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div
            className={`${css.cartPay} ${
              localCartArr.length === 0 ? css.emptyCartItemFlex : ""
            }`}
          >
            <h4 className={css.cartSummary}>Order Summary</h4>
            <form>
              <input
                className={css.discountField}
                onChange={handleDiscountCodeChange}
                type="text"
                placeholder="Have a discount code?"
              />
            </form>
            {!isDiscountCodeValid && (
              <p className={css.codeNotValid}>Discount code does not exist</p>
            )}
            <div className={css.cartPayFlex}>
              <p>Price:</p>
              <p>{totalPrice} €</p>
            </div>
            <div className={css.cartPayFlex}>
              <p>Total Items:</p>
              <p>{totalItems}</p>
            </div>
            <div className={css.cartPayFlex}>
              <p>Estimated shipping:</p>
              <p>FREE</p>
            </div>
            <div className={css.grandTotalPrice}>
              {discountCode === "Intern" && (
                <div className={css.cartPayFlex}>
                  <p className={css.discounted}>Discount for interns(20%):</p>
                  <p className={css.discounted}>
                    -{(totalPrice * 0.2).toFixed(2)} €
                  </p>
                </div>
              )}
              <div className={css.cartPayFlex}>
                <h4>Order Grand Total:</h4>
                <p>{handleDiscount().toFixed(2)} €</p>
              </div>
            </div>
            <NavLink className={css.checkoutButton} to="/checkout">
              Proceed to checkout
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
