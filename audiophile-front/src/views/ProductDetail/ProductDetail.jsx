import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CategoryItem from "../../components/Category-item/Category-item";
import Button from "../../components/Button/Button";

// Medias
import ImgHeadphonesCategory from "../../assets/medias/home/image-headphones.png";
import ImgSpeakersCategory from "../../assets/medias/home/image-speakers.png";
import ImgEarphonesCategory from "../../assets/medias/home/image-earphones.png";
import ImgAboutSection from "../../assets/medias/home/desktop/image-best-gear.jpg";

import "./ProductDetail.scss";

function Detail({ element }) {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  // console.log(data?.attributes?.Galeries);
  console.log();

  // Back to precedent page
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Add to cart
  const [quantity, setQuantity] = useState(1);
  const incremCount = () => {
    setQuantity(quantity + 1);
  };
  const decremCount = () => {
    quantity > 0 ? setQuantity(quantity - 1) : null;
  };

  return (
    <div className="detail">
      {loading ? (
        "loading"
      ) : (
        <>
          <button onClick={goBack} className="btn btn-goBack">
            Back
          </button>

          <div className="card">
            <div className="image">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data.attributes?.Image?.data?.attributes?.url
                }
                alt={data.attributes?.Image?.data?.attributes?.alternativeText}
                className="mainImg"
              />
            </div>
            <div className="content">
              {data?.attributes?.isNew && (
                <span className="overline">New product</span>
              )}
              <h2>{data?.attributes?.Title}</h2>
              <p className="description">{data?.attributes?.Description}</p>
              <p className="price">${data?.attributes?.Price}</p>
              <div className="wrapper-add-to-cart">
                <div className="quantity-box">
                  <button onClick={decremCount}>
                    <svg
                      width="12"
                      height="4"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                          id="a"
                        />
                      </defs>
                      <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                    </svg>
                  </button>
                  <p>{quantity}</p>
                  <button onClick={incremCount}>
                    <svg
                      width="12"
                      height="12"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                          id="b"
                        />
                      </defs>
                      <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
                    </svg>
                  </button>
                </div>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="Add to cart"
                />
              </div>
            </div>
          </div>

          <section className="features">
            <div className="col-features">
              <h3>Features</h3>
              <p className="description">{data?.attributes?.Features}</p>
            </div>
            <div className="col-in-the-box">
              <h3>In the box</h3>
              <p>{data?.attributes?.Box}</p>
            </div>
          </section>

          <section className="gallery">
            <div className="wrapper-gallery">
              <div className="image1">
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.Galeries?.data[0]?.attributes?.url
                  }
                  alt={
                    data?.attributes?.Image?.data[0]?.attributes
                      ?.alternativeText
                  }
                  className="img"
                />
              </div>
              <div className="image2">
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.Galeries?.data[1]?.attributes?.url
                  }
                  alt={
                    data?.attributes?.Image?.data[1]?.attributes
                      ?.alternativeText
                  }
                  className="img"
                />
              </div>
              <div className="image3">
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.Galeries?.data[2]?.attributes?.url
                  }
                  alt={
                    data?.attributes?.Image?.data[2]?.attributes
                      ?.alternativeText
                  }
                  className="img"
                />
              </div>
            </div>
          </section>

          <section className="related-products">
            <h2>You may also like</h2>
            <div className="wrapper-card">
              <div className="card-product">
                <div className="image">{/* <img src="" alt="" /> */}</div>
                <h3>XX 99 MARK I</h3>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="See product"
                />
              </div>
              <div className="card-product">
                <div className="image">{/* <img src="" alt="" /> */}</div>
                <h3>XX59</h3>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="See product"
                />
              </div>
              <div className="card-product">
                <div className="image">{/* <img src="" alt="" /> */}</div>
                <h3>ZX9 SPEAKER</h3>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="See product"
                />
              </div>
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

          <section className="about-section">
            <div className="text-container">
              <h2>
                Bringing you the <span className="text-color">best</span> audio
                gear
              </h2>
              <p className="description">
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <div className="image-container">
              <img src={ImgAboutSection} alt="Man listen some music" />
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Detail;
