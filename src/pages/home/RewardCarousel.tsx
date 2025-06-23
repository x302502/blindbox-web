import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function RewardCarousel() {
  return (
    <Carousel
      dots={false}
      infinite={true}
      slidesToShow={10}
      autoplay={true}
      speed={1000}
      autoplaySpeed={500}
      cssEase="linear"
    >
      {Array.from({ length: 20 }, (_, index) => (
        <div key={index}>
          <h3 style={contentStyle}>{index + 1}</h3>
        </div>
      ))}
    </Carousel>
  );
}
