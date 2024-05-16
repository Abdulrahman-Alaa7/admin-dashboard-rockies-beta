import React from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

type Props = {};

const ChangePassword = (props: Props) => {
  return (
    <div>
      <Card className="fadeRight">
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your password here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Current password</Label>
            <Input
              id="current"
              type="password"
              placeholder="Current password"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" placeholder="New password" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confrim">Confirm New password</Label>
            <Input
              id="confrim"
              type="password"
              placeholder="Confirm New Password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save password</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChangePassword;
