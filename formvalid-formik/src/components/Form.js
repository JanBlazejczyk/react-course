import { useFormik } from "formik";
import "./styles.css";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "We need your email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.bio) {
    errors.bio = "Let us know something about you";
  }

  if (!values.gender) {
    errors.gender = "Please state your gender";
  }

  if (!values.terms) {
    errors.terms = "Please accept the terms";
  }

  return errors;
};

function MyForm() {
  const formik = useFormik({
    initialValues: {
      display: "form",
      name: "",
      email: "",
      gender: "",
      bio: "",
      terms: false
    },
    validate,
    onSubmit: async (values) => {
      await new Promise((resolve) => resolve((values.display = "message")));
    }
  });

  if (formik.values.display === "form") {
    return (
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form__name"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          style={{
            border:
              !formik.touched.name || !formik.errors.name
                ? "grey 1px solid"
                : "red 1px solid"
          }}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error__container">{formik.errors.name}</div>
        ) : null}

        <input
          type="text"
          placeholder="E-mail"
          className="form__email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            border:
              !formik.touched.email || !formik.errors.email
                ? "grey 1px solid"
                : "red 1px solid"
          }}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="error__container">{formik.errors.email}</div>
        ) : null}

        <textarea
          placeholder="Bio"
          className="form__bio"
          name="bio"
          id="bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
          style={{
            border:
              !formik.touched.bio || !formik.errors.bio
                ? "grey 1px solid"
                : "red 1px solid"
          }}
        />

        {formik.touched.bio && formik.errors.bio ? (
          <div className="error__container">{formik.errors.bio}</div>
        ) : null}

        <div
          className="form__gender--container"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gender}
          name="gender"
          id="gender"
        >
          <input
            type="radio"
            name="gender"
            value="male"
            id="gender-male"
            className="form__radio"
          />
          <label htmlFor="gender-male" className="form__label--gender-male">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="gender-female"
            className="form__radio"
          />
          <label htmlFor="gender-female" className="form__label--gender-female">
            Female
          </label>
          <input
            type="radio"
            value="other"
            id="gender-other"
            name="gender"
            className="form__radio"
          />
          <label htmlFor="gender-other" className="form__label--gender-other">
            Other
          </label>
        </div>

        {formik.touched.gender && formik.errors.gender ? (
          <div className="error__container">{formik.errors.gender}</div>
        ) : null}

        <div className="form__clause--container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="form__checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.terms}
          />
          <label htmlFor="terms" className="form__label--clause">
            I accept the terms
          </label>
        </div>

        {formik.touched.terms && formik.errors.terms ? (
          <div className="error__container">{formik.errors.terms}</div>
        ) : null}

        <div className="form__submit--container">
          <button type="submit" className="form__submit">
            Submit
          </button>
        </div>
      </form>
    );
  } else if (formik.values.display === "message") {
    return (
      <div>
        <h2>Thank you for submitting</h2>
      </div>
    );
  }
}

export default MyForm;
