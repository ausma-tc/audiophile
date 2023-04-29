import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CategoryItem from "../../components/Category-item/Category-item";
import Button from "../../components/Button/Button";
import ReactMarkdown from "react-markdown";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

// Medias
import ImgHeadphonesCategory from "../../assets/medias/home/image-headphones.png";
import ImgSpeakersCategory from "../../assets/medias/home/image-speakers.png";
import ImgEarphonesCategory from "../../assets/medias/home/image-earphones.png";
import ImgAboutSection from "../../assets/medias/home/desktop/image-best-gear.jpg";

import "./ProductDetail.scss";

function Detail({ element }) {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);

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

  const dispatch = useDispatch();

  // Add span around li section "features"
  const spanningInTheBox = () => {
    const li = document.querySelectorAll(".col-in-the-box ul li");
    if (li) {
      li.forEach((li) => {
        const text = li.textContent;
        const span = document.createElement("span");
        span.textContent = text.substring(0, 2);
        li.innerHTML = `<span class='nbr-tools'>${text.substring(
          0,
          2
        )}</span><span class='tools'>${text.substring(2)}</span>`;
      });
    }
  };
  spanningInTheBox();

  return (
    <div className="detail">
      {loading ? (
        "loading"
      ) : (
        <>
          <button onClick={goBack} className="btn btn-goBack">
            Go back
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
                  <button
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    className="btn-quantity"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="btn-quantity"
                  >
                    +
                  </button>
                </div>
                <Button
                  className="primary"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.Title,
                        desc: data.attributes.Description,
                        price: data.attributes.Price,
                        img: data.attributes.Image.data.attributes.url,
                        quantity,
                      })
                    )
                  }
                  text="Add to cart"
                />
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.Title,
                        desc: data.attributes.Description,
                        price: data.attributes.Price,
                        img: data.attributes.Image.data.attributes.url,
                        quantity,
                      })
                    )
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <section className="features">
            <div className="col-features">
              <h3>Features</h3>
              <ReactMarkdown
                className="description"
                children={data?.attributes?.Features}
              />
            </div>
            <div className="col-in-the-box">
              <h3>In the box</h3>
              <ReactMarkdown children={data?.attributes?.Box} />
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
            <h3>You may also like</h3>
            <div className="wrapper-card">
              <div className="card-product">
                <div className="image">
                  <img src={ImgHeadphonesCategory} alt="" />
                </div>
                <h4>XX 99 MARK I</h4>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="See product"
                />
              </div>
              <div className="card-product">
                <div className="image">
                  <img src={ImgSpeakersCategory} alt="" />
                </div>
                <h4>XX59</h4>
                <Button
                  className="primary"
                  link={`/headphones/${data.id}`}
                  text="See product"
                />
              </div>
              <div className="card-product">
                <div className="image">
                  <img src={ImgEarphonesCategory} alt="" />
                </div>
                <h4>ZX9 SPEAKER</h4>
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
