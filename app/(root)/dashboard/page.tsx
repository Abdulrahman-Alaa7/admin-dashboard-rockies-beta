import React, { FC } from "react";
import Heading from "../../utils/Heading";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { FiRefreshCw } from "react-icons/fi";
import { LayoutList } from "lucide-react";
import { DataTable } from "@/app/components/task-table/components/data-table";
import { orders } from "@/app/components/task-table/data/orders";
import { columns } from "@/app/components/task-table/components/columns";

type Props = {};

const Page: FC<Props> = ({}) => {
  return (
    <>
      <Heading
        title="Rockies's Dashboard"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Hi, Welcome back 👋
            </h2>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <div className="flex justify-center items-center gap-6">
              <h2 className={`bg-muted py-2 px-3 rounded-lg font-semibold`}>
                Overview
              </h2>
              <div className=" flex items-center space-x-2">
                <Button>
                  <FiRefreshCw size={20} className="mr-2" /> Refresh
                </Button>
              </div>
            </div>
            <TabsContent value="overview" className="space-y-4">
              <div className="flex justify-center items-center">
                <Card className=" ">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Recent Orders
                    </CardTitle>
                    <LayoutList size={18} className=" text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold bg-primary w-fit p-2 rounded-lg my-2 text-white/80 mx-auto">
                      17
                    </div>
                    <p className="text-xs text-muted-foreground">
                      These are active orders now
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="">
                <Card className="">
                  <CardHeader className="!pb-2">
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>You have 17 order now.</CardDescription>
                  </CardHeader>
                  <CardContent className="w-[350px] sm:w-[650px] md:w-[750px] lg:w-full mx-auto">
                    <DataTable
                      data={orders}
                      columns={columns}
                      dashboard={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>{" "}
      </ScrollArea>
    </>
  );
};

export default Page;
