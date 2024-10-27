// src/pages/about.tsx
import AboutCoverSection from "@/components/AboutUs/Sections";
import FeaturedPosts from "@/components/New/FeaturedPosts";
import RecentPosts from "@/components/New/RecentPosts";

const New = () => {
    return (
    <main className = "flex flex-col items-center justify-center" >
        <AboutCoverSection/>
        <FeaturedPosts/>
        <RecentPosts/>
    </main>
);
  };
  
  export default New;
  