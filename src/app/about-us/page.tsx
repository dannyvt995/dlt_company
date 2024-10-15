import React from 'react'
import s from './style.module.css'
import type { Metadata } from "next";
import PageHeader from '@/modules/PageHeader';
import Intro from '@/modules/Intro';
import Faq from '@/modules/Faq';
import { breedCum , pageData} from '@/Contrast/page';
import Fact from '@/modules/Fact';
import Feature from '@/modules/Feature';
import FormSection from '@/modules/FormSection';
export const metadata: Metadata = {
  title: "About us || DLT TECHNICAL SERVICES",
  description: "Company DLT Technical Services is a privately owned business founded in 2016 based on nearly 20 years of extensive experience in civil construction, project management and surface treatment application.",
};

export default function index() {
  return (
    <main>
        <PageHeader data={breedCum.aboutus}/>
        <Intro data={pageData.aboutus}/>
        <Faq/>
    <FormSection/>
    </main>
 
  )
}
