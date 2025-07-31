import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import PostCard from "./components/PostCard";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <PostCard />
    </main>
  );
}
