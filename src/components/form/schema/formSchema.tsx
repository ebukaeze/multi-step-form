import { z } from "zod";
import validator from "validator";

export const PersonalForm = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(2, { message: "Mininum of 2 letters required" }),
  email: z
    .string({
      invalid_type_error: "Enter a valid email",
      required_error: "Email address is required",
    })
    .min(4, { message: "Minimum of 4 characters required" })
    .email("Enter your email address"),
  phone: z
    .string()
    .min(11, "minimum of 11 digits required")
    .refine(validator.isMobilePhone),
});
