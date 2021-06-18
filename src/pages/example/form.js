/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from "components/common/Forms/Button";
import css from "styles/pages/example/form.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Example2 = Yup.object().shape({
  toggle: Yup.boolean().required("Required.").oneOf([true], "Must select!"),
  checked: Yup.array()
    .min(1, "Atleast One!")
    .max(2, "Not more than Two!")
    .required("Required"),
});

const Example3 = Yup.object().shape({
  users: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().min(4, 'too short').required('Required'), // these constraints take precedence
        age: Yup.string().min(3, 'cmon').required('Required'), // these constraints take precedence
      })
    )
    .required('Must have users') // these constraints are shown if and only if inner constraints are satisfied
    .min(3, 'Minimum of 3 users'),
});

const Home = () => (
  <div className={`px-4 sm:px-6 ${css.layout}`}>
    <h4 className="text-center">Forms</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting }) => {
          // onSubmit is also async
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col w-full mt-0">
            <div className="ipnut-wrapper">
              <label className="mb-2 inline-block">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="input-control rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="input-error"
              />
            </div>
            <div className="input-wrapper">
              <label className="mb-2 inline-block">Password</label>
              <Field
                type="password"
                name="password"
                className="input-control rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="input-error"
              />
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>

      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        validationSchema={Example2}
        onSubmit={(values, { setSubmitting }) => {
          // onSubmit is also async
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className="mt-0">
            <div className="ipnut-wrapper">
              <Field type="checkbox" name="toggle" />
              <label className="pl-2 inline-block">Check this</label>
              <ErrorMessage
                name="toggle"
                component="div"
                className="input-error"
              />
            </div>
            <div className="input-wrapper">
              <label className="inline-block">Checked</label>
              <div className="flex flex-row">
                <label className="mr-2">
                  <Field type="checkbox" name="checked" value="One" className="p-1" />
                  <span className="pl-1">One</span>
                </label>
                <label className="mr-2">
                  <Field type="checkbox" name="checked" value="Two" className="p-1" />
                  <span className="pl-1">Two</span>
                </label>
                <label className="mr-2">
                  <Field type="checkbox" name="checked" value="Three" className="p-1" />
                  <span className="pl-1">Three</span>
                </label>
              </div>
              <ErrorMessage
                name="checked"
                component="div"
                className="input-error"
              />
            </div>

            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>

    </div>
  </div>
);

export default Home;
