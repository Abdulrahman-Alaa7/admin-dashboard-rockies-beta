import React, { FC } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

import LinksCom from "./LinksCom";
import HeroEdit from "./HeroEdit";
import AboutEdit from "./AboutEdit";

type Props = {};

const EditHome: FC<Props> = ({}) => {
  const links = [
    { id: "215412", url: "https://www.instagram.com/rockies.eg/" },
  ];

  const para1 = "Food Truck";
  const para2 = "Food may cause extreme happiness and uncontrollable cravings.";

  const loca =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8595392178827!2d30.98428627594165!3d30.012189320097637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585754b9cba23f%3A0xdfbc09a0a87f3e86!2sNile%20University!5e0!3m2!1sen!2seg!4v1715889488216!5m2!1sen!2seg";

  const pAbout =
    "Since we first opened our doors, we've been a destination for a variety of events. Let's just say, we're special! Our space lends the perfect atmosphere to gatherings both great and small, and we can't wait to see you soon.";

  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <Tabs
        defaultValue="links"
        className="md:w-[400px] lg:w-[655px] w-[350px] "
      >
        <TabsList className="flex items-center justify-center gap-2">
          <TabsTrigger value="links" className="px-8">
            Links
          </TabsTrigger>
          <TabsTrigger value="hero" className="px-8">
            Hero
          </TabsTrigger>
          <TabsTrigger value="about" className="px-8">
            About
          </TabsTrigger>
        </TabsList>
        <TabsContent value="links">
          <LinksCom links={links} />
        </TabsContent>

        <TabsContent value="hero">
          <HeroEdit p1={para1} p2={para2} />
        </TabsContent>

        <TabsContent value="about">
          <AboutEdit loca={loca} pAbout={pAbout} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditHome;
