import React, { FC } from "react";
import { BadgeInfo } from "lucide-react";
import Link from "next/link";

type Props = {
  id: string;
};

const Act: FC<Props> = ({ id }) => {
  return (
    <div>
      <Link
        className=" gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        href={`/dashboard/orders/${id}`}
      >
        <BadgeInfo /> View
      </Link>
    </div>
  );
};

export default Act;
