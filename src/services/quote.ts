import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Quote } from "../types";

const url = "http://localhost:3000/dailyquote";
export const getQuote = async () => {
  const { data } = await axios.get<Quote[]>(url);
  return data;
};

export const useQuote = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: getQuote,
  });
};
