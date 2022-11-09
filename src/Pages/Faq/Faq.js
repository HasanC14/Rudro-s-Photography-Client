import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="md:text-2xl text-lg dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 md:text-4xl text-2xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What types of photography do you do?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Some photographers do a little of everything. Others
                  specialize in one type of photography or another. The first
                  thing that people are going to want to know is what kind of
                  services you offer. If they're looking for a family
                  photographer or someone to do their son's senior portraits,
                  for example, they wouldn't want to work with a wedding
                  photographer.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Why should I hire a professional photographer?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  This is the million-dollar question. People want to know
                  exactly what it is that sets you apart and makes you worth
                  their time. This is your place to make it known. Explain all
                  the benefits of working with a professional, including the
                  fact that you won't have to worry about one of your family
                  members or friends missing out on whatever event is being
                  captured because they're the one manning the camera. Explain
                  that you have experience in producing high-quality images that
                  will last a lifetime and create wonderful memories and take
                  advantage of this opportunity to link to testimonials to seal
                  the deal.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Are deposits refundable?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  If you're like most professional photographers, you take a
                  deposit with each booking to provide a little security and
                  peace of mind. This holds people accountable and shows them
                  the value of your time. What happens, though, when there's an
                  emergency or something comes up that requires rescheduling or
                  cancellation? Do you keep deposits? Perhaps you only keep part
                  of them. People are going to want to know, regardless.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
