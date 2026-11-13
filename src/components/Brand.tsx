/**
 * Text-based brand marks. No raster logo: the name is set in Clash Display
 * with a small gradient "NG" monogram, so it scales cleanly and follows the
 * theme colours automatically.
 */

const Monogram = ({ className = "" }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-electric text-primary-foreground font-display font-bold leading-none ${className}`}
  >
    NG
  </span>
);

/** Horizontal lockup for the nav bar and footer. */
export const Lockup = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <Monogram className="h-7 w-7 text-[0.6em]" />
    <span className="font-display font-semibold tracking-tight leading-none text-foreground">
      Naman Goel
    </span>
  </span>
);
