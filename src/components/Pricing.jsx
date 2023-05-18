// eslint-disable-next-line no-unused-vars
import React from "react";
import { Plans } from "./Plans";

const Pricing = () => {
  return (
    <>
      <div className="text-pane text-center">
        <h3 className="text-5xl font-bold text-white mb-4">
          Pricing Plans For Teams Of All Sizes
        </h3>
        <p className="blurb text-white text-lg mb-6">
          Choose an affordable cloud storage plan that is packed with the best
          features for secure file storage, seamless access, data encryption,
          and reliable customer support.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 text-white gap-12 lg:gap-8 py-12 px-4 sm:px-6 lg:px-8">
        {Plans.map((plan) => (
          <div
            key={plan.title}
            className="border border-slate-400 shadow-lg p-8 bg-black rounded-2xl relative flex flex-col"
          >
            <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute top-0 -translate-y-1/2 bg-blue-400 px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">
                MostPopular
              </p>
            )}
            <p className="mt-4 font-sm leading-6">{plan.description}</p>
            <div className="mt-4 bg-gray-700 p-6 -mx-4 rounded-lg">
              <p className="text-sm font-semibold flex items-center">
                <span>{plan.currency}</span>
                <span className="text-4xl ml-3 mr-1.5">${plan.price}</span>
                <span>{plan.frequency}</span>
              </p>
            </div>
            {/* Features */}
            <ul className="mt-6 space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center bg-gray-700 rounded-full">
                    <span className="h-4 w-4 bg-blue-400 rounded-full"></span>
                  </span>
                  <span className="ml-3 text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            {/* Call to action - cta */}
            <div className="mt-8">
              <a
                href="#"
                className="block w-full bg-blue-400 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-500"
              >
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
