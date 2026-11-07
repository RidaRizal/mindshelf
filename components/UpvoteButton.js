"use client";
import { useProducts } from "../context/ProductsContext";

export default function UpvoteButton({ id, votes }) {
  const { upvoted, toggleUpvote } = useProducts();
  const active = upvoted.includes(id);
  return (
    <button
      className={`vote ${active ? "vote-on" : ""}`}
      onClick={(e) => { e.preventDefault(); toggleUpvote(id); }}
      aria-pressed={active}
      aria-label={`Upvote, ${votes} votes`}
    >
      <span aria-hidden="true">▲</span>
      <strong>{votes}</strong>
    </button>
  );
}
