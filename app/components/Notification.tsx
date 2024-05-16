import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { BiSolidNotification } from "react-icons/bi";

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className=" p-2 rounded-full hover:bg-muted transition-all ">
          <Bell size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-[350px] mx-2 h-[350px] overflow-auto">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className={`flex items-center gap-6 border-b py-3`}>
            <p className={`p-2 bg-muted rounded-lg font-bold text-[18px]`}>
              17
            </p>
            <div>
              <p className={`font-semibold `}>
                New Order From Table{" "}
                <span
                  className={`text-primary border p-2 rounded-lg font-extrabold`}
                >
                  6
                </span>
              </p>
              <p className="py-1 text-[12px] text-muted-foreground">
                8 munutes ago
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Notification;
