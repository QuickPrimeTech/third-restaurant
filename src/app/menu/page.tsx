"use client";

import { useState } from "react";
import MenuHeader from "@/pages/menu/menu-header";
import MenuNavigation from "@/pages/menu/menu-navigation";
import MenuItems from "@/pages/menu/menu-items";
import DownloadCTA from "@/pages/menu/download-cta";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const categories = [
    { id: "appetizers", name: "Appetizers" },
    { id: "mains", name: "Main Courses" },
    { id: "desserts", name: "Desserts" },
    { id: "wine", name: "Wine List" },
    { id: "cocktails", name: "Cocktails" },
    { id: "beverages", name: "Non-Alcoholic" },
  ];

  const menuItems = {
    appetizers: [
      {
        name: "Obsidian Oysters",
        description:
          "Fresh Blue Point oysters with black caviar and champagne mignonette",
        price: "$24",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718107/images_23_u2vxiz.jpg",
        dietary: ["gluten-free"],
      },
      {
        name: "Truffle Arancini",
        description:
          "Crispy risotto balls with black truffle, parmesan, and herb oil",
        price: "$18",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718110/lunch_7_kzmfn1.jpg",
        dietary: ["vegetarian"],
      },
      {
        name: "Tuna Tartare",
        description: "Yellowfin tuna with avocado, citrus, and sesame tuile",
        price: "$22",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718099/images_19_tbzmxs.jpg",
        dietary: ["gluten-free", "dairy-free"],
      },
    ],
    mains: [
      {
        name: "Obsidian Wagyu",
        description:
          "Premium A5 Wagyu beef with black truffle reduction and seasonal vegetables",
        price: "$85",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718091/images_12_chalnx.jpg",
        dietary: ["gluten-free"],
      },
      {
        name: "Emerald Sea Bass",
        description:
          "Pan-seared Chilean sea bass with emerald herb crust and saffron foam",
        price: "$42",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718079/images_14_r942xy.jpg",
        dietary: ["gluten-free"],
      },
      {
        name: "Duck Confit",
        description:
          "Slow-cooked duck leg with cherry gastrique and roasted root vegetables",
        price: "$38",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718074/images_11_ptucpi.jpg",
        dietary: ["dairy-free"],
      },
    ],
    desserts: [
      {
        name: "Golden Soufflé",
        description:
          "Decadent chocolate soufflé with gold leaf and vanilla bean ice cream",
        price: "$16",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718074/images_5_q9wv7o.jpg",
        dietary: ["vegetarian"],
      },
      {
        name: "Obsidian Tart",
        description:
          "Dark chocolate tart with salted caramel and espresso dust",
        price: "$14",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718072/images_3_oz3my0.jpg",
        dietary: ["vegetarian"],
      },
    ],
    wine: [
      {
        name: "Château Margaux 2015",
        description:
          "Full-bodied Bordeaux with notes of blackcurrant, cedar, and tobacco",
        price: "$450",
        region: "Bordeaux, France",
      },
      {
        name: "Dom Pérignon 2012",
        description: "Elegant champagne with citrus and mineral notes",
        price: "$320",
        region: "Champagne, France",
      },
    ],
    cocktails: [
      {
        name: "Obsidian Martini",
        description:
          "Premium vodka with black olive tapenade and activated charcoal",
        price: "$18",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718070/images_1_wu7l2z.jpg",
      },
      {
        name: "Golden Hour",
        description: "Aged whiskey with honey, lemon, and gold flakes",
        price: "$16",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718071/images_4_t8l5rp.jpg",
      },
    ],
    beverages: [
      {
        name: "Artisan Coffee",
        description: "Single-origin beans roasted to perfection",
        price: "$6",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718074/images_5_q9wv7o.jpg",
      },
      {
        name: "Herbal Tea Selection",
        description: "Curated selection of premium loose-leaf teas",
        price: "$5",
        image:
          "https://res.cloudinary.com/dhlyei79o/image/upload/v1749718080/images_9_gcqogn.jpg",
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <MenuHeader />
      <MenuNavigation
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
      <MenuItems items={menuItems[activeCategory as keyof typeof menuItems]} />
      <DownloadCTA />
    </div>
  );
}
