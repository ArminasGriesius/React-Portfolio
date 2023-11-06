import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { db } from "../firebase/firebase";
import { toast } from "react-hot-toast";
import css from "./AddItemPage.module.css";

export default function AddItemPage() {
  const initialValues = {
    itemName: "",
    type: "",
    description: "",
    price: "",
    address: "",
    imageUrl: "",
    maker: "",
    model: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    itemName: Yup.string()
      .min(4, "Item name is too short")
      .trim()
      .max(255)
      .required("Item name is required"),
    type: Yup.string()
      .required("Item type is required")
      .min(4, "Minimum 4 characters")
      .trim(),
    description: Yup.string()
      .min(6, "Description is too short")
      .trim()
      .required("Description is required"),
    price: Yup.number()
      .min(0.01, "Nothing is free")
      .max(1000000, "Be realistic")
      // .integer("Price must be an integer")
      .required("Price is required"),
    year: Yup.number()
      .min(1990, "No older than 1990")
      .max(2023, "No future items")
      // .integer("Price must be an integer")
      .required("Year is required"),
    address: Yup.string()
      .required("address is required")
      .min(4, "Minimum 4 characters")
      .trim(),
    imageUrl: Yup.string()
      .required("Main Image URL is required")
      .url("Invalid URL"),
    maker: Yup.string()
      .required("Maker is required")
      .min(4, "Minimum 4 characters")
      .trim(),
    model: Yup.string()
      .required("Model is required")
      .min(4, "Minimum 4 characters")
      .trim(),
  });

  // Formik configuration
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      // console.log('Form submitted with values:', values);
      const newAddItem = {
        ...values,
        // userUid: ctx.userUid,
      };
      console.log("newAddObjWithUid ===", newAddItem);
      sendDataToFireBase(newAddItem);
    },
  });
  console.log("formik.errors ===", formik.errors);

  async function sendDataToFireBase(dataToSend) {
    console.log("creating");
    try {
      const docRef = await addDoc(collection(db, "items"), dataToSend);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Item created");
      formik.resetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("something went wrong");
    }
  }

  return (
    <div className="container">
      <h1 className={css.addItemPageTitle}>Add Item</h1>
      <div className={css.addItemPageContainer}>
        <div className={css.instructions}>
          <h4>How to create a Item? Follow instructions below: </h4>
          <ul>
            <li>
              <p>Enter your item Name, must be at least 4 characters.</p>
            </li>
            <li>
              <p>Writre a short description of your item.</p>
            </li>
            <li>
              <p>
                Enter a year your item was opened. Note: items older than 1970
                are not allowed here.
              </p>
            </li>
            <li>
              <p>Enter the name of a address your item was founded.</p>
            </li>
            <li>
              <p>Input the URL of your item. Note: must be a valid URL.</p>
            </li>
            <li>
              <p>Press 'Create your item!!' button</p>
            </li>
          </ul>
          <p>
            And if you followed these instructions correctly, CONGRADULATIONS!!
          </p>
        </div>
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
            <div>
              <label className={css.labels}>Description</label>
              <textarea
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
      </div>
    </div>
  );
}
