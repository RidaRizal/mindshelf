"use client";
import { CATEGORIES } from "../data/products";

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="filters" role="tablist">
      {CATEGORIES.map((c) => (
        <button key={c} role="tab" aria-selected={value === c}
          className={`chip ${value === c ? "chip-on" : ""}`} onClick={() => onChange(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}
