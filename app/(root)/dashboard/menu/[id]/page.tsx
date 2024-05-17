import React, { FC } from "react";
import Heading from "../../../../utils/Heading";
import BreadCrumb from "../../../../components/Breadcrumb";
import { HeadPage } from "../../../../../components/ui/HeadPage";
import { Separator } from "../../../../../components/ui/separator";
import { ScrollArea } from "../../../../../components/ui/scroll-area";
import MenuItem from "../../../../components/Menu/MenuItem";

type Props = {};

const Page: FC<Props> = ({ params }: any) => {
  const id = params?.id;

  const breadcrumbItems = [
    { title: "Menu", link: "/dashboard/menu" },
    { title: "Update Menu", link: `/dashboard/menu/${id}` },
  ];

  const defaultValues = {
    title: "Bureger - test",
    description: "Lormnsafkmsanfkjsakfa asnmf jsaf jsa cjas fsjakf ckas n",
    price: 130,
    imgUrl: "",
    category: "1245212545",
    offer: true,
    typesRes: [{ id: "12454", title: "Test type" }],
  };

  return (
    <>
      {" "}
      <Heading
        title="Update Menu"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full ">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage
              title={`Update Menu's Item`}
              description="Update Menu from here"
            />
          </div>
          <Separator />
          <MenuItem initialData={defaultValues} />
        </div>
      </ScrollArea>
    </>
  );
};

export default Page;
