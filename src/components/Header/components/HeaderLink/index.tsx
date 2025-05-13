import Link from 'next/link';
import { HeaderLinkProps } from './types';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

export function HeaderLink({ href, label }: HeaderLinkProps) {
  const pathname = usePathname();

  const isCurrentLink = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'font-medium transition-colors hover:text-orange-500',
        isCurrentLink ? 'text-orange-500' : 'text-slate-100',
      )}
    >
      {label}
    </Link>
  );
}
