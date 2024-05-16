"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { useSelector } from "react-redux";
import RockiesLogo from "../../public/assets/rockies-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { useLogoutQuery } from "../../redux/features/auth/authApi";
import { LogOut } from "lucide-react";
import { UserRoundCog } from "lucide-react";

export function UserNav() {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <Image
                src={RockiesLogo}
                alt={user?.name ?? ""}
                className={`w-[35px] h-[35px] rounded-full`}
              />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href={`/dashboard/profile`}>
              <DropdownMenuItem className=" cursor-pointer">
                <UserRoundCog size={20} className="mr-2" />
                Profile{" "}
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setLogout(true)}
            className=" cursor-pointer"
          >
            <LogOut size={20} className="mr-2" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
