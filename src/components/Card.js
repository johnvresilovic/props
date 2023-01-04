import CardImage from "./CardImage";
import CardBody from "./CardBody";

export default function Card1(props) {
  return (
    <div className="card" style={{width:'18rem'}}>
    <CardImage img={props.img} />
    <CardBody title={props.title} text={props.text} url={props.url} />
  </div>
  );
}