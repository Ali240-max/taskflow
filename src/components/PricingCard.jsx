import { Check } from "lucide-react";

function PricingCard({ obj }) {
  return (
    <div className=" border-hb500 rounded-2xl py-7 px-8 shadow-lg transform hover:scale-105 transition duration-300 border-3 w-100 min-h-155 flex flex-col justify-between relative max-sm:w-80 justify- ">
      {obj.popular && (
        <button
          className={`bg-gradient-to-br from-pc500 to-bg500 absolute top-[-20px] left-1/2 -translate-x-1/2  text-white py-2 px-4 rounded-full w-40  `}
        >
          Most Popular
        </button>
      )}

      <div>
        <div className="flex flex-col items-center gap-3 justify-center mb-5">
          <div className="bg-gradient-to-br from-pc500 to-bg500 w-16 h-16 flex items-center justify-center rounded-2xl text-white">
            {obj.icon}
          </div>
          <h1 className="text-2xl text-fb500 font-bold">{obj.name}</h1>
          <p className="text-sm text-mb400">{obj.description}</p>
          <p>
            <span className="text-fb500 text-4xl font-bold">${obj.price}</span>
            <span className="text-mb400">/{obj.period}</span>
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {obj.features.map((feature, index) => (
            <li key={index} className="flex gap-2">
              <div className="bg-gradient-to-br from-pc500 to-bg500 w-5 h-5 flex items-center justify-center rounded-full">
                <Check className="w-3 h-3 text-white" />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center mt-5 ">
        <button
          className={`text-white  py-3 px-5 rounded-lg cursor-pointer  transition duration-200 transform hover:scale-105 ease-in-out flex items-center gap-2 text-lg shadow-lg ${obj.buttonClass}`}
        >
          {obj.btnText}
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
