import CardImage from "./CardImage";
import CardBody from "./CardBody";

export default function Card1({img, title, text, url}) {
  return (
    <div className="card" style={{width:'18rem'}}>
    <CardImage img={img} />
    <CardBody title={title} text={text} url={url} />
  </div>
  );
}