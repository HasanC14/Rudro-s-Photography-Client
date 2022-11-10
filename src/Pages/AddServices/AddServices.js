import swal from "sweetalert";
import { TabTitle } from "../../TitleChange";

const AddServices = () => {
  TabTitle("Add Service");
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;
    const img = form.image.value;
    const service = {
      title: title,
      img: img,
      price: price,
      description: description,
    };

    fetch("https://rudro-photography-server.vercel.app/AddService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then(() => {
        swal({
          title: "Service Added",
          button: "OK",
        });
        form.reset();
      });
  };
  return (
    <div>
      <section className="p-6  dark:text-gray-50 max-w-screen-xl mx-auto">
        <div>
          <p className="text-center text-4xl mb-10 font-bold text-gray-900">
            Add Your Custom Service
          </p>
        </div>
        <form
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={HandleForm}
        >
          <fieldset className="rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="title" className="text-2xl">
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
                <label htmlFor="email" className="text-2xl">
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
                <label htmlFor="image" className="text-2xl">
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
                <label htmlFor="Description" className="text-2xl">
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
