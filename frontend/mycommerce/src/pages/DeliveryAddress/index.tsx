import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaAddress } from "../../utils/validationSchema";
import "./styles.css";

export const DeliveryAddress = () => {
  const sendAddress = () => {};

  return (
    <div className="container flex-main-div">
      <h3 className="title-h3">Endereço de entrega</h3>
      <div className="address-div-1">
        <Formik
          initialValues={{
            cep: "",
            neighborhood: "",
            city: "",
            state: "",
            addon: "",
          }}
          onSubmit={sendAddress}
          validationSchema={validationSchemaAddress}
        >
          <Form>
            <div className="title-div">
              <p className="title">Novo por aqui?</p>
            </div>
            <div>
              <Field
                name="cep"
                className="styled-input"
                type="text"
                placeholder="CEP"
              />
              <ErrorMessage
                name="cep"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="neighborhood"
                className="styled-input"
                type="text"
                placeholder="Bairro"
              />
              <ErrorMessage
                name="neighborhood"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="city"
                className="styled-input"
                type="text"
                placeholder="Cidade"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="state"
                className="styled-input"
                type="text"
                placeholder="Estado"
              />
              <ErrorMessage
                name="state"
                component="div"
                className="error-message"
              />
            </div>
            <div>
              <Field
                name="addon"
                className="styled-input"
                type="text"
                placeholder="Complemento"
              />
              <ErrorMessage
                name="addon"
                component="div"
                className="error-message"
              />
            </div>
          </Form>
        </Formik>
      </div>
      <div className="div-2">
        <div>
          <p>Subtotal: R$ 189,90</p>
          <p>Frete: R$ 10,00</p>
          <p>Total: R$ 199,90</p>
        </div>
        <button>Continuar</button>
      </div>
    </div>
  );
};
