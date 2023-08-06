import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
interface Props {
  label: string;
}

export default function Empty({ label }: Props) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <Player
        autoplay
        loop
        src="/assets/animation/empty.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}
