
import Header from "@/src/FE/components/home/Header.";
import Section1 from "@/src/FE/components/home/Section1";
import Section2 from "@/src/FE/components/home/Section2";
import Section3 from "@/src/FE/components/home/Section3";
import Section4 from "@/src/FE/components/home/Section4";
import Section5 from "@/src/FE/components/home/Section5";
import Section6 from "@/src/FE/components/home/Section6";
import React from "react";

const page = () => {
  return (
    <section>
      <Header />
      <main>
  <Section1 />
<Section2  />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
      </main>
    </section>
  );
};

export default page;
