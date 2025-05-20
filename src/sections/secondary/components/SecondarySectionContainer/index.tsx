'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import { projects } from './constants';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { TypographyTagEnum } from '@/components/Typography/constants';

export function SecondarySectionContainer() {
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
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-4 py-16 text-white">
      <Typography
        typographyTag={TypographyTagEnum.H2}
        data-aos="fade-up"
        className="text-3xl font-bold text-purple-400 sm:text-4xl"
      >
        Meus Projetos
      </Typography>
      <Typography
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-2 max-w-xl text-center text-sm text-gray-300"
      >
        Confira alguns projetos que desenvolvi aplicando minhas principais tecnologias e boas
        práticas de desenvolvimento.
      </Typography>

      <div
        className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col justify-between rounded-xl bg-gray-800 p-4 shadow-md transition hover:scale-[1.02] hover:bg-gray-700"
            data-aos="zoom-in"
          >
            <div>
              <Typography
                typographyTag={TypographyTagEnum.H3}
                className="mt-4 text-lg font-semibold text-purple-300"
              >
                {project.title}
              </Typography>
              <Typography className="mt-1 text-sm text-gray-300">{project.description}</Typography>
            </div>
            <div className="mt-4 flex gap-2">
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md bg-purple-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-purple-700"
                >
                  Ver Projeto
                </Link>
              ) : null}

              <Link
                href={project.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-md border border-purple-500 px-4 py-2 text-center text-sm font-medium text-purple-300 transition hover:bg-purple-600 hover:text-white"
              >
                Ver Repositório
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
