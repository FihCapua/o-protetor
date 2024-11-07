'use client';

import { TextComponent, TitleComponent } from "@/components/Typography";
import { ButtonComponent, CardGrid, FullWidthBlock, GameCard, GameCategory, GameImage, GameTitle } from "./style";
import gamesMock from "@/mocks/mock-games/games.json";
import Link from "@/components/Link";

const GamesList = () => {
    return (
      <FullWidthBlock>
        <TitleComponent as="h2">Jogos que estimulam a mente</TitleComponent>
        <TextComponent as="p">
          Estimule agora sua mente com jogos que ajudam na memória e cognição.
        </TextComponent>
        <CardGrid>
          {gamesMock.map((game) => (
            <GameCard key={game.id}>
              <GameImage src={game.appImage} alt={game.appName} width={180} height={180} />
              <GameTitle>{game.appName}</GameTitle>
              <GameCategory>{game.category}</GameCategory>
              <Link href={game.link.playstore}>
                <ButtonComponent>Jogar Agora</ButtonComponent>
              </Link>
            </GameCard>
          ))}
        </CardGrid>
      </FullWidthBlock>
    );
  };
  
export default GamesList;