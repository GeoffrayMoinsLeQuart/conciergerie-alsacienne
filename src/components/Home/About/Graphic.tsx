export default function Graphic() {
  return (
    <>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          width="60"
          height="120"
          viewBox="0 0 60 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="60" cy="60" r="60" fill="url(#paint0_radial_18:24)" />
          <defs>
            <radialGradient
              id="paint0_radial_18:24"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(60) rotate(90) scale(120)"
            >
              <stop stopColor="white" />
              <stop offset="0.569" stopColor="#F0F4FD" />
              <stop offset="0.993" stopColor="#D9E0F0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
