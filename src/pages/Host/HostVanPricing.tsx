import { useVanPrice } from './hooks/useVanPrice';

export default function HostVanPricing() {
  const { price } = useVanPrice();

  return (
    <p className='text-lg font-bold'>${price}<span className='font-normal'>/day</span></p>
  )
}
