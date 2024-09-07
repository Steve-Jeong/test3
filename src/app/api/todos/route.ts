import { NextRequest, NextResponse } from 'next/server';
import { createTodo, deleteTodo } from '@/lib/todos';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const todos = await prisma.todos.findMany();
  return NextResponse.json(todos);
}

export async function POST(request:NextRequest) {
  const { title } = await request.json();
  const newTodo = await createTodo(title);
  return NextResponse.json(newTodo);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await deleteTodo(id);
  return NextResponse.json({ message: 'Todo deleted successfully' });
}