import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddNew.css";
import { v4 as uuidv4 } from "uuid";
function AddNew({ parentAddCallback }) {
  return (
    <Formik
      initialValues={{
        transaction: "expense",
        name: "",
        amount: "",
        cathegory: "Home",
        id: null
      }}
      validationSchema={Yup.object({
        transaction: Yup.string().required("Required"),
        name: Yup.string().required("State the name of the transaction"),
        amount: Yup.number().required("Amount is required").positive(),
        cathegory: Yup.string().required("Required")
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          values.id = uuidv4();
          // send the data to the parent component
          parentAddCallback(values);
          // reset the form to prevent adding multiple items with the same id
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <h3 className="form__heading">Add new</h3>
        <div role="group" name="transaction" className="radio__container">
          <label htmlFor="transaction" className="radio__description">
            Transaction type
          </label>
          <div className="radio__selection">
            <Field
              name="transaction"
              type="radio"
              value="expense"
              id="transaction-expense"
            />
            <label htmlFor="transaction-expense"> Expense</label>
          </div>
          <div className="radio__selection">
            <Field
              name="transaction"
              type="radio"
              value="income"
              id="transaction-income"
            />
            <label htmlFor="transaction-income"> Income</label>
            <ErrorMessage name="type" />
          </div>
        </div>

        <label htmlFor="name" className="form__description">
          Name
        </label>
        <Field className="form__input" name="name" id="name" type="text" />
        <div className="form__error">
          <ErrorMessage name="name" />
        </div>

        <label htmlFor="amount" className="form__description">
          Amount
        </label>
        <Field
          className="form__input"
          name="amount"
          id="amount"
          type="number"
        />
        <div className="form__error">
          <ErrorMessage className="form__error" name="amount" />
        </div>
        <label htmlFor="cathegory" className="form__description">
          Cathegory
        </label>
        <Field
          className="form__select"
          as="select"
          name="cathegory"
          id="cathegory"
        >
          <option value="Home">Home</option>
          <option value="Food">Food</option>
          <option value="Car">Car</option>
          <option value="Fun">Fun</option>
          <option value="Salary">Salary</option>
        </Field>
        <div className="button__container">
          <button className="form__button" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default AddNew;
