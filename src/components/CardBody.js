import Button from "./Button"

export default function CardBody({title, text, url}) {
  return (
     <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <Button url={url}/>
    </div>
  )
}