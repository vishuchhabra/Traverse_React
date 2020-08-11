import React from  'react'

const Card = ({imgURL ,title,content}) =>(
    <div className="card" style={{width: "18rem"}}>
    <img
      src={imgURL}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
<h5 className="card-title">{title}</h5>
      <p className="card-text">
        {content}
      </p>
      <a href="#" className="btn btn-success">Go somewhere</a>
    </div>
  </div>
)

export default Card