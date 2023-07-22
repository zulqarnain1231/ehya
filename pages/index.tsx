import Blogs from "@/components/Home/Blogs/Blogs";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Blogs />
      <NewsLetter />
    </main>
  );
}
