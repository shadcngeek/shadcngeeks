import React from "react";
import Image from "next/image";

import Header from "./header/header";
import { images } from "./data/images";
import PromptForm from "./prompt-form";
import { PromptGuide } from "./prompt-guide";
import { TopPSelector } from "./top-p-selector";
import { Switch } from "@/components/ui/switch";
import { ModelSelector } from "./model-selector";
import { QualityDetails } from "./quality-details";
import DisplayImages from "./display-images/images";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import ImageUpload from "./image-upload/image-upload";
import { MaxLengthSelector } from "./maxlength-selector";
import { TemperatureSelector } from "./temperature-selector";

import { models, types } from "./data/models";

function ImageEditMega() {
  return (
    <div className="min-h-[100vh] p-4 xl:px-[100px] dark:bg-slate-950">
      <div className="md:hidden">
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="block dark:hidden"
          src="/images/www/image-edit-mega.png"
        />
        <Image
          width={1280}
          height={866}
          alt="Playground"
          className="hidden dark:block"
          src="/images/www/image-edit-mega-dark.png"
        />
        <p className="text-slate-700 text-sm">
          This UI is not available for small screen devices yet. Please, switch
          to a large screen device.
        </p>
      </div>

      <div className="border dark:border-slate-800 rounded-lg p-5 pb-0 hidden md:block max-w-[1536px] mx-auto">
        <Header />

        <Separator />

        <div className="flex">
          <div className="2xl:shrink-0 pt-5 space-y-5 max-w-[400px] border-r dark:border-slate-800 pr-5 pb-20">
            <div className="space-y-2">
              <p className="text-1xl font-bold dark:text-white">Prompt</p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                facilis distinctio dolor sint iste esse amet et neque, saepe
                delectus.
              </p>
            </div>

            <Textarea
              className="h-96"
              placeholder="A beautiful smiling Muslim girl wearing pink cloths with hands in the pocket."
            />

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <p className="font-semibold dark:text-white">
                  Remove from image
                </p>
                <Switch />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                libero?
              </p>
            </div>
          </div>

          <div className="border-r dark:border-slate-800 mr-5 p-5 px-10 w-full space-y-5">
            <ImageUpload />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
              {images.map(({ path, prompt }) => (
                <DisplayImages key={path} path={path} prompt={prompt} />
              ))}
            </div>

            <PromptForm />
          </div>

          <div className="2xl:shrink-0  mt-5 space-y-10 max-w-[400px] pb-20">
            <div>
              <p className="text-1xl font-bold dark:text-white">Model</p>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, fugiat ipsum eius rerum iste accusantium?
              </p>
            </div>

            <div className="space-y-3 dark:text-white">
              <ModelSelector types={types} models={models} />
              <TemperatureSelector defaultValue={[0.56]} />
              <MaxLengthSelector defaultValue={[256]} />
              <TopPSelector defaultValue={[0.9]} />
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <p className="dark:text-white text-1xl font-bold">
                  Prompt Guidance
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  ipsum.
                </p>
              </div>
              <PromptGuide defaultValue={[0.5]} />
            </div>

            <div className="space-y-3">
              <div className="space-y-2">
                <p className="dark:text-white text-1xl font-bold">
                  Quality & Details
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  ipsum.
                </p>
              </div>
              <QualityDetails defaultValue={[0.6]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageEditMega;
