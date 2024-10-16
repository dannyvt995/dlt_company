import React from 'react'
import type { Metadata } from "next";
import PageHeader from '@/modules/PageHeader';
import Services from '@/modules/Services';
import Faq from '@/modules/Faq';
import {breedCum} from '@/Contrast/page'
import NavbarSection from "@/modules/NavbarSection";
export const metadata: Metadata = {
  title: "Our Services || DLT TECHNICAL SERVICES",
  description: "Civil & Construction - Skid-resistant and Colour Surface Treatment - Permeable paving",
};


export default function index() {
  return (
    <main>
      <NavbarSection/>
    <PageHeader data={breedCum.service} />
    <Services/>
    <Faq/>
    </main>

  )
}
