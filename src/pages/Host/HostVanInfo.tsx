import { useVanInfo } from './hooks/useVanInfo';

export default function HostVanInfo() {
  const { name, category, description } = useVanInfo();

  return (
    <div className="flex flex-col gap-2 text-sm">
      <p><b>Name: </b>{name}</p>
      <p><b>Category: </b>{category}</p>
      <p><b>Description: </b>{description}</p>
      <p><b>Visibility: </b>Public</p>
    </div>
  );
}
