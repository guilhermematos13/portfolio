import { TypographyTagEnum } from './constants';

export type TypographyProps = {
  children: React.ReactNode;
  useKarlaFont?: boolean;
  className?: string;
  typographyTag?: TypographyTagEnum;
};
