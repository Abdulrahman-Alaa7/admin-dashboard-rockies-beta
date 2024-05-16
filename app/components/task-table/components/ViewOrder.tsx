"use client";
import React, { FC } from "react";
import { Button } from "../../../../components/ui/button";
import { Orders } from "../../../../constants/data";
import { Badge } from "../../../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Trash2 } from "lucide-react";
type Props = {
  id: any;
};

const ViewOrder: FC<Props> = ({ id }) => {
  const orders = Orders;

  const viewData = orders && orders.find((i: any) => i.id === id);

  const orderInfo: any = viewData && viewData.Order?.map((item: any) => item);

  const sumPrice = (order: any) => {
    let TotalPrice = 0;
    for (let i = 0; i < order.length; i++) {
      TotalPrice += order[i].price * order[i].quantity;
    }
    return TotalPrice;
  };

  return (
    <div
      className={`flex-1 space-y-2  p-4 md:p-8 pt-6 flex-col justify-center items-center`}
    >
      <h1
        className={`bg-muted font-semibold mx-auto px-6 py-2 w-fit  rounded-3xl flex items-center gap-2 text-[20px]`}
      >
        Table{" "}
        <Badge variant={`destructive`} className="text-[16px]">
          {viewData?.tabelNum}
        </Badge>
      </h1>

      <Table className="md:w-[70%] mx-auto">
        <TableCaption>A list of this order.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Quantity</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderInfo?.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-bold flex justify-center items-center">
                {item.quantity}
              </TableCell>
              <TableCell className="font-semibold text-start">
                {item.title}
              </TableCell>
              <TableCell className="text-right font-meduim">
                EGP {item.price * item.quantity}
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} className="text-left font-bold">
              Total
            </TableCell>
            <TableCell className="text-right font-bold">
              EGP {sumPrice(orderInfo)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <br />
      <div
        className={`${
          viewData?.note.length == 0 && "!hidden"
        } min-h-auto max-h-[200px] md:w-[70%]  rounded-md border p-4 flex flex-col overflow-auto text-center mx-auto `}
      >
        <Badge
          variant={`outline`}
          className="text-[17px] block mx-auto w-fit !mb-6"
        >
          Note
        </Badge>
        <p className={`font- text-[18px] tracking-wide text-muted-foreground`}>
          {viewData?.note}
        </p>
      </div>
      <br />
      <Button
        className={`!mx-auto px-6 rounded-full my-6 sm:w-[30%] w-[100%] flex justify-center items-center gap-2 `}
      >
        <Trash2 size={18} />
        Delete Order
      </Button>
    </div>
  );
};

export default ViewOrder;
