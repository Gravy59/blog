import quotes from "@/app/quotes.json";

export function QuoteOfTheDay() {
  const qotd = quotes[new Date().getDay()];
  return (
    <div className="prose">
      <blockquote>
        <p>{qotd.body}</p>
        <footer>
          —{qotd.author}
          {qotd.cite && (
            <>
              {", "}
              <cite>{qotd.cite}</cite>
            </>
          )}
        </footer>
      </blockquote>
    </div>
  );
}
