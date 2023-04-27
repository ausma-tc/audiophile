import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import useFetch from "../../hooks/useFetch";

import CategoryItem from "../../components/Category-item/Category-item";
// Medias
import ImgHeadphonesCategory from "../../assets/medias/home/image-headphones.png";
import ImgSpeakersCategory from "../../assets/medias/home/image-speakers.png";
import ImgEarphonesCategory from "../../assets/medias/home/image-earphones.png";
import ImgAboutSection from "../../assets/medias/home/desktop/image-best-gear.jpg";
import './Headphones.scss';

function Headphones({ category }) {
  const { data, loading, error } = useFetch(
    `/products?filters[categories][id][$eq]=1&populate=*`
  );
  return (
    <div className="list-products">
      <div className="entete">
        {error
          ? "Something went wrong !"
          : loading
          ? "loading"
          : data?.map((item, i) => (
              <h1 key={item.id}>
                {item.attributes.categories.data[0].attributes.Name}
              </h1>
            ))[0]}
      </div>
      <div className="products-section">
        <div className="bottom">
          {error
            ? "Something went wrong !"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
        <div className="top-product"></div>
      </div>
      <section className="categories-section">
        <CategoryItem
          imgSrc={ImgHeadphonesCategory}
          imgAlt="Headphone shop"
          headingTitle="Headphones"
          linkClassName="01"
          linkComponent="/headphones"
          linkText="Shop"
        />
        <CategoryItem
          imgSrc={ImgSpeakersCategory}
          imgAlt="Speakers shop"
          headingTitle="Speakers"
          linkClassName="01"
          linkComponent="/headphones"
          linkText="Shop"
        />
        <CategoryItem
          imgSrc={ImgEarphonesCategory}
          imgAlt="Earphones shop"
          headingTitle="Earphones"
          linkClassName="01"
          linkComponent="/headphones"
          linkText="Shop"
        />
      </section>
      <section className="about-section">
        <div className="text-container">
          <h2>Bringing you the <span className="text-color">best</span> audio gear</h2>
          <p className="description">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="image-container">
          <img src={ImgAboutSection} alt="Man listen some music" />
        </div>
      </section>
    </div>
  );
}

export default Headphones;
