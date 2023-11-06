import { Link, useParams } from "react-router-dom";
import css from "./ItemsPage.module.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export default function SingleItem(props) {
  const [localItemsArr, setLocalItemsArr] = useState([]);

  async function getItemsFromFirebase() {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsBack = [];
      querySnapshot.forEach((item) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(item.id, " => ", item.data());
        itemsBack.push({
          id: item.id,
          ...item.data(),
        });
      });
      setLocalItemsArr(itemsBack);
    } catch (error) {
      console.log("something went wrong", error);
    }
  }

  useEffect(() => {
    getItemsFromFirebase();
    console.log("localItemsArr ===", localItemsArr);
  }, []);
  return (
    <li className={css.card} key={props.id}>
      {/* <Link to={`/singleItem/${sObj.id}`} state={sObj}> */}
      <div>
        <img className={css.itemImg} src={props.imageUrl} alt="Item picture" />
        <div className={css.itemInfo}>
          <h4 className={css.itemTitle}>
            {props.itemName} {props.model}
          </h4>
          <p className={css.about}>{props.description}</p>
          <div className={css.addressAndYear}>
            <p className={css.year}>€ {parseFloat(props.price).toFixed(2)}</p>
          </div>
        </div>
      </div>
      {/* </Link> */}
      <button
        className={css.deleteButton}
        onClick={() => handleDelete(props.id)}
      >
        Delete
      </button>
    </li>
  );
}
