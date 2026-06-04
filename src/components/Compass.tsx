export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 3" />
      <g className="compass-spin" style={{ transformOrigin: "50px 50px" }}>
        <polygon points="50,10 54,50 50,46 46,50" fill="currentColor" opacity="0.9" />
        <polygon points="50,90 54,50 50,54 46,50" fill="currentColor" opacity="0.4" />
      </g>
      <text x="50" y="8" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">N</text>
      <text x="50" y="97" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">S</text>
      <text x="6" y="53" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">W</text>
      <text x="94" y="53" textAnchor="middle" fontSize="7" fontFamily="serif" fill="currentColor">E</text>
      <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    </svg>
  );
}
