import axios from "axios";
import { get } from "./ProductSlice";
import { store } from "../../../store";

export function getAllProducts(){
  axios.get('json/zapato.json')
  .then(res => store.dispatch(get(res.data)))
  .catch(error => {throw new Error(error)})
}