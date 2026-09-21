import { BrandEssence } from "@/components/marketing/brand-essence";
import { ClientCta } from "@/components/marketing/client-cta";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { Portfolio } from "@/components/marketing/portfolio";
import { Stats } from "@/components/marketing/stats";
import { Testimonials } from "@/components/marketing/testimonials";
import { createClient } from "@/lib/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <div className="bg-ink">
      <Navbar isAuthenticated={Boolean(data.user)} />
      <main>
        <Hero />
        <Stats />
        <BrandEssence />
        <Portfolio />
        <Testimonials />
        <ClientCta />
      </main>
      <Footer />
    </div>
  );
}
