import basicAuth from 'express-basic-auth';
import { users } from '../constants/index.constants';

export default basicAuth({
  users,
  challenge: true,
});
