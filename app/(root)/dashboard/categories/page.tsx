import React from "react";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import CategoryItem from "../../../components/CategoryItem";

type Props = {};

const breadcrumbItems = [
  { title: "Categories", link: "/dashboard/categories" },
];

const Page = (props: Props) => {
  const categories = [
    { id: "1215451456", title: "Single Sandwatches" },
    { id: "4665485648", title: "Double Sandwatches" },
    { id: "4156114541", title: "Combo Extra" },
    { id: "0315121555", title: "Drinks" },
  ];

  const initCatgory = {
    title: "",
  };

  return (
    <div>
      <Heading
        title="Rockies's Categories"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full ">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Categories`}
              description="Mange Categories from here"
            />
          </div>
          <Separator />
          <CategoryItem categories={categories} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Page;
