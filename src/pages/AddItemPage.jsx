import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import css from "./AddItemPage.module.css";
import { useAuth } from "../store/AuthProvider";

export default function AddItemPage() {
  const ctx = useAuth();

  const initialValues = {
    itemName: "",
    type: "",
    description: "",
    price: "",
    address: "",
    imageUrl: "",
    maker: "",
    model: "",
    userUid: "",
  };

  const validationSchema = Yup.object({
    itemName: Yup.string()
      .min(3, "Item name is too short")
      .trim()
      .max(20, "Item name is too long")
      .required("Item name is required"),
    type: Yup.string()
      .required("Item type is required")
      .min(2, "Minimum 4 characters")
      .max(20, "Item type is too long")
      .trim(),
    description: Yup.string()
      .min(6, "Description is too short")
      .max(300, "Description is too long")
      .trim()
      .required("Description is required"),
    price: Yup.number()
      .min(0.01, "Nothing is free")
      .max(1000000, "Be realistic")
      .required("Price is required"),
    year: Yup.number()
      .min(1960, "No older than 1960")
      .max(2024, "No future items")
      .required("Year is required"),
    address: Yup.string()
      .required("address is required")
      .min(4, "Minimum 4 characters")
      .max(100, "Address is too long")
      .trim(),
    imageUrl: Yup.string()
      .required("Main Image URL is required")
      .max(200, "Image URL is too long")
      .url("Invalid URL"),
    maker: Yup.string()
      .required("Maker is required")
      .min(2, "Minimum 2 characters")
      .max(50, "Maker name is too long")
      .trim(),
    model: Yup.string()
      .required("Model is required")
      .min(1, "Minimum 1 characters")
      .max(50, "Model name is too long")
      .trim(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newAddItem = {
        ...values,
        userUid: ctx.userUid,
      };
      sendDataToFireBase(newAddItem);
    },
  });

  async function sendDataToFireBase(dataToSend) {
    try {
      const docRef = await addDoc(collection(db, "items"), dataToSend);
      toast.success("Item created");
      formik.resetForm();
    } catch (error) {
      toast.error("something went wrong", error);
    }
  }

  return (
    <div className={css.addItemPageContainer}>
      <h1 className={css.addItemPageTitle}>Add Item</h1>
      <p className={css.addItemPageText}>
        To add an item to the shop please fill the form below. Please note that
        all fields are required. Press submit button and your product will
        appear in the Store.
      </p>
      <section className={css.addItemPageSection}>
        <form onSubmit={formik.handleSubmit}>
          <div className={css.addItemFormBox}>
            <h2 className={css.addItemFormTitle}>Add Item</h2>
            <div>
              <label className={css.labels}>Item name</label>
              <input
                id="itemName"
                name="itemName"
                type="text"
                placeholder="Write new Item Name"
                onChange={formik.handleChange}
                value={formik.values.itemName}
              />
              {formik.errors.itemName && formik.touched.itemName && (
                <p className={css.error}>{formik.errors.itemName}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Item type</label>
              <input
                id="type"
                name="type"
                type="text"
                placeholder="Write the type of an item"
                onChange={formik.handleChange}
                value={formik.values.type}
              />
              {formik.errors.type && formik.touched.type && (
                <p className={css.error}>{formik.errors.type}</p>
              )}
            </div>
            <div className={css.labelsDescription}>
              <label className={css.labels}>Description</label>
              <textarea
                className={css.textareaField}
                id="description"
                name="description"
                type="text"
                placeholder="Describe your item"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description && (
                <p className={css.error}>{formik.errors.description}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Price</label>
              <input
                id="price"
                name="price"
                type="number"
                placeholder="Price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.errors.price && formik.touched.price && (
                <p className={css.error}>{formik.errors.price}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Year</label>
              <input
                id="year"
                name="year"
                type="number"
                placeholder="year"
                onChange={formik.handleChange}
                value={formik.values.year}
              />
              {formik.errors.year && formik.touched.year && (
                <p className={css.error}>{formik.errors.year}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Address</label>
              <input
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.errors.address && formik.touched.address && (
                <p className={css.error}>{formik.errors.address}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Item image</label>
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                placeholder="Image Url"
                onChange={formik.handleChange}
                value={formik.values.imageUrl}
              />
              {formik.errors.imageUrl && formik.touched.imageUrl && (
                <p className={css.error}>{formik.errors.imageUrl}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Item maker</label>
              <input
                id="maker"
                name="maker"
                type="text"
                placeholder="Maker"
                onChange={formik.handleChange}
                value={formik.values.maker}
              />
              {formik.errors.maker && formik.touched.maker && (
                <p className={css.error}>{formik.errors.maker}</p>
              )}
            </div>
            <div>
              <label className={css.labels}>Item model</label>
              <input
                id="model"
                name="model"
                type="text"
                placeholder="Model"
                onChange={formik.handleChange}
                value={formik.values.model}
              />
              {formik.errors.model && formik.touched.model && (
                <p className={css.error}>{formik.errors.model}</p>
              )}
            </div>
            <button className={css.submitButton} type="submit">
              Create your Item!!
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
