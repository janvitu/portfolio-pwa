<script>
  import Navbar from "@components/Navbar.svelte";
  import Hero from "@/page-parts/Hero.svelte";
  import Service from "@/page-parts/Service.svelte";
  import Work from "@/page-parts/Work.svelte";
  import Footer from "@/page-parts/Footer.svelte";
  import About from "@/page-parts/About.svelte";
  import Contact from "@/page-parts/contact/Contact.svelte";
</script>

<svelte:head>
  <title>Jan Vítů | Developer</title>
</svelte:head>

<Navbar />
<!-- text-base md:text-lg lg:text-xl -->
<main class="text-base md:text-lg">
  <Hero />
  <Service />
  <Work />
  <About />
  <Contact />
  <Footer />
</main>
