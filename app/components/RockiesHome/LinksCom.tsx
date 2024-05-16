"use client";
import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Plus, Trash } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { Form, FormField } from "../../../components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";

type Props = {
  links?: { url: string }[];
};

const LinksCom: FC<Props> = ({ links }) => {
  const [loading, setLoading] = useState(false);

  const categorySchema = z.object({
    url: z.string().nonempty({ message: "link can't be empty!" }),
  });

  const formSchema = z.object({
    links: z.array(categorySchema).optional(),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const defaultValues: AddNewItemValues = {
    links: links || [],
  };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (links) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
        console.log("success Updated", data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log('product', res);
        console.log("success added", data);
      }
      // router.refresh();
      // router.push(`/dashboard/menu`);
    } catch (error: any) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Card className="fadeRight">
        <CardHeader>
          <CardTitle>Links</CardTitle>
          <CardDescription>
            Make changes to links&#39;s account here. Click save when youre
            done.
          </CardDescription>
        </CardHeader>
        <Button
          type="button"
          className="w-[120px] flex justify-center gap-2 items-center mx-auto"
          onClick={() => append({ url: "" })}
        >
          <Plus size={20} /> Add New
        </Button>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex flex-col gap-2 ">
                {fields.map((item, index) => (
                  <div className="fadeIn  block p-2 rounded-lg" key={item.id}>
                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor={`links-${index}`}
                        className="text-muted-foreground"
                      >
                        Write a link
                      </Label>
                      <FormField
                        control={form.control}
                        name={`links.${index}.url`}
                        render={({ field }) => (
                          <Input
                            type="text"
                            placeholder="Write a link"
                            {...field}
                          />
                        )}
                      />
                    </div>
                    <div className="w-full flex items-center justify-between mt-2">
                      <label
                        htmlFor={`type-${index}`}
                        className="text-black dark:text-white text-[12px] px-2 font-medium"
                      >
                        Links {index + 1}
                      </label>
                      <Button
                        className="flex justify-center items-center gap-2"
                        onClick={() => {
                          remove(index);
                        }}
                        variant="ghost"
                      >
                        <Trash size={20} color="red" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                className="mx-auto w-[250px] flex justify-center items-center"
                type="submit"
              >
                Save
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinksCom;
