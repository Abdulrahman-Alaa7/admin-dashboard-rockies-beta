"use client";
import * as z from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Switch } from "../../../components/ui/switch";
import { Label } from "../../../components/ui/label";
import { CloudUpload } from "lucide-react";

type Props = {
  initialData?: any | null;
};
export const IMG_MAX_LIMIT = 10;

const MenuItem: React.FC<Props> = ({ initialData }) => {
  const typesSchema = z.object({
    title: z.string(),
  });

  const formSchema = z.object({
    title: z
      .string()
      .min(3, { message: " Title must be at least 3 characters" }),
    imgUrl: z.string().optional(),
    description: z.string().optional(),
    price: z.coerce
      .number()
      .positive({ message: " Price must be greater than 0" }),
    category: z.string().min(1, { message: "Please select a category" }),
    offer: z.boolean().default(false).optional(),
    typesRes: z.array(typesSchema).optional(),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const action = initialData ? "Save changes" : "Create";

  const categories = [
    { id: "1245212545", title: "Single Sandwiches" },
    { id: "1245542545", title: "Double Sandwiches" },
    { id: "1212242545", title: "Extra Sauce" },
  ];

  const defaultValues = initialData
    ? initialData
    : {
        title: "",
        description: "",
        price: 0,
        imgUrl: "",
        category: "",
        offer: false,
        typesRes: [],
      };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "typesRes",
  });

  const handleFileChange = (e: any, field: any) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          field.onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any, field: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          field.onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (field: any) => {
    field.onChange("");
  };

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
        console.log("success Updated", data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
        console.log("success added", data);
      }
      // router.refresh();
      // router.push(`/dashboard/menu`);
      // console.log("Error");
    } catch (error: any) {
      console.log("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="imgUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-muted-foreground ">
                  Image (optional)
                </FormLabel>

                <FormControl>
                  <div className={`w-full`}>
                    <input
                      type="file"
                      id="file"
                      accept="image/*"
                      className={`hidden`}
                      onChange={(e) => handleFileChange(e, field)}
                    />
                    <label
                      htmlFor="file"
                      className={`relative w-full min-h-[20vh]  border-border border-dashed rounded-3xl p-3 border flex items-center justify-center ${
                        dragging ? "bg-blue-500" : "bg-transparent"
                      } cursor-pointer`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, field)}
                    >
                      {field.value && field.value.length > 0 ? (
                        <div>
                          <img
                            src={field.value}
                            alt=""
                            className={` object-cover w-[300px] h-[300px]`}
                          />
                          <Button
                            type="button"
                            onClick={() => handleRemoveImage(field)}
                            className="absolute top-3 right-3  text-white  "
                          >
                            <Trash size={20} />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-4 justify-center items-center">
                          <CloudUpload
                            size={48}
                            className=" bg-muted p-2 rounded-lg"
                          />
                          <span
                            className={` text-blue-500 font-semibold text-[14px] `}
                          >
                            Drag and drop your image here or click to browse
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted-foreground">
                    Title <span className="text-primary">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Product Title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted-foreground">
                    Description (optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Product description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted-foreground">
                    Price <span className="text-primary">(required)</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="number" disabled={loading} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-muted-foreground">
                    Category <span className="text-primary">(required)</span>
                  </FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category (required)"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="offer"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-4 py-1 mt-2">
                  <div className="space-y-0.5">
                    <FormLabel>Offer</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <br />
            <div className="flex justify-center items-center">
              <Button
                type="button"
                variant={`outline`}
                onClick={() => append({ title: "" })}
                className="!w-fit mx-auto py-2 px-8 flex items-center justify-center gap-2"
              >
                <Plus
                  className={`cursor-pointer text-black dark:text-white my-3`}
                  size={22}
                />
                Add type
              </Button>
            </div>
            {fields.map((item, index) => (
              <div
                className={`fadeIn mb-3 block  my-3 p-2 rounded-lg`}
                key={item.id}
              >
                <div className={`flex flex-col gap-2`}>
                  <Label
                    htmlFor={`type-${index}`}
                    className={` text-muted-foreground `}
                  >
                    Write a type
                  </Label>
                  <FormField
                    control={form.control}
                    name={`typesRes.${index}.title`}
                    render={({ field }) => (
                      <Input
                        type="text"
                        placeholder="Write a type"
                        {...field}
                      />
                    )}
                  />
                </div>
                <div
                  className={`w-full flex items-center justify-between my-3`}
                >
                  <label
                    htmlFor={`type-${index}`}
                    className={` text-black dark:text-white text-[12px] px-2  font-meduim`}
                  >
                    Type {index + 1}
                  </label>
                  <Button
                    className={`flex justify-center items-center gap-2`}
                    onClick={() => remove(index)}
                    variant={`ghost`}
                  >
                    <Trash className={`  `} size={20} color="red" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button
            disabled={loading}
            className="mx-auto w-[250px] flex justify-center items-center"
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default MenuItem;
