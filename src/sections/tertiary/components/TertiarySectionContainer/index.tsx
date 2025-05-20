'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { TypographyTagEnum } from '@/components/Typography/constants';

export function TertiarySectionContainer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-purple-900 px-6 py-16 text-white">
      <Typography
        data-aos="fade-up"
        className="mb-6 text-3xl font-bold text-purple-400 sm:text-4xl"
        typographyTag={TypographyTagEnum.H1}
      >
        Contato
      </Typography>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex w-full max-w-lg flex-col gap-6 rounded-xl bg-gray-800 p-8 shadow-lg"
      >
        <Link
          href="mailto:guilhermemoliveira1998@gmail.com"
          className="flex items-center gap-4 rounded-lg bg-purple-800/20 px-6 py-4 transition hover:bg-purple-700"
        >
          <Mail className="h-6 w-6 text-purple-400" />
          <Typography typographyTag={TypographyTagEnum.SPAN} className="text-md">
            Email
          </Typography>
        </Link>

        <Link
          href="https://www.linkedin.com/in/guilhermematos13/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg bg-purple-800/20 px-6 py-4 transition hover:bg-purple-700"
        >
          <Linkedin className="h-6 w-6 text-purple-400" />
          <Typography typographyTag={TypographyTagEnum.SPAN} className="text-md">
            Linkedin
          </Typography>
        </Link>
      </div>
    </section>
  );
}
