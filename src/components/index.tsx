//import { useQuote } from "../services/quote";
import { useState, useEffect } from "react";

const Card = () => {
  const [darkMode, setDarkMode] = useState(false);
  /*const { isPending, error, data } = useQuote();
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: '

  const quote = data[0];*/

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const quote: string = "He who cheats the earth will be cheated by the earth.";

  const author: string = "Chinese Proverb";

  return (
    <div className="bg-white dark:bg-gray-800 h-screen flex flex-col items-center justify-center font-playfair">
      <label className="relative inline-flex items-center cursor-pointer pb-5">
        <input
          type="checkbox"
          value=""
          onClick={() => setDarkMode(!darkMode)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg dark:bg-gray-700	">
        <div className="px-6 py-10 dark:text-white">
          <blockquote>
            &ldquo;{quote}&rdquo;
            <footer className="text-right italic">&mdash; {author}</footer>
          </blockquote>
        </div>
      </div>
      <div>
        <p className="mt-10 dark:text-white">
          Inspirational quotes provided by{" "}
          <a
            className="underline underline-offset-4"
            href="https://zenquotes.io/"
            target="_blank"
          >
            ZenQuotes API
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
//peer-focus:ring-4 peer-focus:ring-blue-300
