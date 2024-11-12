import { useVanPhotos } from './hooks/useVanPhotos';

export default function HostVanPhotos() {
  const { imageUrl, alt } = useVanPhotos();

  return (
    <img src={imageUrl} alt={alt} width={70} />
  )
}
