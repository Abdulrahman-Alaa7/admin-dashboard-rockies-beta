import React, { FC } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import ChangePassword from "./ChangePassword";
import Lock from "./Lock";

type Props = {};

const EditProfile: FC<Props> = ({}) => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <Tabs
        defaultValue="lock"
        className="md:w-[400px] lg:w-[655px] w-[350px] "
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lock" className="px-8">
            Lock
          </TabsTrigger>
          <TabsTrigger value="password" className="px-8">
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lock">
          <Lock />
        </TabsContent>

        <TabsContent value="password">
          <ChangePassword />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EditProfile;
