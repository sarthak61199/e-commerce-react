import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be of 10 digits" })
    .trim()
    .refine(
      (v: string) => {
        const n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Please enter a valid Phone Number" }
    ),
  otp: z
    .string()
    .min(6, { message: "OTP must be of 6 digits" })
    .trim()
    .refine(
      (v: string) => {
        const n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Please enter a valid OTP" }
    ),
});

export const registerSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be of 10 digits" })
    .trim()
    .refine(
      (v) => {
        const n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Please enter a valid Phone Number" }
    ),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" })
    .trim(),
  imgUrl: z.string().length(0).optional(),
});

export const checkoutSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }).trim(),
  lastName: z.string().min(1, { message: "First name is required" }).trim(),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be of 10 digits" })
    .trim()
    .refine(
      (v: string) => {
        const n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Please enter a valid Phone Number" }
    ),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" })
    .trim(),
  address: z.string().min(1, { message: "Address is required" }).trim(),
  state: z.string().min(1, { message: "State is required" }).trim(),
  city: z.string().min(1, { message: "City is required" }).trim(),
  pinCode: z
    .string()
    .min(6, { message: "Pincode is required" })
    .max(6)
    .trim()
    .refine(
      (v) => {
        const n = Number(v);
        return !isNaN(n) && v?.length > 0;
      },
      { message: "Please enter a valid Pincode" }
    ),
});
