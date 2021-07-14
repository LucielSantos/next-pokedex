import Image from 'next/image';
import { getPokemonImageByUrl, getPokemonIdByUrl } from '../../utils/generic';
import { shimmerPlaceholder } from '../../utils/shimmerPlaceholder';

interface IProps {
  url: string;
}

export const PokemonImg = ({ url }: IProps) => {
  return (
    <Image
      src={getPokemonImageByUrl(url)}
      height={80}
      width={80}
      alt={getPokemonIdByUrl(url)}
      placeholder="blur"
      blurDataURL={shimmerPlaceholder(80, 80)}
    />
  );
};
