//import { useQuote } from "../services/quote";

const Card = () => {
  /*const { isPending, error, data } = useQuote();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: '

  const quote = data[0];*/

  const quote: string = "He who cheats the earth will be cheated by the earth.";

  const author: string = "Chinese Proverb";

  return (
    <div className="dark h-screen flex flex-col items-center justify-center font-playfair">
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        <div className="px-6 py-10">
          <blockquote>
            &ldquo;{quote}&rdquo;
            <footer className="text-right italic">&mdash; {author}</footer>
          </blockquote>
        </div>
      </div>
      <div>
        <p className="mt-10 hover:scale-110 transition duration-500 object-cover">
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
