import { render, screen } from '@testing-library/react';

import QuotasTitle from '@/components/organisms/QuotasTitle';

describe('QuotasTitle', () => {
  it('renders the Components', () => {
    render(<QuotasTitle />);

    const heading = screen.getByText('Cotas Contempladas');

    expect(heading).toBeInTheDocument();
  });
});
