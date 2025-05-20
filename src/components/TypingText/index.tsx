import { useEffect, useState } from 'react';
import { TypingTextProps } from './types';
import { TypographyTagEnum } from '../Typography/constants';

export function TypingText({
  text,
  speed = 100,
  className = '',
  typographyTag = TypographyTagEnum.P,
  useKarlaFont,
}: TypingTextProps) {
  const Component = typographyTag;
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <Component className={`${useKarlaFont ? `font-karla ${className}` : className}`}>
      {displayedText}
    </Component>
  );
}
