import React from "react";
import AdminProtected from "../../../hooks/AdminProtected";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Separator } from "../../../../components/ui/separator";
import { Switch } from "../../../../components/ui/switch";
import { Label } from "../../../../components/ui/label";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import EditProfile from "../../../components/Profile/EditProfile";

type Props = {};

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];

const Page = (props: Props) => {
  return (
    <AdminProtected>
      <Heading
        title="Rockies's Profile"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage title={`Profile`} description="Mange Profile from here" />
          </div>
          <Separator />
          <EditProfile />
        </div>
      </ScrollArea>
    </AdminProtected>
  );
};

export default Page;
