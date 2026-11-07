"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProducts } from "../../context/ProductsContext";
import { CATEGORIES } from "../../data/products";

export default function Submit() {
  const { addProduct } = useProducts();
  const router = useRouter();
  const [f, setF] = useState({ name: "", tagline: "", description: "", maker: "", category: "Productivity" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.tagline.trim()) return setError("Add a product name and a one-line tagline.");
    const id = addProduct({ ...f, maker: f.maker.trim() || "Anonymous" });
    router.push(`/products/${id}`);
  };

  return (
    <section className="detail">
      <h1>Launch a product</h1>
      <form className="form" onSubmit={submit}>
        <label>Product name<input value={f.name} onChange={set("name")} /></label>
        <label>Tagline<input value={f.tagline} onChange={set("tagline")} maxLength={70} /></label>
        <label>Description<textarea rows={4} value={f.description} onChange={set("description")} /></label>
        <label>Your name<input value={f.maker} onChange={set("maker")} /></label>
        <label>Category
          <select value={f.category} onChange={set("category")}>
            {CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button className="btn" type="submit">Launch product</button>
      </form>
    </section>
  );
}
