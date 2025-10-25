import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0097ea 0%, #0b1220 100%)',
          color: 'white',
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        DREAM FINDS COMPANY
      </div>
    ),
    { ...size }
  )
}
