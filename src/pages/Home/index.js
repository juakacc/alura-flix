import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/Categories';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithMovie) => {
        setDadosIniciais(categoriesWithMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Menu />

      {dadosIniciais.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel ignoreFirstVideo category={category} />
            </div>
          );
        }
        return (
          <Carousel category={category} />
        );
      })}

    </PageDefault>
  );
}

export default Home;
