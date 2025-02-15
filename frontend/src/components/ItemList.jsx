import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //props items e title

  const { pathname } = useLocation(); // desestruturando o objeto para consumir somente o pathname

  const isHome = pathname === "/";

  const finalItems = isHome ? items : Infinity; //se estiver na home, limita os números, senao, exibe tudo

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems) //filtra e faz um loop baseado no limite de items
          .map((currObj, index) => (
            <SingleItem
            {...currObj} //copia todas as chaves dos obj
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
