import { useOutletContext } from 'react-router-dom';

import { ContextType } from '../types';

export function useVanPhotos() {
  const { van } = useOutletContext<ContextType>();

  return {
    imageUrl: van.imageUrl,
    alt: van.name
  };
}
