import React from "react";

import Quote from "./quote";

function TestimonialClassicGrid() {
  return (
    <div className="p-10 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-center text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white font-semibold">
            Client Testimonials
          </p>
          <div className="md:w-[500px] lg:w-[600px] mx-auto text-slate-400 dark:text-slate-700">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas, nulla delectus explicabo eos autem officia dolore
              obcaecati odit quam maiores illo repellat modi rem porro inventore
              minima vel accusamus?
            </p>
          </div>
        </div>
        <div className="space-y-3 w-fit mx-auto">
          <div className="space-y-3 md:space-y-0 md:flex gap-3 w-fit">
            <Quote
              stars={4}
              fullName={"John Doe"}
              jobTitle={"Frontend Developer"}
              className={"md:w-[400px] lg:w-[600px] xl:w-[800px]"}
              textClassName={"lg:text-2xl"}
              imgSrc={
                "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi, quam officia repellendus dolor vitae pariatur
            mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
            />
            <Quote
              stars={5}
              fullName={"Muhammad Haroon"}
              jobTitle={"Backend Developer"}
              imgSrc={
                "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              }
              quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi, quam officia repellendus dolor vitae pariatur
            mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
            />
          </div>
          <div className="space-y-3 md:space-y-0 md:flex gap-3 w-fit">
            <Quote
              stars={3}
              fullName={"David Jackson"}
              jobTitle={"UI Designer"}
              imgSrc={
                "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi, quam officia repellendus dolor vitae pariatur
            mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
            />
            <Quote
              stars={4}
              fullName={"Michael Johns"}
              jobTitle={"Frontend Developer"}
              className={"max-w-[400px] md:max-w-max md:w-[400px] lg:w-[600px] xl:w-[800px]"}
              textClassName={"lg:text-2xl"}
              imgSrc={
                "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              }
              quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi, quam officia repellendus dolor vitae pariatur
            mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialClassicGrid;
