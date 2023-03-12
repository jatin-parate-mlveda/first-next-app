import BlogLayout from "@/components/BlogLayout";
import Link from "next/link";

export default function HomePage() {
  return (
    <BlogLayout>
      <div>
        <Link href="/grocerist-launches-e-commerce-fulfilment-app-for-shopify-merchants">
          First blog
        </Link>
      </div>
    </BlogLayout>
  );
}
