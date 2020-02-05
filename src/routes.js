import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alessandro Rodrigo',
    email: 'alessandro.perez@etec.sp.gov.br',
    password_hash: '123',
  });

  return res.json(user);
});

export default routes;
