import { TypographyTagEnum } from '../Typography/constants';

export type TypingTextProps = {
  text: string;
  speed?: number;
  useKarlaFont?: boolean;
  className?: string;
  typographyTag?: TypographyTagEnum;
};
