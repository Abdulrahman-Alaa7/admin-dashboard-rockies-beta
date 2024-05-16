import React from "react";
import { Switch } from "../../../components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

type Props = {};

const Lock = (props: Props) => {
  return (
    <div>
      <Card className="fadeRight">
        <CardHeader>
          <CardTitle>Lock</CardTitle>
          <CardDescription>
            Change to open or lock receive orders from here.{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="mt-4 flex items-center space-x-2 justify-between border md:w-[60%] w-full flex-row-reverse py-3 rounded-lg mx-auto px-6">
            <Switch id="airplane-mode" className={``} />
            <Label htmlFor="airplane-mode" className="cursor-pointer">
              Airplane Mode
            </Label>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" className="mx-auto">
            Save password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Lock;
