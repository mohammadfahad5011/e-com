import Hero from "@/app/ui/components/hero/Hero";
import SideCategorie from "@/app/ui/components/sideCategorie/SideCategorie";
import ProductWrapper3 from "@/app/ui/components/productWrapper/ProductWrapper3";
import ProductWrapper4 from "@/app/ui/components/productWrapper/ProductWrapper4";

export default function Page() {
  return (
    <main>
      <Hero />
      <div className="container max-w-[1240px] mx-auto">
        <div className="grid grid-cols-12 gap-2 md:gap-4 my-8">
          <div className="md:col-span-3 col-span-12">
            <SideCategorie />
          </div>
          <div className="md:col-span-9 col-span-12">
            <ProductWrapper3 />
          </div>
        </div>

        <div className="py-6">
          <ProductWrapper4 title="New Arivals" />
        </div>

        <div className="py-6">
          <ProductWrapper4 title="Best Seals" />
        </div>
      </div>
    </main>
  );
}
