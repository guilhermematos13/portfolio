import React from 'react';
import { TypographyProps } from './types';
import { TypographyTagEnum } from './constants';

export function Typography({
  children,
  useKarlaFont = false,
  className = '',
  typographyTag = TypographyTagEnum.P,
}: TypographyProps) {
  const Component = typographyTag;

  return (
    <Component className={`${useKarlaFont ? `font-karla ${className}` : className}`}>
      {children}
    </Component>
  );
}
