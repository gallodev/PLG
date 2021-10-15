import { render } from '@testing-library/react';
import App from './App';

describe('[APP] - Should renders app and match snapshot', () => {
  it('[APP] Should render APP and match snapshot', () => {
    const { asFragment } = render(<App />);  
    expect(asFragment()).toMatchSnapshot();
  });
});
