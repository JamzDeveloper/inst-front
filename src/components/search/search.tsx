"use client";
import Image from "next/image";
import SvgSearch from "../../../public/resource/svg/search.svg";
import style from "./search.module.css";
function Search(props:any) {
  console.log(props)
  return (
    <div className={style.containerSearch}>
      <input
        type="text"
        className={style.input}
        placeholder="Buscar"
        onChange={(e) => {
          console.log("event", e);
        }}
      />
      <Image src={SvgSearch} alt="ico search" />
    </div>
  );
}

export default Search;
