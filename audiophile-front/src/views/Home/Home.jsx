import React from "react";

import Button from "../../components/Button/Button";
import CategoryItem from "../../components/Category-item/Category-item";

// Medias
import ImgHeadphonesCategory from "../../assets/medias/home/image-headphones.png";
import ImgSpeakersCategory from "../../assets/medias/home/image-speakers.png";
import ImgEarphonesCategory from "../../assets/medias/home/image-earphones.png";
import ImgMainProduct from "../../assets/medias/home/desktop/image-speaker-zx9.png";
import ImgThirdProduct from "../../assets/medias/home/desktop/image-earphones-yx1.jpg";
import ImgAboutSection from "../../assets/medias/home/desktop/image-best-gear.jpg";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <section className="hero-banner">
        <div className="text-hero-banner">
          <h2 className="overline">New product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p className="description">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="primary" link="/headphones" text="See product" />
        </div>
      </section>
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
      <section className="features-section">
        <div className="main-product-content">
          <div className="col-left">
            <img src={ImgMainProduct} alt="ZX9 speaker" />
          </div>
          <div className="col-right">
            <div className="content-right">
              <h3 className="h1">ZX9 speaker</h3>
              <p className="description">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                className="secondary"
                link="/headphones"
                text="See product"
              />
            </div>
          </div>
        </div>

        <div className="second-product-content">
          <div className="content-left">
            <h3>ZX7 speaker</h3>
            <Button className="outline" link="/headphones" text="See product" />
          </div>
        </div>

        <div className="third-product-content">
          <div className="image-container">
            <img src={ImgThirdProduct} alt="YX1 Earphones" />
          </div>
          <div className="text-container">
            <h3>YX1 earphones</h3>
            <Button className="outline" link="/headphones" text="See product" />
          </div>
        </div>
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
