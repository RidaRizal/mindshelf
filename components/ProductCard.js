import Link from "next/link";
import UpvoteButton from "./UpvoteButton";

export default function ProductCard({ product, rank }) {
  return (
    <li className="card">
      <span className="rank">{rank}</span>
      <Link href={`/products/${product.id}`} className="card-body">
        <h3>{product.name}</h3>
        <p>{product.tagline}</p>
        <small>{product.category} · {product.comments.length} comments</small>
      </Link>
      <UpvoteButton id={product.id} votes={product.votes} />
    </li>
  );
}
