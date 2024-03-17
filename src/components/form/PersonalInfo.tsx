import { useState } from "react";
import * as z from "zod";
import { PersonalForm } from "./schema/formSchema";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form";
import { Input } from "../../@/components/ui/input";

const PersonalInfo = () => {
  const form = useForm<z.infer<typeof PersonalForm>>({
    resolver: zodResolver(PersonalForm),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof PersonalForm>) {}

  return (
    <>
      <section className="flex w-full md:max-w-lg max-w-md px-5 md:px-0 flex-col space-y-6 items-start md:justify-start justify-center mx-auto md:mx-0">
        <div className="gap-y-3 py-3">
          <h1 className="text-4xl font-[700] font-['Ubuntu-b'] text-marine-blue">
            Personal Info
          </h1>
          <p className="text-cool-gray font-['Ubuntu-r']">
            Please provide your name, email address, and phone number
          </p>
        </div>

        <Form {...form}>
          <form className="space-y-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-[600] text-sm font-['Ubuntu-r'] text-marine-blue">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="e.g Ebuka Victor"
                      {...field}
                      className="py-3 h-14 ubuntu-r font-medium border-neutral-500 focus:border-none placeholder:text-neutral-400 placeholder:font-base placeholder:text-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between w-full">
                    <FormLabel className="font-[600] text-sm font-['Ubuntu-r'] text-marine-blue">
                      Email Address
                    </FormLabel>

                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="e.g ebukaezerex2345@forgro.com"
                      {...field}
                      className="py-3 h-14 ubuntu-r font-medium border-neutral-500 focus:border-none placeholder:text-neutral-400 placeholder:font-base placeholder:text-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between w-full">
                    <FormLabel className="font-[600] text-sm font-['Ubuntu-r'] text-marine-blue">
                      Phone Number
                    </FormLabel>

                    <FormMessage />
                  </div>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="e.g +1 234 567 235"
                      {...field}
                      className="py-3 h-14 ubuntu-r font-medium border-neutral-500 focus:border-none placeholder:text-neutral-400 placeholder:font-base placeholder:text-sm"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>
    </>
  );
};

export default PersonalInfo;
