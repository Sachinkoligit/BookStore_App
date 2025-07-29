import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import FetchBook from "./FetchBook";

export default function Freebook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const free = [];
  const book = FetchBook();
  book.filter((x) => {
    if (x.category === "Free") {
      free.push(x);
    }
  });
  return (
    <>
      <div className="md:px-20 px-2 pb-2">
        <h1 className="font-bold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est
          distinctio at alias voluptates odio obcaecati, in a aliquam id!
        </p>
      </div>
      <div className="md:px-20 px-2 pb-2">
        <Slider {...settings}>
          {free.map((item) => {
            return (
              <Cards
                img="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
                item={item}
                key={item.id}
                className="w-[99%] h-[450px]"
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
