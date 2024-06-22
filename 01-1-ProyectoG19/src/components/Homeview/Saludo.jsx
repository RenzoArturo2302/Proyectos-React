import React from "react";
import "./home-view.css";

const Saludo = () => {
  return (
    <div className="home-view">
      <h1>Welcome to Prime Forum!</h1>
      <h2>Nuevas publicaciones</h2>
      <div className="image-carrusel">
        <img src="src\assets\img\news-800x500-3.jpg" alt="" />
      </div>
      <h2>Nuevas publicaciones</h2>
      {/* <p>
        Lorem ipsum dolr sit amet consectetur adipisicing elit. Recusandae
        mollitia, sequi minus quasi eaque magnam labore officia, laborum
        corrupti accusantium natus temporibus perferendis omnis eligendi harum
        unde inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Recusandae mollitia,
        sequi minus quasi eaque magnam labore officia, laborum corrupti
        accusantium natus temporibus perferendis omnis eligendi harum unde
        inventore? Qui, odio.100 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Recusandae mollitia, sequi minus quasi eaque magnam
        labore officia, laborum corrupti accusantium natus temporibus
        perferendis omnis eligendi harum unde inventore? Qui, odio.100 Lorem i
      </p> */}
    </div>
  );
};

export default Saludo;
