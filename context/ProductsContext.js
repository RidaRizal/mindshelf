"use client";
import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from "../data/products";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);
  const [upvoted, setUpvoted] = useState([]);

  const toggleUpvote = (id) => {
    const has = upvoted.includes(id);
    setUpvoted(has ? upvoted.filter((x) => x !== id) : [...upvoted, id]);
    setProducts(products.map((p) => (p.id === id ? { ...p, votes: p.votes + (has ? -1 : 1) } : p)));
  };

  const addProduct = (data) => {
    const id = String(Date.now());
    setProducts([{ id, votes: 0, comments: [], ...data }, ...products]);
    return id;
  };

  const addComment = (id, author, text) =>
    setProducts(products.map((p) =>
      p.id === id ? { ...p, comments: [...p.comments, { id: String(Date.now()), author, text }] } : p
    ));

  const value = useMemo(() => ({ products, upvoted, toggleUpvote, addProduct, addComment }), [products, upvoted]);
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export const useProducts = () => useContext(ProductsContext);
