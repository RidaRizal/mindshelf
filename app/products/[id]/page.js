"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useProducts } from "../../../context/ProductsContext";
import UpvoteButton from "../../../components/UpvoteButton";

export default function ProductPage() {
  const { id } = useParams();
  const { products, addComment } = useProducts();
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="empty">Product not found. <Link href="/">Back to the list</Link></p>;

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addComment(id, author.trim() || "Anonymous", text.trim());
    setText("");
  };

  return (
    <article className="detail">
      <Link href="/" className="back">Back to all products</Link>
      <div className="detail-head">
        <div>
          <h1>{product.name}</h1>
          <p className="lead">{product.tagline}</p>
        </div>
        <UpvoteButton id={product.id} votes={product.votes} />
      </div>
      <p>{product.description}</p>
      <small>Made by {product.maker} in {product.category}</small>

      <h2>Comments ({product.comments.length})</h2>
      {product.comments.length === 0 && <p className="empty">No comments yet. Share what you think.</p>}
      <ul className="comments">
        {product.comments.map((c) => (
          <li key={c.id}><strong>{c.author}</strong><p>{c.text}</p></li>
        ))}
      </ul>
      <div className="form">
        <label>Your name<input value={author} onChange={(e) => setAuthor(e.target.value)} /></label>
        <label>Comment<textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} /></label>
        <button className="btn" onClick={submit}>Post comment</button>
      </div>
    </article>
  );
}
