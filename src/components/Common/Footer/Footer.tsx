export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div
        className="rounded-lg mx-auto flex items-center justify-between p-14"
      >
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90"
          >© {currentYear}
          <a href="https://factorialhr.es/" className="hover:underline"> Marku's Bike Shop</a>.
        </span>
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
        >
          <li>
            <a id="contact" href="mailto::markusbikeshop@gmail.com" className="hover:underline"
              >Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};