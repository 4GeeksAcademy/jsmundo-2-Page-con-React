import React from 'react'

const Card = () => {
  return (
    <div className="row ">
    <div className="col">
      <div className="card" style={{ width: 250, height: 400 }}>
        <div className="card-body"> 
        <img src="https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-carretera-paisaje-montanas-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" className="w-100" />
          <h5 className="card-title d-flex justify-content-center p-2">Card title</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid corporis voluptate praesentium debitis enim at blanditiis rem sapiente 
          </p>
        </div>
        <div className="card-footer d-flex justify-content-center">
        <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Card