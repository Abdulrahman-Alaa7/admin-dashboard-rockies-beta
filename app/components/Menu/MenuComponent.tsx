"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { BiCarousel } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
import { Pencil, Trash2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import { AlertModal } from "../alert-modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  menu: any[];
};

const MenuComponent: FC<Props> = ({ menu }) => {
  const router = useRouter();
  const [carousel, setCarousel] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onConfirm = async () => {};
  return (
    <div>
      {Object.keys(menu).map((category: any) => (
        <div className="mb-12" key={category}>
          <h3 className="text-2xl md:text-3xl font-semibold my-4 uppercase">
            {category.replace(/_/g, " ")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 transition-all">
            {menu[category].map((item: any) => (
              <div
                key={item.id}
                className={`relative bg-gradient-to-b from-red-800 to-red-900 shadow p-4 rounded-3xl transition-all md:hover:scale-105 md:hover:from-red-700 md:hover:to-red-800`}
              >
                {item.imgSrc && (
                  <div
                    className={`flex items-center justify-center p-4 w-fit mx-auto rounded-full`}
                  >
                    <Image
                      src={item.imgSrc}
                      alt={`Burger`}
                      width={200}
                      height={200}
                      className={`rounded-full`}
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white py-2 px-1 uppercase">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-300 mb-3 pl-1 pr-6">
                    {item.description}
                  </p>
                )}
                <p className="text-[#ffffffcc] p-1 font-bold">
                  EGP {item.price}
                </p>
                {item.typesRec ? (
                  <div
                    className={`flex justify-center items-center mt-12 mb-9 flex-col`}
                  >
                    <div
                      className={`absolute top-3 right-4 transition-all  flex justify-center items-center gap-2  flex-col `}
                    >
                      <Link
                        href={`/dashboard/menu/${item.id}`}
                        className={` text-white bg-gradient-to-r from-rose-600 via-red-700 to-rose-700 flex gap-1 px-2 py-2  md:hover:scale-110 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
                      >
                        <Pencil size={20} />
                      </Link>
                      <Button
                        type="button"
                        className={`bg-gradient-to-r from-rose-600 via-red-700 to-rose-700 flex items-center gap-1 px-2 py-2 transition-all md:hover:scale-110`}
                        onClick={() => setOpen(true)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                    <Button
                      type="button"
                      className={`absolute bottom-4 flex items-center gap-1 px-12 transition-all md:hover:scale-110`}
                      onClick={() => setCarousel(!carousel)}
                    >
                      {carousel ? (
                        <div
                          className={`fadeIn transition-all  flex items-center justify-center gap-1`}
                        >
                          <GoEyeClosed size={22} />
                          Hide
                        </div>
                      ) : (
                        <div
                          className={`fadeIn transition-all flex items-center justify-center gap-1`}
                        >
                          <BiCarousel size={25} />
                          Choose
                        </div>
                      )}
                    </Button>
                    {carousel && item.typesRec && (
                      <div
                        className={`fadeIn  flex justify-center item-center gap-2 my-3 !transition-all`}
                      >
                        <Carousel>
                          <CarouselContent className="w-[250px]">
                            {item.typesRec.map((el: any, elIndex: number) => (
                              <CarouselItem key={elIndex}>
                                <div
                                  className={` fadeIn transition-all bg-background p-[7px] min-h-[110px]  flex justify-center items-center flex-col rounded-lg font-semibold text-[15px]`}
                                >
                                  {el.subTitle}
                                  <div
                                    className={` transition-all flex justify-center items-center flex-col`}
                                  ></div>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className={`absolute top-3 right-4 transition-all  flex justify-center items-center gap-2  flex-col `}
                  >
                    <Link
                      href={`/dashboard/menu/${item.id}`}
                      className={` text-white bg-gradient-to-r from-rose-600 via-red-700 to-rose-700 flex gap-1 px-2 py-2  md:hover:scale-110 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
                    >
                      <Pencil size={20} />
                    </Link>
                    <Button
                      type="button"
                      className={`bg-gradient-to-r from-rose-600 via-red-700 to-rose-700 flex items-center gap-1 px-2 py-2 transition-all md:hover:scale-110`}
                      onClick={() => setOpen(true)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
    </div>
  );
};

export default MenuComponent;
