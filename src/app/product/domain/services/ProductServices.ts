import axios from "axios";
import { getShoes, getShoe, addToShoppingCar } from "./ProductSlice";
import { store } from "../../../store";

export function getAllProducts(){
  axios.get('/json/zapatos.json')
  .then(res => store.dispatch(getShoes(res.data)))
  .catch(error => {throw new Error(error)})
}
export function getProduct(){
  axios.get('/json/zapato.json')
  .then(res => store.dispatch(getShoe(res.data)))
  .catch(error => {throw new Error(error)})
}

export function addProduct(value: number){
  store.dispatch(addToShoppingCar(value));
}