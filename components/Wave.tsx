export function WaveBottom({ fill = '#ffffff' }: { fill?: string }) {
  return (
    <div className="wave-bottom" style={{ lineHeight: 0 }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={fill} />
      </svg>
    </div>
  )
}

export function WaveTop({ fill = '#ffffff' }: { fill?: string }) {
  return (
    <div style={{ lineHeight: 0, marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
        <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  )
}
