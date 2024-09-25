import { z } from "zod";
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const RequestFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Invalid Number!"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  files: z
    .array(
      z.object({
        filePath: z.string(),
      })
    )
    .length(0, "Files are required"),
  message: z.string().min(1, "Message is required"),
  key: z.string(),
  key2: z.string().min(1, "Request a date and time"),
});

export type IRequestForm = z.infer<
  typeof RequestFormSchema
>;

export const otherSchema = z.object({
  //   filePath: z.string().min(1, "File is required"),
  filePath: z.string(),
  allow: z
    .boolean()
    .refine((value) => value === true, { message: "Checkbox must be checked" }),
});

export type IOtherForm = z.infer<typeof otherSchema>;
