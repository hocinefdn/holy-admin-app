import { CheckIcon } from "@heroicons/react/20/solid";
import { Paper } from "@mui/material";

const SubscriptionPrice = ({ includedFeatures, tariff, name, oldTariff }) => {
  return (
    <div className="p-5 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
      <div className=" mx-4 shadow-lg shadow-red-500 rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10 ">
        <div className="mx-5 max-w-xs px-4">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h3>
          <p className="mt-1 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              {tariff}
            </span>
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
              DA/mois
            </span>
          </p>{" "}
          {oldTariff ? (
            <p className="mt-1 flex items-baseline justify-center gap-x-2 text-gray-400 line-through ">
              <span className="text-2xl font-bold tracking-tight ">
                {oldTariff}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide ">
                DA/mois
              </span>
            </p>
          ) : (
            ""
          )}
          <div className="mt-1 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-red-500">
              Ce qui est inclu
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul className="mt-2  text-sm leading-6 text-gray-600">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-green-500"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="/"
            className="mt-10 block w-full rounded-md bg-red-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Obtenir l'accès
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPrice;
