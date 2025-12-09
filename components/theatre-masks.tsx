interface TheatreMasksProps {
  className?: string
}

export function TheatreMasks({ className }: TheatreMasksProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Happy mask */}
      <path d="M4 8c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 6-4 6s-4-3-4-6z" />
      <path d="M6 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z" fill="currentColor" />
      <path d="M9 8.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z" fill="currentColor" />
      <path d="M6 11c.5.5 1.5 1 2 1s1.5-.5 2-1" />

      {/* Sad mask */}
      <path d="M12 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 6-4 6s-4-3-4-6z" />
      <path d="M14 11.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z" fill="currentColor" />
      <path d="M17 11.5c0 .3.2.5.5.5s.5-.2.5-.5-.2-.5-.5-.5-.5.2-.5.5z" fill="currentColor" />
      <path d="M14 15c.5-.5 1.5-1 2-1s1.5.5 2 1" />
    </svg>
  )
}
