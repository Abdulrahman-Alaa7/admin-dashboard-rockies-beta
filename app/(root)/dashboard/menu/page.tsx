import React from "react";
import AdminProtected from "../../../hooks/AdminProtected";
import Heading from "../../../utils/Heading";
import BreadCrumb from "../../../components/Breadcrumb";
import { HeadPage } from "../../../../components/ui/HeadPage";
import { Plus } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";
import MenuComponent from "../../../components/Menu/MenuComponent";
import Link from "next/link";
import { ScrollArea } from "../../../../components/ui/scroll-area";
type Props = {};

const breadcrumbItems = [{ title: "Menu", link: "/dashboard/menu" }];

const Page = (props: Props) => {
  const menuData: any = {
    Single_Sandwiches: [
      {
        id: "1",
        imgSrc: "/assets/burger-2.png",
        title: "Classic Cheesy",
        description: "Chicken breast, tomatoes, cheesy sauce",
        price: 125,
      },
      {
        id: "2",
        imgSrc: "/assets/burger-1.png",
        title: "Hot Honey",
        description:
          "Chicken breast,hot sweettened chili sauce, lettuce, tomatoes, jalapeno, spiciness level 'hot'",
        price: 130,
      },
      {
        id: "3",
        imgSrc: "/assets/burger-3.png",
        title: "Buffalo Rocky",
        description:
          "Chicken breast, lettuce, tomatoes, jalapeno, spiciness level 'medium'",
        price: 130,
      },
      {
        id: "4",
        imgSrc: "/assets/burger-4.png",
        title: "Cream Rocky",
        description:
          "Chicken breast,cheese, lettuce, tomatoes, ranch sauce, cheddar sauce",
        price: 135,
      },
    ],
    Double_Sandwiches: [
      {
        id: "5",
        imgSrc: "/assets/burger-5.png",
        title: "Double Hot Rocky",
        description: "Buffalo Rocky or Hot Honey",
        typesRec: [
          { id: "19", subTitle: "Buffalo Rocky" },
          { id: "20", subTitle: "Hot Honey" },
        ],
        price: 175,
      },
      {
        id: "6",
        imgSrc: "/assets/burger-6.png",
        title: "Double Creamy Rocky",
        description: "Creamy Rocky or Classic Cheese",
        typesRec: [
          { id: "21", subTitle: "Creamy Rocky" },
          { id: "22", subTitle: "Classic Cheese" },
        ],
        price: 185,
      },
    ],
    Appetizer: [
      {
        id: "7",
        imgSrc: "/assets/fries-4.webp",
        title: "Loaded Fries",
        description: "Chicken , Cheese, Jalapeno 'optional'",
        typesRec: [
          { id: "23", subTitle: "With Jalapeno" },
          { id: "24", subTitle: "No Jalapeno" },
        ],
        price: 80,
      },
      {
        id: "8",
        imgSrc: "/assets/fries-1.png",
        title: "Cheesy Fries",
        price: 50,
      },
      {
        id: "9",
        imgSrc: "/assets/fries-2.png",
        title: "Fries",
        price: 40,
      },
      {
        id: "10",
        imgSrc: "/assets/mozzarella-sticks.png",
        title: "Mozzarella Sticks",
        price: 50,
      },
      {
        id: "11",
        imgSrc: "/assets/tenders.png",
        title: "Tenders",
        description: "Buffalo or Sweet Chili",
        typesRec: [
          { id: "25", subTitle: "Buffalo" },
          { id: "26", subTitle: "Sweet Chili" },
        ],
        price: 80,
      },
    ],
    Combo_Extra: [
      {
        id: "12",
        imgSrc: "/assets/burger-6.png",
        title: "Combo Single",
        price: 180,
      },
      {
        id: "13",
        imgSrc: "/assets/burger-5.png",
        title: "Combo Double",
        price: 215,
      },
      {
        id: "14",
        imgSrc: "/assets/extra-sauce.png",
        title: "Extra Sauce",
        typesRec: [
          { id: "27", subTitle: "Ranch Sauce" },
          { id: "28", subTitle: "Cheddar Sauce" },
          { id: "29", subTitle: "Ketchup " },
          { id: "30", subTitle: "Hot Sauce" },
        ],
        price: 10,
      },
    ],
    Drinks_Desserts: [
      {
        id: "15",
        imgSrc: "/assets/ice-cream.webp",
        title: "Ice Cream",
        typesRec: [
          { id: "31", subTitle: "Vanilla" },
          { id: "32", subTitle: "Rocky Road" },
          { id: "33", subTitle: "Strawberry" },
          { id: "34", subTitle: "Blueberry " },
          { id: "35", subTitle: "Chocolate" },
        ],
        price: 25,
      },
      {
        id: "16",
        imgSrc: "/assets/soft-drinks.png",
        title: "Soft Drinks",
        typesRec: [
          { id: "36", subTitle: "Spero Spates - Apple" },
          { id: "37", subTitle: "V7 - Cola" },
          { id: "38", subTitle: "V7 - Pina Colada" },
          { id: "39", subTitle: "Spero Spates - Pear" },
        ],
        price: 20,
      },
      {
        id: "17",
        imgSrc: "/assets/red-pull.png",
        title: "Red Bull",
        typesRec: [
          { id: "40", subTitle: "Coconut & Berry" },
          {
            id: "41",
            subTitle: "Purple Edition",
          },
        ],
        price: 50,
      },
      {
        id: "18",
        imgSrc: "/assets/water-bottle.png",
        title: "Water",
        price: 15,
      },
    ],
  };

  return (
    <AdminProtected>
      <Heading
        title="Rockies's Menu"
        description="Rockies is a special food truck."
        keywords="Food, Burger, Ice cream and more"
      />
      <ScrollArea className="h-full ">
        <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
          <div className="flex items-start justify-between">
            <HeadPage title={`Menu`} description="Mange Menu from here" />
            <Link
              href={`/dashboard/menu/new`}
              className={`h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
            >
              <Plus size={20} className="mr-2" /> Add New
            </Link>
          </div>
          <Separator />
          <MenuComponent menu={menuData} />
        </div>
      </ScrollArea>
    </AdminProtected>
  );
};

export default Page;
