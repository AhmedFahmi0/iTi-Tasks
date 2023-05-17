import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let MusicianDetails = ()=>{
    //1- Get ID
    let {id} = useParams();//{}
    let [musician, setMusician] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:3500/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            // console.log(data);
            setMusician(data);
        })
        .catch((err)=>{console.log(err)});
    },[id])
    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={musician.cover}
              alt={musician.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{musician.name}</h2>
            <p>{musician.bio}</p>
            <p>
              <strong>Genre:</strong> {musician.genre}
            </p>
          </div>
        </div>
  
     
          {musician.albums && musician.albums.length > 0 ? (
            <>
              <h3>Albums</h3>
              <div className="row">
                {musician.albums.map((album) => (
                  <div key={album.albumId} className="col-md-3">
                    <div className="card mb-4 d-flex flex-column align-items-center">
                      <img
                        src={album.image}
                        alt={album.tite}
                        className="my-3"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{album.title}</h5>
                        <p className="card-text">
                          <strong>Year:</strong> {album.year}
                        </p>
                        <p className="card-text">
                          <strong>Price:</strong> {album.price}$
                        </p>
                        {/* <button className="btn btn-primary" type="button">
                          Add to Cart
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>No albums found.</p>
          )}
        </div>
    )
}

export default MusicianDetails;