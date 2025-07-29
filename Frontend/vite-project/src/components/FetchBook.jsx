import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchBook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/book");
        setBook(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getBook();
  }, []);
  return book
}
