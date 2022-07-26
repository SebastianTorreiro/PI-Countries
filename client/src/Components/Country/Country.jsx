import './country.css'
import {Link} from 'react-router-dom';

export default function Country({name, id, img, continents}) {





  return (
    <div className='card'>
      <Link className='card-container-link' to={`/countries/${id}`}>
        <div className='card-container'>

          <div className='text-card'>
            {name ?  (<h2 className='name'>{name}</h2>) : <h2>NotFound</h2> }
            {/* <h2 className='name'>{name}</h2> */}

            {continents ? <h3 id='continents'>{continents}</h3> : <h3>NotFound</h3> }
          </div>

          <div className="image-card">
            {img ? (<img src={img} alt="flag"/>) : <img src='' alt="flag-no-loaded" /> }
          </div>

          {/* <div>
            <Link to={`/countries/${id}`}>
                    <button className='buton-details'>Details</button>
            </Link>
          </div> */}
        
        </div>
      </Link>
    </div>
  )
}
