import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, {
    message: "El título debe tener al menos 3 caracteres",
  }),
  description: z
    .string()
    .min(10, {
      message: "La descripción debe tener al menos 10 caracteres",
    })
    .max(500, {
      message: "La descripción debe tener como máximo 500 caracteres",
    }),
  location: z
    .string()
    .min(3, {
      message: "La ubicación debe tener al menos 3 caracteres",
    })
    .max(100, {
      message: "La ubicación debe tener como máximo 100 caracteres",
    }),
  startDateTime: z.date(),
  endDateTime: z.date(),
  imageUrl: z.string().url({
    message: "La URL de la imagen debe ser válida",
  }),
  categoryId: z.string().min(1, {
    message: "La categoría es requerida",
  }),
  isFree: z.boolean(),
  price: z.string().optional(),
  currency: z
    .string()
    .default("COP")
    .refine((val) => {
      return ["COP", "USD", "EUR"].includes(val);
    })
    .optional(),
});

export type EventFormData = z.infer<typeof eventFormSchema>;
