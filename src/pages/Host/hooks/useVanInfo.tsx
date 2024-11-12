import { useOutletContext } from 'react-router-dom';

import { ContextType } from '../types';

export function useVanInfo() {
  const { van } = useOutletContext<ContextType>();

  return {
    name: van.name,
    category: van.type,
    description: van.description
  };
}
