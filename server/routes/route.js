import express from 'express';

const Router=express.Router();
import { userSignUp,userLogIn } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';
Router.post('/signup',userSignUp);
Router.post('/login',userLogIn);
Router.get('/products',getProducts);

export default Router;