import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Toolz — Productive tools for your flow';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: 'radial-gradient(circle at top left, #7c3aed, #0f172a)',
          color: 'white',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.8 }}>Toolz</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 20, maxWidth: 720 }}>
          Productive tools for your flow
        </div>
        <div style={{ fontSize: 28, opacity: 0.8, marginTop: 20 }}>
          simple focused apps only
        </div>
      </div>
    ),
    size
  );
}
