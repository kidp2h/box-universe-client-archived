import * as yup from 'yup';
import { message } from './message';

export const password = {
  password: yup.string().required(message.required).min(6, message.min(6)),
};

export const username = {
  username: yup.string().required(message.required).min(6, message.min(6)).max(15, message.max(15)),
};

export const confirm = {
  confirm: yup
    .string()
    .required(message.required)
    .oneOf([yup.ref('password'), null], message.confirm),
};

export const email = {
  email: yup.string().required(message.required).email(message.email),
};
