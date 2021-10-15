import { render } from '@testing-library/react';
import { Header } from '../Header';

describe('[Header] Should test Header component', () => {
 it('[Header] Should render Header and match snapshot', () => {
     const { asFragment } = render(<Header />);  
     expect(asFragment()).toMatchSnapshot();
 });
});
