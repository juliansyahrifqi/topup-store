import { useEffect, useState } from 'react';
import axios from 'axios';
import GameItem from '../../molecules/GameItem';

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://topupstore.herokuapp.com/api/v1/players/landingpage');

      setGameList(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => (
            <GameItem key={item._id} thumbnail={`https://topupstore.herokuapp.com/uploads/${item.thumbnail}`} title={item.name} category={item.category.name} />
          ))}

          {/* <GameItem thumbnail="/img/Thumbnail-1.png" title="Super Mechs" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-2.png" title="Call of Duty: Modern" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-3.png" title="Mobile Legends" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-4.png" title="Clash of Clans" category="Mobile" />
          <GameItem thumbnail="/img/Thumbnail-5.png" title="Valorant" category="Desktop" /> */}

        </div>
      </div>
    </section>
  );
}
