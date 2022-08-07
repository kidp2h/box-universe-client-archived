import * as yup from 'yup';
import { confirm, email, password, username } from './schemas';

const RegisterSchema = yup.object().shape({
  ...username,
  ...email,
  ...password,
  ...confirm,
});

export default RegisterSchema;
