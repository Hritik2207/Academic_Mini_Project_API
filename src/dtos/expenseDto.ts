import { z } from "zod";

export interface ExpenseDto {
  id: string;
  title: string;
  amount: string;
}

export interface CreateExpenseDto {
  title: string;
  amount: string;
}

export const CreateExpenseSchema = z.object({
  title: z.string().min(1, "Description cannot be empty"),
  amount: z.string().min(1, "The amount has to be more than zero"),
});

export type CreateExpenseRequestDto = z.infer<typeof CreateExpenseSchema>;

export const IdParamSchema = z.object({
  id: z.coerce.number().int().positive("Id must be a positive integer"),
});

export interface ExpenseResponseDto {
  id: string;
  title: string;
  amount: string;
}