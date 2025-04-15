import { IMenu } from "@/app/types/types";
import { NextResponse } from "next/server";

const menu = {
  coffee: [
    {
      id: 1,
      name: "اسپرسو ماکیاتو",
      price: 120000,
      img: "/cafeimage/coffee/اسپرسو ماکیاتو 1.jpg",
    },
    {
      id: 2,
      name: "آمریکانو",
      price: 100000,
      img: "/cafeimage/coffee/امریکانو 1.jpg",
    },
    {
      id: 3,
      name: "قهوه عربی",
      price: 110000,
      img: "/cafeimage/coffee/ترکی عربی 1.jpg",
    },
    {
      id: 4,
      name: "قهوه دمی",
      price: 60000,
      img: "/cafeimage/coffee/فرنچ پرس 1.jpg",
    },
    {
      id: 5,
      name: "کاپوچینو",
      price: 130000,
      img: "/cafeimage/coffee/کاپوچینو.jpg",
    },
    {
      id: 6,
      name: "گلد کاپوچینو",
      price: 150000,
      img: "/cafeimage/coffee/گلد کاپوچینو 1.jpg",
    },
    {
      id: 7,
      name: "لته ماکیاتو",
      price: 140000,
      img: "/cafeimage/coffee/لته ماکیاتو 1.jpg",
    },
  ],
  warm_drink: [
    {
      id: 8,
      name: "چای ایرانی",
      price: 80000,
      img: "/cafeimage/warmDrinks/چای ایرانی.jpg",
    },
    {
      id: 9,
      name: "چای ترش",
      price: 60000,
      img: "/cafeimage/warmDrinks/چای ترش 1.jpg",
    },
    {
      id: 10,
      name: "چای سیاه",
      price: 70000,
      img: "/cafeimage/warmDrinks/چای سیاه.jpg",
    },
    {
      id: 11,
      name: "چای مراکشی",
      price: 70000,
      img: "/cafeimage/warmDrinks/چای مراکشی.jpg",
    },
    {
      id: 12,
      name: "سین اپل",
      price: 85000,
      img: "/cafeimage/warmDrinks/سین اپل 1.jpg",
    },
    {
      id: 13,
      name: "ماسالا",
      price: 80000,
      img: "/cafeimage/warmDrinks/ماسالا.jpg",
    },
    {
      id: 14,
      name: "هات چاکلت",
      price: 100000,
      img: "/cafeimage/warmDrinks/هات چاکلت.jpg",
    },
  ],
  cold_drink: [
    {
      id: 37,
      name: "آب انار",
      price: 62000,
      img: "/cafeimage/coldDrink/آب انار.jpg",
    },
    {
      id: 38,
      name: "آب هویج",
      price: 52000,
      img: "/cafeimage/coldDrink/آب هویج.jpg",
    },
    {
      id: 39,
      name: "آیریش",
      price: 80000,
      img: "/cafeimage/coldDrink/آیریش 1.jpg",
    },
    {
      id: 40,
      name: "پرتقال انار",
      price: 95000,
      img: "/cafeimage/coldDrink/پرتقال انار.jpg",
    },
    {
      id: 41,
      name: "شیک اورئو",
      price: 155000,
      img: "/cafeimage/coldDrink/شیک اورئو.jpg",
    },
    {
      id: 42,
      name: "شیک بادام زمینی",
      price: 135000,
      img: "/cafeimage/coldDrink/شیک بادام زمینی.jpg",
    },
    {
      id: 43,
      name: "شیک توت فرنگی",
      price: 120000,
      img: "/cafeimage/coldDrink/شیک توت فرنگی.jpg",
    },
    {
      id: 44,
      name: "",
      price: 135000,
      img: "/cafeimage/coldDrink/شیک شاتوت.jpg",
    },
    {
      id: 45,
      name: "شیک کوکوهیس",
      price: 170000,
      img: "/cafeimage/coldDrink/شیک کوکوهیس.jpg",
    },
  ],
  salad: [
    {
      id: 15,
      name: "بشقاب میوه",
      price: 280000,
      img: "/cafeimage/salad/بشقاب میوه.jpg",
    },
    {
      id: 16,
      name: "تارت رزبری",
      price: 170000,
      img: "/cafeimage/salad/تارت رزبری پسته.jpg",
    },
    {
      id: 17,
      name: "سالاد تای بیف",
      price: 420000,
      img: "/cafeimage/salad/تای بیف سالاد.jpg",
    },
    {
      id: 18,
      name: "چاکلت لاوا",
      price: 180000,
      img: "/cafeimage/salad/چاکلت لاوا جدید.jpg",
    },
    {
      id: 19,
      name: "چوروس",
      price: 120000,
      img: "/cafeimage/salad/چوروس.jpg",
    },
    {
      id: 20,
      name: "چیکن آووکادو",
      price: 325000,
      img: "/cafeimage/salad/چیکن آووکادو.jpg",
    },
    {
      id: 21,
      name: "رول دارچین و گردو",
      price: 150000,
      img: "/cafeimage/salad/رول دارچین و گردو.jpg",
    },
    {
      id: 22,
      name: "سالاد آیس برگ",
      price: 230000,
      img: "/cafeimage/salad/سالاد آیس برگ 1.jpg",
    },
    {
      id: 23,
      name: "سالاد سلمن آووکادو",
      price: 548000,
      img: "/cafeimage/salad/سالاد سلمن آووکادو.jpg",
    },
    {
      id: 24,
      name: "لیمو بری",
      price: 165000,
      img: "/cafeimage/salad/لیموبری.jpg",
    },
    {
      id: 25,
      name: "میوه",
      price: 250000,
      img: "/cafeimage/salad/میوه.jpg",
    },
    {
      id: 26,
      name: "نیویورک رول",
      price: 195000,
      img: "/cafeimage/salad/نیویورک رول.jpg",
    },
  ],

  main_food: [
    {
      id: 27,
      name: "فیله استیک",
      price: 720000,
      img: "/cafeimage/mainDish/fillet steak.jpg",
    },
    {
      id: 28,
      name: "بیف استراگانف",
      price: 540000,
      img: "/cafeimage/mainDish/بیف استروگانف.jpg",
    },
    {
      id: 29,
      name: "پاستا بیف آلفردو",
      price: 480000,
      img: "/cafeimage/mainDish/پاستا بیف آلفردو.jpg",
    },
    {
      id: 31,
      name: "پیده گوشت",
      price: 520000,
      img: "/cafeimage/mainDish/پیده گوشت.jpg",
    },
    {
      id: 32,
      name: "روکا برگر",
      price: 440000,
      img: "/cafeimage/mainDish/روکا برگر 1.jpg",
    },
    {
      id: 33,
      name: "سالاد شریمپ تمپورا",
      price: 570000,
      img: "/cafeimage/mainDish/سالاد شریمپ تمپورا.jpg",
    },
    {
      id: 34,
      name: "فراید شریمپ",
      price: 590000,
      img: "/cafeimage/mainDish/فراید شریمپ.jpg",
    },
    {
      id: 35,
      name: "گرید سلمن با سس هاندایز",
      price: 1350000,
      img: "/cafeimage/mainDish/گریل سلمن با سس هالندایز.jpg",
    },
    {
      id: 36,
      name: "ماهی مراکشی",
      price: 1200000,
      img: "/cafeimage/mainDish/ماهی مراکشی.jpg",
    },
  ],
};

// export async function GET() {
//   return NextResponse.json(menu);
// }

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category"); // مثلاً coffee, salad, ...

  if (category && menu[category as keyof IMenu]) {
    return NextResponse.json(menu[category as keyof IMenu]);
  }

  return NextResponse.json(menu); // اگه چیزی مشخص نشده، همه منو رو برگردون
}
