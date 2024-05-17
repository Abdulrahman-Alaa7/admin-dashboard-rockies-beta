import React from "react";
import Heading from "../../../../utils/Heading";
import BreadCrumb from "../../../../components/Breadcrumb";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import { Separator } from "../../../../../components/ui/separator";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import MenuItem from "../../../../components/Menu/MenuItem";

type Props = {};

const breadcrumbItems = [
  { title: "Menu", link: "/dashboard/menu" },
  { title: "Add New Item", link: `/dashboard/menu/new` },
];
const Page = (props: Props) => {
  return (
    <>
      <Heading
        title="Rockies's Menu"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full ">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Add New Item`}
              description="Add new item in the menu. "
            />
          </div>
          <Separator />
          <MenuItem />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
