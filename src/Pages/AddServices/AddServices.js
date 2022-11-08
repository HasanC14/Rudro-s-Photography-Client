import React from "react";

const AddServices = () => {
  return (
    <div>
      <section className="p-6  dark:text-gray-50 max-w-screen-xl mx-auto">
        <div>
          <p className="text-center text-4xl mb-10 font-bold text-gray-900">
            Add Your Custom Service
          </p>
        </div>
        <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
          <fieldset className="rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="title" className="text-2xl">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="w-full bg-gray-500 rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-800 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-2xl">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  className="w-full bg-gray-500 rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-800 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="image" className="text-2xl">
                  Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  name="image"
                  className="w-full bg-gray-500 rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-800 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="Description" className="text-2xl">
                  Description
                </label>
                <textarea
                  id="Description"
                  type="text"
                  name="description"
                  className="w-full bg-gray-500 rounded-md focus:ring focus:ring-opacity-75 focus:ring-gray-800 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" className="btn btn-ghost text-2xl">
            Add Service
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddServices;
