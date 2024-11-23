export const Header = () => (
  <header className="flex justify-center items-center py-5 w-full xl:w-[1120px] mx-auto">
    <nav className="flex flex-row gap-x-10">
     <img
				className="h-8"
				src="src/assets/logoText.png"
				alt="logo"
			/>
      <a className="flex items-center font-semibold text-neutral" href="#product">Product</a>
      <a className="flex items-center font-semibold text-neutral" href="#clients">Clients</a>
      <a className="flex items-center font-semibold text-neutral" href="#about">About us</a>
      <a className="flex items-center font-semibold text-neutral" href="#contact">Contact</a>
    </nav>
  </header>
);
