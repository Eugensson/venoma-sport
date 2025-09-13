import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Latest } from "@/components/latest";
import { TopBar } from "@/components/top-bar";
import { Benefits } from "@/components/benefits";
import { Copyright } from "@/components/copyright";
import { Categories } from "@/components/categories";

const Home = () => {
  return (
    <section>
      <TopBar />
      <Header />
      <Hero />
      <Latest />
      <Categories />
      <Benefits />
      <About />
      <Cta />
      <Footer />
      <Copyright />

      <div className="h-1000" />
    </section>
  );
};

export default Home;
