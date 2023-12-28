import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import css from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function RegisterPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .min(4, "Password must be at least 4 characters")
        .max(255)
        .required("password is required"),
    }),
    onSubmit: (values) => {},
  });

  const auth = getAuth();
  const registerWithFirebase = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/store", { replace: true });
        toast.success("Successfully registered, welcome!");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          toast.error("Email already exist");
        }
        toast.error("Invalid email");
      });
  };
  return (
    <div className={css.registerContainer}>
      <h2 className={css.registerPageTitle}>Register</h2>
      <section className={css.registerSection}>
        <div className={css.registerPageText}>
          <h4>
            Want to become a member? <br /> Create an account and be able to:
          </h4>
          <ul>
            <li>
              <p>Create your own item</p>
            </li>
            <li>
              <p>Manage your items</p>
            </li>
          </ul>
        </div>
        <form className={css.registerFormBox} onSubmit={formik.handleSubmit}>
          <h4 className={css.registerFormTitle}>Register Here</h4>
          <div>
            <label className={css.labels}>Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email here"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={css.error}>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label className={css.labels}>Your password</label>
            <input
              type="password"
              id="password"
              placeholder="Password here"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={css.error}>{formik.errors.password}</p>
            )}
          </div>
          <button
            className={css.registerSubmitButton}
            type="submit"
            onClick={() =>
              registerWithFirebase(formik.values.email, formik.values.password)
            }
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
