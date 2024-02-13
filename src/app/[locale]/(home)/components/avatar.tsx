import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn } from "@/components/animation/fade-in";

export const Avatars = () => {
  const avatarsData = [
    {
      username: "Isadora Client",
      imageSrc: "/profiles/isadora.jpg",
      fallback: "S",
    },
    { username: "Igor Client", imageSrc: "/profiles/igor.jpg", fallback: "S" },
    {
      username: "Douglas Client",
      imageSrc: "/profiles/douglas.jpg",
      fallback: "S",
    },
    { username: "Sara Client", imageSrc: "/profiles/sara.jpg", fallback: "S" },
    {
      username: "Livia Client",
      imageSrc: "/profiles/livia.jpg",
      fallback: "S",
    },
  ];

  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
      {avatarsData.map((avatar, index) => (
        <FadeIn duration={0.6} to="top" key={index}>
          <Avatar>
            <AvatarImage
              className="border-2 border-white rounded-full dark:border-gray-800"
              src={avatar.imageSrc}
              alt={`@${avatar.username}`}
            />

            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          </Avatar>
        </FadeIn>
      ))}
    </div>
  );
};
