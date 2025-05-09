import { cn } from "@/lib/utils";
import { ITypography } from "@/types/typography-interface";

export function TypographyStrong({ children, className }: ITypography) {
  return <strong className={cn(className)}>{children}</strong>;
}
