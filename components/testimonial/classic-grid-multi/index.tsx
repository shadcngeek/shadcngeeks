import React from "react";

import Quote from "./quote";

function TestimonialClassicGridMulti() {
  return (
    <div className="p-10 flex justify-center items-center min-h-dvh dark:bg-slate-950">
      <div className="space-y-10">
        <div className="space-y-2">
          <p className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl dark:text-white text-center font-semibold">
            Hear From Our Clients
          </p>
          <div className="md:w-[600px] mx-auto text-slate-400 dark:text-slate-700">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas, nulla delectus explicabo eos autem officia dolore
              obcaecati odit quam maiores illo repellat modi rem porro inventore
              minima vel accusamus?
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="hidden items-start justify-center gap-10 rounded-lg p-8 xl:grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Muhammad Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ethan Reynolds"}
                jobTitle={"Software Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>

            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Christopher Williams"}
                jobTitle={"Lawyer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
              />
              <Quote
                stars={5}
                fullName={"Benjamin Taylor"}
                jobTitle={"UI Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
              />
              <Quote
                stars={5}
                fullName={"Michael Johnson"}
                jobTitle={"Environmental Scientist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>

            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Mustapha Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ali Mahmoud"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Matthew Brown"}
                jobTitle={"Engineer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>

            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Daniel Davis"}
                jobTitle={"Interior Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1560787313-5dff3307e257?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore! Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!.`}
              />
              <Quote
                stars={5}
                fullName={"David Moore"}
                jobTitle={"Journalist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>
          </div>

          <div className="hidden items-start justify-center gap-10 rounded-lg p-8 lg:grid lg:grid-cols-3">
            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Muhammad Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ethan Reynolds"}
                jobTitle={"Software Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Christopher Williams"}
                jobTitle={"Lawyer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
              />
            </div>

            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Benjamin Taylor"}
                jobTitle={"UI Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
              />
              <Quote
                stars={5}
                fullName={"Michael Johnson"}
                jobTitle={"Environmental Scientist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Mustapha Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ali Mahmoud"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>

            <div className="col-span-2 grid items-start lg:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Matthew Brown"}
                jobTitle={"Engineer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Daniel Davis"}
                jobTitle={"Interior Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1560787313-5dff3307e257?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore! Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!.`}
              />
              <Quote
                stars={5}
                fullName={"David Moore"}
                jobTitle={"Journalist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>
          </div>

          <div className="hidden items-start justify-center gap-10 rounded-lg p-8 md:grid md:grid-cols-2">
            <div className="col-span-2 grid items-start md:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Muhammad Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ethan Reynolds"}
                jobTitle={"Software Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Christopher Williams"}
                jobTitle={"Lawyer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
              />
              <Quote
                stars={5}
                fullName={"Benjamin Taylor"}
                jobTitle={"UI Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
              />
              <Quote
                stars={5}
                fullName={"Michael Johnson"}
                jobTitle={"Environmental Scientist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>
            <div className="col-span-2 grid items-start md:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Mustapha Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ali Mahmoud"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Matthew Brown"}
                jobTitle={"Engineer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Daniel Davis"}
                jobTitle={"Interior Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1560787313-5dff3307e257?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore! Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!.`}
              />
              <Quote
                stars={5}
                fullName={"David Moore"}
                jobTitle={"Journalist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>
          </div>

          <div className="w-fit mx-auto block md:hidden items-start justify-center gap-10 rounded-lg p-8">
            <div className="col-span-2 grid items-start md:col-span-1 gap-10">
              <Quote
                stars={5}
                fullName={"Muhammad Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=500&h=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ethan Reynolds"}
                jobTitle={"Software Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Christopher Williams"}
                jobTitle={"Lawyer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!`}
              />
              <Quote
                stars={5}
                fullName={"Benjamin Taylor"}
                jobTitle={"UI Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit.`}
              />
              <Quote
                stars={5}
                fullName={"Michael Johnson"}
                jobTitle={"Environmental Scientist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Mustapha Haroon"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Ali Mahmoud"}
                jobTitle={"Backend Developer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
              <Quote
                stars={5}
                fullName={"Matthew Brown"}
                jobTitle={"Engineer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=300&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />

              <Quote
                stars={5}
                fullName={"Daniel Davis"}
                jobTitle={"Interior Designer"}
                imgSrc={
                  "https://images.unsplash.com/photo-1560787313-5dff3307e257?q=80&w=300&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi. Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore! Ad corrupti ea esse, dicta molestias sed minus possimus
            tempore!.`}
              />
              <Quote
                stars={5}
                fullName={"David Moore"}
                jobTitle={"Journalist"}
                imgSrc={
                  "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=300&w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                }
                quote={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            libero incidunt commodi.`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialClassicGridMulti;
