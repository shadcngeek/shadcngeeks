"use client";

import * as React from "react";

import { TextBrief } from "./text-brief";
import { FeedbackListTypes } from "../types";

const feedbackList: FeedbackListTypes[] = [
  {
    fullName: "John Doe",
    jobTitle: "Web Developer",
    feedback:
      "Our development team experienced a significant boost in efficiency with this exceptional framework. It streamlined our workflow, making the coding process more efficient and resulting in higher-quality output. The framework's features have truly elevated our web development projects.",
  },
  {
    fullName: "Jane Smith",
    jobTitle: "UX Designer",
    feedback:
      "As a UX designer, I found this framework to be truly innovative and user-friendly. It has proven to be a game-changer for creating intuitive and aesthetically pleasing interfaces. The framework's flexibility and design-centric features have greatly enhanced our ability to deliver engaging user experiences.",
  },
  {
    fullName: "Alex Johnson",
    jobTitle: "Digital Marketer",
    feedback:
      "Content centric has played a crucial role in boosting our online presence. Its powerful capabilities have significantly added to our marketing strategies. The framework's performance have made it an invaluable asset for digital marketing initiatives, helping us reach a broader audience and achieve good results.",
  },
  {
    fullName: "Sarah Williams",
    jobTitle: "Content Creator",
    feedback:
      "As a content creator, I've found that this framework effortlessly manages content, providing a seamless and intuitive platform for creativity. It has enhanced my productivity by simplifying the content creation process, allowing me to focus more on crafting engaging and meaningful content.",
  },
];

export function Feedbacks() {
  return (
    <div className="flex gap-3 flex-wrap w-fit items-center justify-center">
      {feedbackList.map(({ feedback, fullName, jobTitle }) => (
        <TextBrief
          key={feedback}
          feedback={feedback}
          fullName={fullName}
          jobTitle={jobTitle}
        />
      ))}
    </div>
  );
}
