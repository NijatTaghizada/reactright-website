// Signal R: the bowl of the R is the first wave, with two more spreading out from it.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 -1 64 64" fill="none" aria-hidden="true">
      <path d="M14 56V20h10a10 10 0 0 1 0 20H14M22 40l13 16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33.5 13.5A19 19 0 0 1 42.4 34.9" stroke="var(--ember)" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M40.1 7.1A28 28 0 0 1 51.6 34.9" stroke="var(--ember)" strokeWidth="5.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}
