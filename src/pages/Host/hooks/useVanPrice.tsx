import { useOutletContext } from 'react-router-dom';

import { ContextType } from '../types';

export function useVanPrice() {
  const { van } = useOutletContext<ContextType>();

  return {
    price: van.price
  };
}
