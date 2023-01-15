import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Good Code, Bad Code</h1>
      <ul>
        <li>
        <Link to="/chapter-1">Chapter 1 - Code Quality</Link>
        </li>
      </ul>
    </div>
  );
}
