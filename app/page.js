"use client";
import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const { products } = useProducts();
  const [category, setCategory] = useState("All");
  const list = products
    .filter((p) => category === "All" || p.category === category)
    .sort((a, b) => b.votes - a.votes);

  return (
    <>
      <section className="hero">
        <h1>Mental health tools that people actually find helpful.</h1>
        <p>Upvote the apps that helped you. Share one you love so others can find it.</p>
      </section>
      <CategoryFilter value={category} onChange={setCategory} />
      {list.length === 0 ? (
        <p className="empty">Nothing here yet. Share the first tool in this category.</p>
      ) : (
        <ol className="list">
          {list.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
        </ol>
      )}
    </>
  );
}
