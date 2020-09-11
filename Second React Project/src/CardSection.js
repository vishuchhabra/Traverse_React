import React from 'react'
import Card  from  './Card'

export default function () {
    return (
        <div>
            <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card imgURL="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title ="Card title" content ="Some quick example text to build on the card title and make up
        the bulk of the card's content." />
           
          </div>
          <div className="col-4">
           <Card imgURL="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title ="Card title" content ="Some quick example text to build on the card title and make up
        the bulk of the card's content." />
          </div>
          <div className="col-4">
          <Card imgURL="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title ="Card title" content ="Some quick example text to build on the card title and make up
        the bulk of the card's content." /></div>
        </div>
      </div>
    </section>
            
        </div>
    )
}
