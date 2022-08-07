import * as yup from 'yup';
import { password, username } from './schemas';

const LoginSchema = yup.object().shape({
  ...username,
  ...password,
});

export default LoginSchema;
