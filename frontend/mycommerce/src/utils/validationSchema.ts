import * as Yup from "yup";

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Digite sua senha"),
});

export const validationSchemaRegister = Yup.object({
  firstName: Yup.string().required("Campo obrigatório"),
  lastName: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas não coincidem")
    .required("Confirmação de senha é obrigatória"),
});
