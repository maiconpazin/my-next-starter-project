import { render, screen } from '@testing-library/react';

import Homepage from '@/components/pages/Home';

export function mockFetch(data: unknown) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

describe('HomePage', () => {
  it('renders the Components', () => {
    window.fetch = mockFetch({});
    render(<Homepage />);

    const heading = screen.getByText('Consórcio');

    expect(heading).toBeInTheDocument();
  });
});
