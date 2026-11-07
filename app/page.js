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
        <h1>New products from independent makers, ranked by you.</h1>
        <p>Upvote what you would actually use. The top of the list resets nothing — it just reflects today's votes.</p>
      </section>
      <CategoryFilter value={category} onChange={setCategory} />
      {list.length === 0 ? (
        <p className="empty">Nothing in this category yet. Be the first to launch one.</p>
      ) : (
        <ol className="list">
          {list.map((p, i) => <ProductCard key={p.id} product={p} rank={i + 1} />)}
        </ol>
      )}
    </>
  );
}
