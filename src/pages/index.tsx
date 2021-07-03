import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getAllPokemon } from '../services/pokeApi';
import { Container, Card, Body, CardContainer } from '../styles/pages/Home';
import { IPokemonResult } from '../types/pokemonList';
import { Head, PokemonImg } from '../components';

export const getStaticProps: GetStaticProps<{ pokemon: IPokemonResult[] }> = async () => {
  const response = await getAllPokemon();

  return {
    props: {
      pokemon: response,
    },
  };
};

function Home({ pokemon }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Head title="Pokedex Next.js" />

      <section>
        <h1>Pokedex</h1>

        <h2>Exemple using Next.js</h2>

        <p>
          This example implements concepts of <b>Static Generation</b>.
        </p>
      </section>

      <Body>
        {pokemon.map(curPoke => (
          <CardContainer key={curPoke.name}>
            <Card>
              <PokemonImg url={curPoke.url} />

              <p>{curPoke.name}</p>
            </Card>
          </CardContainer>
        ))}
      </Body>
    </Container>
  );
}

export default Home;
