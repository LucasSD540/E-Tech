import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchemaAddress } from "../../utils/validationSchema";
import { useCreateOrderMutation } from "../../services/orderApi";
import { useCheckoutMutation } from "../../services/checkoutApi";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticatedQuery } from "../../services/authApi";
import { getSubTotal } from "../../store/slices/cartSlice";
import { formatPrice } from "../../utils/formatPrice";
import "./styles.css";

export const DeliveryAddress = () => {
  const navigate = useNavigate();
  const [checkout] = useCheckoutMutation();
  const [createOrder] = useCreateOrderMutation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { data, isLoading } = useIsAuthenticatedQuery({});
  const [cep, setCep] = useState("");
  const [timeValue, setTimeValue] = useState(0);
  const [shippingValue, setShippingValue] = useState<number>(0);
  const subTotal = useSelector(getSubTotal);

  useEffect(() => {
    const storedCep = localStorage.getItem("checkout_cep") || "";
    const storedTime = localStorage.getItem("checkout_time") || "0";
    const shippingValueCheckout =
      localStorage.getItem("checkout_shipping") || "0";
    setCep(storedCep);
    setTimeValue(Number(storedTime));
    setShippingValue(Number(shippingValueCheckout));
  }, []);

  const total = Number(shippingValue) + subTotal;

  const formatCartItems = () => {
    return cartItems.map((item) => ({
      product: item.product.cardProductId,
      quantity: item.product.quantity,
    }));
  };

  const handleOrder = async () => {
    return await createOrder({
      items: formatCartItems(),
    }).unwrap();
  };

  const handleCheckout = async (values: any) => {
    const cep = values.cep;

    if (!data && !isLoading) {
      navigate("/login");
    } else if (data && timeValue !== 0) {
      try {
        await handleOrder();

        const response = await checkout({
          items: formatCartItems(),
          cep_destino: cep,
        }).unwrap();
        if (response.checkout_url) {
          window.location.href = response.checkout_url;
        } else {
          alert("Erro ao criar sessão de pagamento!");
        }
      } catch (err) {
        console.log("Erro ao finalizar compra: ", err);
      }
    } else if (timeValue === 0) {
      alert("Para finalizar a compra calcule o frete digitando seu CEP");
    }
  };

  return (
    <div className="container flex-main-div">
      <Formik
        initialValues={{
          cep: cep,
          neighborhood: "",
          city: "",
          state: "",
          addon: "",
        }}
        onSubmit={handleCheckout}
        validationSchema={validationSchemaAddress}
      >
        {({ submitForm }) => (
          <>
            <div className="address-div-1">
              <h3 className="title-h3">Endereço de entrega</h3>
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
            </div>
            <div className="address-div-2">
              <div>
                <p>Subtotal: {formatPrice(subTotal)}</p>
                <p>Frete: {formatPrice(Number(shippingValue))}</p>
                <p>Total: {formatPrice(total)}</p>
              </div>
              <button type="button" onClick={submitForm}>
                Continuar
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};
