export const Clients = () => {
  return (
    <div  id="clients" className="bg-gray-100 p-32">      
      <div className="flex flex-col">
        <h1 className="text-4xl text-center font-semibold text-gray-700">More than <span className="text-gray-600">11,000</span> clients have trusted in Mike's Bike Shop</h1>

        <div className="flex flex-row justify-center mt-14">
          <div className="flex flex-row bg-white rounded-xl shadow-lg">
            <img
              className="h-96 rounded-l-xl"
              src="src/assets/barackObama.jpg"
              alt="logo"
            />
            <div className="p-12">
              <blockquote className="p-4 w-96 my-4 border-s-4 border-gray-300 bg-gray-50">
                  <p className="text-xl italic font-medium leading-relaxed text-gray-900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a feugiat justo. Aenean quis eros a massa <span className="text-co-main">Factorial</span> iaculis porta. Nunc nec mollis sapien.
                  Praesent tristique metus at ante semper placerat.
                  </p>
              </blockquote>
              <p className="text-gray-500 font-semibold">Barack Obama</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};