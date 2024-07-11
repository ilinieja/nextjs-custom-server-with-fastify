import Image from 'next/image';
import { POKEMONS } from '../../mocks';

export default function Home() {
  return (
    <main className="w-full flex flex-wrap gap-12 p-24">
      {POKEMONS.map((pokemon) => (
        <div
          key={pokemon.id}
          className="group rounded-lg border border-gray-600 px-5 py-4"
        >
          <div className="relative w-32 h-32 mb-4 rounded overflow-hidden">
            <Image fill={true} src={pokemon.image_url} alt={pokemon.name} />
          </div>
          <h2 className="text-2xl font-semibold">{pokemon.name}</h2>
          <p className="mb-2 text-sm opacity-50">{pokemon.type}</p>

          <ul className="pl-4 list-disc">
            {pokemon.abilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
