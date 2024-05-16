"use client";
import React, { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "../../../components/ui/textarea";

type Props = {
  loca?: string;
  pAbout?: string;
};

const AboutEdit: FC<Props> = ({ loca, pAbout }) => {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    loca: z.string().min(1, { message: "Location can't be empty!" }),
    pAbout: z.string().min(1, { message: "Paragraph can't be empty!" }),
  });

  type AddNewItemValues = z.infer<typeof formSchema>;

  const defaultValues: AddNewItemValues = {
    loca: loca || "",
    pAbout: pAbout || "",
  };

  const form = useForm<AddNewItemValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: AddNewItemValues) => {
    try {
      setLoading(true);
      if (loca && pAbout) {
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
          <CardTitle>Edit About</CardTitle>
          <CardDescription>
            Make changes to your About section here. Click save when youre done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full"
            >
              <div className="flex flex-col gap-2 ">
                <FormField
                  control={form.control}
                  name="loca"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted-foreground">
                        Location
                        <span className="text-primary"> (required)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="https://www.google.com/maps/embed?pb=!1m..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pAbout"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-muted-foreground">
                        Paragraph About
                        <span className="text-primary"> (required)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={loading}
                          placeholder="Write anything.."
                          {...field}
                          className=" resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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

export default AboutEdit;
