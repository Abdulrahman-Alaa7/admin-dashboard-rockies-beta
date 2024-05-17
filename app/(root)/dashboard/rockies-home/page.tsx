import React from "react";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Separator } from "../../../../components/ui/separator";
import EditHome from "../../../components/RockiesHome/EditHome";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const breadcrumbItems = [
  { title: "Rockies Home", link: "/dashboard/rockies-home" },
];

const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="Rockies's Edit Home"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Rockies's Home`}
              description="Mange Rockies's Home from here"
            />
          </div>
          <Separator />
          <EditHome />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
