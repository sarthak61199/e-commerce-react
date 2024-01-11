import { z } from "zod";
import { checkoutSchema, loginSchema, registerSchema } from "./schema";

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imgUrl?: string;
  address?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  otp?: string;
  otpExpiryTime?: Date;
  createdAt: Date;
  updatedAt: Date;
  cartId: number;
  cartQuantity: number;
};

export type ProductType = {
  availableQuantity: number;
  createdAt: Date;
  description: string;
  id: number;
  imgUrl: string;
  name: string;
  price: string;
  updatedAt: Date;
};

export type LoginType = z.infer<typeof loginSchema>;

export type RegisterType = z.infer<typeof registerSchema>;

export type CheckoutType = z.infer<typeof checkoutSchema>;
