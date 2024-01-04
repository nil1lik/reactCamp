import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, FormField } from "semantic-ui-react";
export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 0 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı boş geçilemez."),
    unitPrice: Yup.number().required("Ürün fiyatı boş geçilemez."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="productName" placeholder="Ürün adı"></Field>
          </FormField>
          <FormField>
            <Field name="unitPrice" placeholder="Ürün fiyatı"></Field>
          </FormField>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
