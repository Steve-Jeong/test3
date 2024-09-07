"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const todo = await prisma.todos.create({
    data: {
      title,
    },
  });
  revalidatePath("./");
  console.log("todo was created => ", todo);
};

export const getTodos = async () => {
  const todos = await prisma.todos.findMany();
  return todos;
};

export const deleteTodo = async (formData: FormData) => {
  const id = formData.get("id") as string;
  
  await prisma.todos.delete({
    where: {
      id: Number(id),
    },
  });
  
  revalidatePath("./");
  console.log("todo was deleted => ", id);
};