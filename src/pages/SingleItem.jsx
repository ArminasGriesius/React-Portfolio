import { Link, useParams } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "../store/AuthProvider";
import css from "./SingleItem.module.css";
export default function SingleItem(props) {
  const [localItemsArr, setLocalItemsArr] = useState([]);

  const ctx = useAuth();

  async function getItemsFromFirebase() {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsBack = [];
      querySnapshot.forEach((item) => {
        itemsBack.push({
          id: item.id,
          ...item.data(),
        });
      });
      setLocalItemsArr(itemsBack);
    } catch (error) {}
  }

  useEffect(() => {
    getItemsFromFirebase();
  }, []);
  return (
    <li
      className={`${css.card} ${
        ctx.userUid === props.userUid ? css.myProduct : ""
      }`}
      key={props.id}
    >
      <div>
        <img className={css.itemImg} src={props.imageUrl} alt="Item picture" />
        <div className={css.itemInfo}>
          <h4 className={css.itemTitle}>
            {props.itemName} {props.model.substring(0, 8)}
          </h4>

          <p className={css.about}>
            {props.description.length > 50
              ? `${props.description.substring(0, 45)}...`
              : props.description}
          </p>
          <div className={css.itemPrice}>
            <p className={css.price}>€ {parseFloat(props.price).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
