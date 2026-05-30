type Props = {
  width?: number
  height?: number
  showBeachBalls?: boolean
  className?: string
}

export default function MushBabyElephant({
  width = 160,
  height = 180,
  showBeachBalls = true,
  className,
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 272 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse cx="136" cy="290" rx="90" ry="12" fill="#00000012" />
      <path d="M198 215 Q215 205 210 190" stroke="#8FA4B0" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="136" cy="228" rx="74" ry="60" fill="#B0BEC8" />
      <ellipse cx="136" cy="232" rx="46" ry="38" fill="#C4D0D8" opacity="0.5" />
      <ellipse cx="210" cy="105" rx="28" ry="36" fill="#9AABB6" />
      <ellipse cx="212" cy="107" rx="18" ry="24" fill="#EEB0C4" />
      <ellipse cx="46" cy="100" rx="56" ry="66" fill="#B0BEC8" />
      <ellipse cx="50" cy="104" rx="38" ry="48" fill="#F2B4CA" />
      <circle cx="136" cy="130" r="72" fill="#C0CDD6" />
      <ellipse cx="134" cy="172" rx="30" ry="22" fill="#B0BEC8" />
      <path
        d="M124 188 C116 205 112 224 122 232 C128 237 134 232 130 225"
        stroke="#B0BEC8"
        strokeWidth="15"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="88" cy="278" rx="36" ry="22" fill="#A8B8C2" />
      <ellipse cx="184" cy="280" rx="36" ry="22" fill="#A8B8C2" />
      <ellipse cx="72" cy="288" rx="7" ry="5" fill="#D0DCE4" />
      <ellipse cx="86" cy="291" rx="7" ry="5" fill="#D0DCE4" />
      <ellipse cx="100" cy="289" rx="7" ry="5" fill="#D0DCE4" />
      <ellipse cx="168" cy="290" rx="7" ry="5" fill="#D0DCE4" />
      <ellipse cx="182" cy="293" rx="7" ry="5" fill="#D0DCE4" />
      <ellipse cx="197" cy="291" rx="7" ry="5" fill="#D0DCE4" />
      <circle cx="112" cy="116" r="22" fill="white" />
      <circle cx="116" cy="120" r="14" fill="#1A2433" />
      <circle cx="121" cy="114" r="5" fill="white" />
      <circle cx="158" cy="116" r="22" fill="white" />
      <circle cx="162" cy="120" r="14" fill="#1A2433" />
      <circle cx="167" cy="114" r="5" fill="white" />
      <path d="M104 96 Q114 91 124 97" stroke="#7A8A95" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M150 96 Q160 91 170 97" stroke="#7A8A95" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="96" cy="145" rx="15" ry="10" fill="#F0A0B8" opacity="0.5" />
      <ellipse cx="172" cy="145" rx="15" ry="10" fill="#F0A0B8" opacity="0.5" />
      <path d="M122 178 Q134 188 148 178" stroke="#7A8A95" strokeWidth="3" fill="none" strokeLinecap="round" />
      {showBeachBalls && (
        <>
          <circle cx="40" cy="272" r="22" fill="#fff" stroke="#ddd" strokeWidth="0.5" />
          <path d="M18 272 Q29 252 40 272 Q51 292 62 272" fill="#E8302A" opacity="0.9" />
          <path d="M40 250 Q52 261 62 272 Q52 283 40 294" fill="#FFD700" opacity="0.9" />
          <path d="M18 272 Q29 283 40 294 Q29 294 18 272" fill="#3DB8E8" opacity="0.9" />
          <circle cx="95" cy="283" r="18" fill="#fff" stroke="#ddd" strokeWidth="0.5" />
          <path d="M77 283 Q86 267 95 283" fill="#E8302A" opacity="0.9" />
          <path d="M95 265 Q104 274 113 283 Q104 292 95 301" fill="#3DB8E8" opacity="0.9" />
          <path d="M77 283 Q86 299 95 301 Q86 301 77 283" fill="#5CC85C" opacity="0.9" />
          <circle cx="178" cy="281" r="18" fill="#fff" stroke="#ddd" strokeWidth="0.5" />
          <path d="M160 281 Q169 265 178 281" fill="#3DB8E8" opacity="0.9" />
          <path d="M178 263 Q187 272 196 281 Q187 290 178 299" fill="#E8302A" opacity="0.9" />
          <path d="M160 281 Q169 297 178 299 Q169 299 160 281" fill="#FFD700" opacity="0.9" />
          <circle cx="232" cy="270" r="22" fill="#fff" stroke="#ddd" strokeWidth="0.5" />
          <path d="M210 270 Q221 250 232 270" fill="#FFD700" opacity="0.9" />
          <path d="M232 248 Q243 259 254 270 Q243 281 232 292" fill="#E8302A" opacity="0.9" />
          <path d="M210 270 Q221 281 232 292 Q221 292 210 270" fill="#3DB8E8" opacity="0.9" />
        </>
      )}
    </svg>
  )
}
