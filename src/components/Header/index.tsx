'use client';
import { TypographyTagEnum } from '../Typography/constants';
import { TypingText } from '../TypingText';

export function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between bg-zinc-800 p-4 sm:p-8">
        <TypingText
          useKarlaFont
          text="Guilherme Matos - Dev"
          typographyTag={TypographyTagEnum.H1}
          className="rounded-md border bg-white px-4 py-1 text-purple-800"
        />
      </div>
    </header>
  );
}
