import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import css from "./ItemsPage.module.css";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

// import css from "./ItemsPage.module.css";
export default function ItemsPage() {
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
  async function handleDelete(itemId) {
    console.log("delete", itemId);

    await deleteDoc(doc(db, "items", itemId));
    const updatedLocalItemsArr = localItemsArr.filter(
      (item) => item.id !== itemId
    );

    setLocalItemsArr(updatedLocalItemsArr);
  }

  useEffect(() => {
    getItemsFromFirebase();
    console.log("localItemsArr ===", localItemsArr);
  }, []);
  return (
    <div className="container">
      <h2 className={css.itemsPageTitle}>Store</h2>
      {localItemsArr.length === 0 ? (
        <div>
          <h2 className={css.noItems}>
            Sorry, at this moment all the items are closed :/
          </h2>
          <img
            className={css.noItemImg}
            src="https://media.istockphoto.com/id/1127624893/vector/store-closed.jpg?s=612x612&w=0&k=20&c=yY7qtwK9TYmaIlc-CEQxkPpdI4nswTHAAP1z7MopO-A="
            alt="Items are not found"
          />
        </div>
      ) : (
        <ul className={css.itemList}>
          {localItemsArr.map((sObj) => (
            <Link to={`/singleItem/${sObj.id}`} state={sObj}>
              <SingleItem
                id={sObj.id}
                itemName={sObj.itemName}
                description={sObj.description}
                address={sObj.address}
                price={sObj.price}
                imageUrl={sObj.imageUrl}
                type={sObj.type}
                maker={sObj.maker}
                year={sObj.year}
                model={sObj.model}
              />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
