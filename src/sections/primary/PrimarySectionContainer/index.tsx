'use client';

import { Typography } from '@/components/Typography';
import Aos from 'aos';
import { useEffect } from 'react';
import { TypingText } from '@/components/TypingText';
import { TypographyTagEnum } from '@/components/Typography/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { techs } from './constants';

export function PrimarySectionContainer() {
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
    <section className="flex min-h-screen flex-col overflow-y-auto p-4 sm:p-8">
      <div className="w-full flex-1">
        <div data-aos="fade-up-right" className="w-full rounded-lg">
          <div className="flex flex-col gap-6 rounded-lg border border-purple-800 p-4 sm:p-6">
            <Typography
              className="rounded-lg bg-white p-2 text-center text-2xl text-purple-800 sm:text-3xl"
              typographyTag={TypographyTagEnum.H1}
            >
              Olá, me chamo Guilherme Matos.
            </Typography>
            <div className="rounded-lg bg-purple-800 p-4">
              <Typography className="text-center text-sm text-white sm:text-base">
                Sou desenvolvedor front-end com foco em criar interfaces intuitivas, performáticas e
                centradas na experiência do usuário. Tenho experiência com tecnologias como React,
                Next.js, TypeScript e metodologias ágeis. Aqui você vai encontrar alguns dos
                projetos que desenvolvi – cada um representa um desafio superado e uma oportunidade
                de aprendizado. Estou sempre em busca de novas formas de transformar ideias em
                produtos digitais de impacto.
              </Typography>
            </div>

            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 2500 }}
              spaceBetween={16}
              breakpoints={{
                320: { slidesPerView: 1.2 },
                480: { slidesPerView: 1.5 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="mt-6 w-full max-w-full"
            >
              {techs.map((tech) => (
                <SwiperSlide key={tech.name} className="flex flex-col">
                  <div className="flex flex-col items-center">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="rounded-lg bg-white p-2"
                    />
                    <Typography
                      typographyTag={TypographyTagEnum.SPAN}
                      className="mt-3 text-center text-base font-semibold text-white"
                    >
                      {tech.name}
                    </Typography>
                  </div>
                  <Typography className="mt-4 text-center text-sm text-white">
                    {tech.description}
                  </Typography>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
