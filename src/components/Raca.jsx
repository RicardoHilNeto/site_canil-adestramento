
import styled from 'styled-components';
import Fal from '../assets/CampeonatoFal.jpeg';
import Tank from '../assets/Tank.png';

const Info = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
`;

const Left = styled.div`
  background-image: url(${Tank});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 33.3%;
  height: 80vh;
`;

const Center = styled.div`
  width: 33.3%;
  height: 80vh;
  padding: 10px;
  overflow: auto; /* Adicionado para habilitar scroll se o conteúdo for muito longo */
`;

const Right = styled.div`
  background-image: url(${Fal});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 33.3%;
  height: 80vh;
`;

function Raca() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Pastor Belga Malinois</h1>
        <Info>
          <Left></Left>
          <Center>
            <p>
              Originário na região de Malines, nordeste da Bélgica, o Malinois é historicamente um cão pastor e protetor do quintal e da família, características que o tornam hoje igualmente importantes para seus tutores.
              <br/><br/>
              O Pastor Belga Malinois, é um exímio cão de trabalho, sendo muitas vezes mencionado como a "Ferrari dos cães ".
              <br/><br/>
              Os talentos deste cão são ilimitados, ele desempenha com excelência os mais variados tipos de trabalho. A coragem sem limites, aliada à grande disposição, fazem com que essa raça seja utilizada em diversas funções, desde pastoreio, faro, guarda, além de patrulhamento. É hoje uma das raças mais utilizadas pela polícia no mundo inteiro. O Malinois é, ainda, um grande atleta que se destaca em diversas provas e esportes, como o Mondioring, IGP, Show Dog, Canicross, mergulho, saltos, entre outros.
              <br/><br/>
              O Pastor Belga Malinois tem um porte atlético, esbelto e elegante. Em virtude de sua estrutura física, é considerado uma raça incrivelmente versátil, por isso, vem, cada vez mais, ganhando popularidade no mundo todo. Ao mesmo tempo que é capaz de realizar com destreza diversos tipos de trabalho, é um maravilhoso cão de companhia, fiel, protetor, e amoroso com toda a família.
              <br/><br/>
              Se bem sociabilizado, e adestrado da maneira correta, o Malinois pode ser uma grande companhia para toda a família, fazendo parte do dia-a-dia em praticamente tudo quanto é ambiente, participando em brincadeiras, atividades físicas, esportes, passeios de carro ou barco e ao mesmo tempo desempenhando um importante papel de protetor em todas essas situações.
              <br/><br/>
              É um cão que tem uma saúde acima da média, praticamente livre de doenças genéticas, e realmente muito rústico.
            </p>
          </Center>
          <Right></Right>
        </Info>
      </>
    );
  }

export default Raca;
