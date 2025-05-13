'use client';

import Aos from 'aos';
import { useEffect } from 'react';

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
    <div className="flex h-screen flex-col items-center justify-center bg-blue-500">
      <h1 data-aos="fade-up">Segunda pagina</h1>
      <p data-aos="fade-left">Aqui está um parágrafo com animação de entrada ao rolar.</p>
      <div data-aos="zoom-in">teste</div>
    </div>
  );
}
