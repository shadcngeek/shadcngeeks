import React from "react";

import UserImage from "./image";

import Quote from "./quote";

function RoundedTestimonial() {
  return (
    <div className="w-full h-dvh flex items-center justify-center dark:bg-slate-950">
      <div>
        <p className="mb-10  md:mb-5 text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white text-center font-semibold">
          Testimonials
        </p>
        <div className="relative w-[300px] h-[300px] md:w-[650px] md:h-[650px] rounded-full">
          <div className="absolute z-30 md:w-[300px] md:h-[300px] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <div className="relative h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full flex justify-center items-center">
              <Quote
                fullName={"Muhammad Haroon"}
                jobTitle={"Backend Developer"}
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              libero incidunt commodi, quam officia repellendus dolor vitae pariatur
              mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
              tempore!`}
              >
                <UserImage imgSrc="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" />
              </Quote>
              <>
                <div className="absolute top-0 -translate-y-[100%]">
                  <Quote
                    fullName={"David Tunner"}
                    jobTitle={"Frontend Developer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute top-0 right-0 -translate-y-[60%] translate-x-[60%]">
                  <Quote
                    fullName={"Ibrahim Kurdi"}
                    jobTitle={"Business Manager"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et.`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute right-0 translate-x-[100%]">
                  <Quote
                    fullName={"Ousman Feysal"}
                    jobTitle={"Technician"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute bottom-0 right-0 translate-y-[60%] translate-x-[60%]">
                  <Quote
                    fullName={"Ali Minshawi"}
                    jobTitle={"Backend Developer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus
                tempore!`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute bottom-0 translate-y-[100%]">
                  <Quote
                    fullName={"John Boston"}
                    jobTitle={"UI Designer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et. Ad corrupti ea esse, dicta molestias`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute bottom-0 left-0 translate-y-[60%] -translate-x-[60%]">
                  <Quote
                    fullName={"Michael Johns"}
                    jobTitle={"Frontend Developer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia.`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute left-0 -translate-x-[100%]">
                  <Quote
                    fullName={"John Doe"}
                    jobTitle={"Backend Developer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et. Ad corrupti ea esse, dicta molestias sed minus possimus`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>

                <div className="absolute top-0 left-0 -translate-y-[60%] -translate-x-[60%]">
                  <Quote
                    fullName={"David Jackson"}
                    jobTitle={"UI Designer"}
                    quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                libero incidunt commodi, quam officia repellendus dolor vitae pariatur
                mollitia et. Ad corrupti ea esse, dicta molestias`}
                  >
                    <UserImage
                      imgSrc="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-20 h-20 md:w-40 md:h-40"
                    />
                  </Quote>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoundedTestimonial;
