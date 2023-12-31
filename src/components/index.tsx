import { useQuote } from "../services/quote";

const Card = () => {
  const { isPending, error, data } = useQuote();

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: '

  const quote = data[0];

  return (
    <div>
      <h1>{quote.quote}</h1>
    </div>
    )
  }


export default Card;