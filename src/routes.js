import { Router } from 'express';
import User from './app/models/User';
const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'deus eh top',
    email: 'gccinane@gmail.com',
    password_hash: '213354315d1345',
  });
  return res.json(user);
});

export default routes;
