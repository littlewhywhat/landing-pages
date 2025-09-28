import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 192,
  height: 192
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'conic-gradient(from 120deg, #7c3aed, #22d3ee, #7c3aed)',
          color: 'white',
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif'
        }}
      >
        Tz
      </div>
    ),
    size
  );
}
