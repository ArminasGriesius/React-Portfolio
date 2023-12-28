import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import css from "./ItemsPage.module.css";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";
import { useAuth } from "../store/AuthProvider";
import toast from "react-hot-toast";

export default function ItemsPage() {
  const [localItemsArr, setLocalItemsArr] = useState([]);
  const [sortedItems, setSortedItems] = useState(localItemsArr);

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
      setSortedItems(itemsBack);
    } catch (error) {}
  }

  function handleSort(sortBy) {
    let sortedArray;

    switch (sortBy) {
      case "name":
        sortedArray = localItemsArr
          .slice()
          .sort((a, b) => a.itemName.localeCompare(b.itemName));
        toast.success("Sorted by Name");
        break;
      case "oldToNew":
        sortedArray = localItemsArr.slice().sort((a, b) => a.year - b.year);
        toast.success("Sorted from oldest to newest");

        break;
      case "newToOld":
        sortedArray = localItemsArr.slice().sort((a, b) => b.year - a.year);
        toast.success("Sorted from newest to oldest");

        break;
      case "price":
        sortedArray = localItemsArr.slice().sort((a, b) => a.price - b.price);
        toast.success("Sorted by price");

        break;
      default:
        sortedArray = localItemsArr;

        break;
    }

    setSortedItems(sortedArray);
  }

  function handleFilter(sortBy) {
    let filteredArray;

    switch (sortBy) {
      case "1":
        filteredArray = localItemsArr.filter((sObj) => sObj.price < 50);
        toast.success("Products <50€");
        break;
      case "2":
        filteredArray = localItemsArr.filter(
          (sObj) => sObj.price > 50 && sObj.price < 100
        );
        toast.success("Products from 50€ to 100€");

        break;
      case "3":
        filteredArray = localItemsArr.filter(
          (sObj) => sObj.price >= 100 && sObj.price < 300
        );
        toast.success("Products from 100€ to 300€");

        break;
      case "4":
        filteredArray = localItemsArr.filter(
          (sObj) => sObj.price >= 300 && sObj.price < 500
        );
        toast.success("Products from 300€ to 500€");

        break;
      case "5":
        filteredArray = localItemsArr.filter(
          (sObj) => sObj.price >= 500 && sObj.price < 1000
        );
        toast.success("Products from 500€ to 900€");

        break;
      case "6":
        filteredArray = localItemsArr.filter((sObj) => sObj.price >= 1000);
        toast.success("Products 1000€>");

        break;

      default:
        filteredArray = localItemsArr;
        break;
    }

    setSortedItems(filteredArray);
  }

  useEffect(() => {
    getItemsFromFirebase();
    console.log("localItemsArr ===", localItemsArr);
    console.log("sortedItems ===", sortedItems);
  }, []);
  return (
    <div className={css.itemsPageContainer}>
      <h2 className={css.itemsPageTitle}>Store</h2>
      {localItemsArr.length === 0 ? (
        <div>
          <h2 className={css.noItems}>
            Sorry, no items available at current time.
          </h2>
          <img
            className={css.noItemImg}
            src="https://static.thenounproject.com/png/4440881-200.png"
            alt="Items are not found"
          />
        </div>
      ) : (
        <div>
          <section className={css.filters}>
            <div>
              <p>Price: </p>

              <select
                className={css.selectBox}
                name="sort"
                id="sort"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value={null}> Default </option>
                <option value={1}> &lt;50€ </option>
                <option value={2}>From 50€ to 100€</option>
                <option value={3}>From 100€ to 300€</option>
                <option value={4}>From 300€ to 500€</option>
                <option value={5}>From 500€ to 999€</option>
                <option value={6}>1000€&gt;</option>
              </select>
            </div>
            <div>
              <p>Filter by: </p>
              <select
                className={css.selectBox}
                name="sort"
                id="sort"
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value="default" disabled>
                  Filter by:
                </option>
                <option value="default">Default</option>
                <option value="name">Name</option>
                <option value="oldToNew">From oldest to newest</option>
                <option value="newToOld">From newest to oldest</option>
                <option value="price">Price</option>
              </select>
            </div>
          </section>
          <ul className={css.itemList}>
            {sortedItems.map((sObj) => (
              <Link key={sObj.id} to={`/singleItem/${sObj.id}`} state={sObj}>
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
                  userUid={sObj.userUid}
                />
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
