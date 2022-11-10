import React from "react";
import { TabTitle } from "../../TitleChange";

const Blog = ({ title }) => {
  if (!title) {
    TabTitle("Blog");
  }
  return (
    <div className="md:mb-20 max-w-screen-xl mx-auto ">
      <div className="md:mb-12 md:mt-10">
        <p className="md:text-6xl text-3xl text-center text-white font-bold">
          Blog
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-10">
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:text-gray-100 flex justify-center items-center">
          <article>
            <h2 className="text-xl font-bold">
              Difference between SQL and NoSQL
            </h2>
            <p className="mt-4 dark:text-gray-400">
              SQL databases are efficient at processing queries and joining data
              across tables, making it easier to perform complex queries against
              structured data, including ad hoc requests. NoSQL databases lack
              consistency across products and typically require more work to
              query data, particular as query complexity increases.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is JWT, and how does it work?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key. User's Client
              uses the JWT to access protected resources by passing the JWT in
              HTTP Authorization header. Resource server then verifies the
              authenticity of the token using the secret salt/ public key.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is the difference between javascript and NodeJS?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-800 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
