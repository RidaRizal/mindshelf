"use client";

import { useState } from "react";

const products = [
  {
    id: "1",
    name: "FocusFlow",
    category: "Productivity",
    description: "Manage your tasks and stay focused throughout the day.",
    emoji: "🎯",
    votes: 120,
  },
  {
    id: "2",
    name: "StudyBuddy",
    category: "Education",
    description: "Make learning easier with smart study planning.",
    emoji: "📚",
    votes: 95,
  },
  {
    id: "3",
    name: "GreenSpace",
    category: "Lifestyle",
    description: "Build sustainable habits for a greener future.",
    emoji: "🌱",
    votes: 84,
  },
  {
    id: "4",
    name: "DevTrack",
    category: "Technology",
    description: "Track your coding journey and developer progress.",
    emoji: "💻",
    votes: 76,
  },
];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filtered = category === "All"
    ? products
    : products.filter(p => p.category === category);

  return (
    <main style={{
      background: "#f7f6d6",
      minHeight: "100vh",
      padding: "50px 7%",
      color: "#1b2b2a"
    }}>
      <h1 style={{ fontSize: "38px", fontWeight: "800" }}>
        Discover Products
      </h1>

      <p style={{ color: "#5b6b80", marginBottom: "30px" }}>
        Explore innovative products and ideas on MindShelf.
      </p>

      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "30px"
      }}>
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "10px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: category === c ? "#2f7d6d" : "white",
              color: category === c ? "white" : "#1b2b2a"
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "22px"
      }}>
        {filtered.map(product => (
          <div key={product.id} style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 4px 15px #00000010"
          }}>
            <div style={{ fontSize: "35px" }}>{product.emoji}</div>
            <h2>{product.name}</h2>
            <span style={{ color: "#2f7d6d" }}>
              {product.category}
            </span>
            <p style={{ color: "#5b6b80", lineHeight: "1.6" }}>
              {product.description}
            </p>
            <p>▲ {product.votes} upvotes</p>
          </div>
        ))}
      </div>
    </main>
  );
}