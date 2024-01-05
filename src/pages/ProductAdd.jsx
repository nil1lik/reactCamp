import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";


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
          <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}