import { NextResponse } from 'next/server';

let cart: { name: string; price: number; quantity: number }[] = [];

export async function GET() {
  return NextResponse.json({ cart });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price } = body;

  // بررسی آیتم موجود در سبد خرید
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1; // افزایش تعداد
  } else {
    cart.push({ name, price, quantity: 1 }); // اضافه کردن آیتم جدید
  }

  return NextResponse.json({ message: `Item ${name} added to cart!`, cart });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { name } = body;

  cart = cart.filter((item) => item.name !== name); // حذف آیتم
  return NextResponse.json({ message: `Item ${name} removed from cart!`, cart });
}