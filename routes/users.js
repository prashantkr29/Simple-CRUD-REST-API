import express from 'express';

import {getusers,postuser,finduser,deleteuser, updateuser} from '../controllers/users.js'

const router = express.Router();



router.get('/',getusers);

router.post('/',postuser);

router.get('/:id',finduser);

router.delete('/:id',deleteuser);

router.patch('/:id',updateuser)

export default router;