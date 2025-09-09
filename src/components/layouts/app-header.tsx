import { Separator } from "../ui/separator";
import StokoraLogo from "../common/stokora-logo";
import TerryPalmerLogo from "../common/terry-palmer-logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronDown, LogOut } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="sticky top-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between py-5 px-4">
        {/* Stokora Logo and Title */}
        <div className="flex items-center gap-4 h-5">
          <StokoraLogo />
          <Separator orientation="vertical" />
          <span className="text-gray-400 text-sm">Shopee Store Monitoring</span>
        </div>
        {/* Terry Palmer Logo & User Dropdown */}
        <div className="flex items-center gap-4 h-5">
          <TerryPalmerLogo />
          <Separator orientation="vertical" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar className="size-8 rounded-full">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="leading-tight text-left">
                  <h5 className="truncate font-medium text-sm">Admin</h5>
                  <p className="text-muted-foreground truncate text-xs">
                    admin@gmail.com
                  </p>
                </div>
                <ChevronDown size={18} />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 p-1.5">
                  <Avatar className="size-8 rounded-full">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="Admin"
                      className="object-cover"
                    />
                    <AvatarFallback className="rounded-lg">
                      A
                    </AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <h5 className="truncate font-medium text-sm">Admin</h5>
                    <p className="text-muted-foreground truncate text-xs">
                      admin@gmail.com
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
