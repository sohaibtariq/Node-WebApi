import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.jokes));
});

router.get('/:jokeId', (req, res) => {
  return res.send(req.context.models.jokes[req.params.jokeId]);
});

export default router;