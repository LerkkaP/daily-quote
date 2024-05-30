import axios from "axios";
import { Quote } from "../types";

const url = "http://localhost:3000/quote";
export const getQuote = async () => {
  const { data } = await axios.get<Quote[]>(url);
  return data;
};
