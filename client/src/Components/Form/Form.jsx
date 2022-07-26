import React,{useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { postActivity, getAllCountries } from '../../Actions/actionCreator'
import './form.css'
import Swal from 'sweetalert2'


function Form({countries, postActivity, getAllCountries, activities}) {

    const [input, setInput] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[]
    })

    useEffect(() =>{
        getAllCountries();
      },[])


    const [errors, setErrors] = useState({})
    const history = useNavigate()
// usar tanto en el submit 
    function validate(input){
        let error = {};
        if(!input.name){
            error.name = 'Name required'
        }
        if(!(/^[A-Za-z\s]*$/.test(input.name))){
            error.name = 'Name can only have letters and spaces'
        }
        if(activities.includes(input.name)){
            error.name = 'An activity with that name already exists'
        }
        return error;
    }
//SERIALIZER ---> BACK : BUSCAR 
    function handleName(e){
        setInput((prev) =>( {
            ...prev,
            [e.target.name]: e.target.value.toLowerCase()
        }))
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    function handleSelect(e){
        setInput((prev) =>( {
            ...prev,
            countries: [...input.countries, e.target.value]
        }))
    }

    function handleSeason(e){
        console.log(e.target.name)
        console.log(e.target.value)
        setInput({
            ...input,
            season: e.target.value
        })
    }

    function handleDificulty(e){
        setInput((prevState)=>({
            ...prevState,
            difficulty: e.target.value
        }))
    }
    
    function handleDuration(e){
        setInput((prevState)=>({
            ...prevState,
            duration: e.target.value
        }))
    }

    function handleDelete(e) {
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(errors.hasOwnProperty('name')){
            // alert('Name have an error')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name have an error',
              })
        }else{
            // console.log(input)
            postActivity(input)
            //Buena practica no usar action si no hay necesidad. React y redux cosas separadas  
            setInput({
                name:'',
                difficulty:'',
                duration:'',
                season:'',
                countries:[]
            })
            // console.log(history)
            history('/countries')
            Swal.fire({
                icon:'success',
                text:'Activity created successfully',
            })
        }
      

    }

    const season = ['winter', 'spring', 'autumn', 'summer'];
    const difficulty = [1, 2, 3, 4, 5];
    const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];



    return (
    <div className="container-form">
        <h2>Add Activity</h2>
            <form onSubmit={handleSubmit}>
                <div className="activity">
                    <div className='input-activity'>
                        <label htmlFor="">Activity:</label>
                        <input
                        autoComplete='off'
                        className={errors.name && 'danger'}
                        type="text" 
                        value={input.name} 
                        name='name' 
                        onChange={handleName}
                        placeholder='Activity name..'
                        required
                        />
                     </div>
                     {errors.name && <p id='error-activity'>{errors.name}</p>}
                </div>
                <div className="season">
                    <label htmlFor="">Season:</label>
                    <select onChange={handleSeason} required>
                        <option value="">Select season:</option>
                        {season.map((s)=>(
                            <option value={s} name='season' key={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="difficulty">
                    <label >Difficulty:</label>
                    <select onChange={handleDificulty} required>
                            <option value="">Choose an option (1-5):</option>
                            {difficulty.map((d)=>(
                                <option value={d} name='difficulty' key={d}>{d}</option>
                            ))}
                    </select>
                </div>
                <div className="duration">
                    <label>Duration:</label>
                    <select onChange={handleDuration} required>
                            <option value="">Choose and option(1-24):</option>
                            {duration.map((d) =>(
                                <option key={d} value={d} name='duration'>{d}</option>
                            ))}
                    </select>

                </div>
                <div className="country">
                    <label>Country:</label>
                    <select onChange={handleSelect} required>
                        <option value="">Select country:</option>
                    {countries.map((c) =>(
                        <option key={c.id} value={c.id} name='country'>{c.name}</option>
                    ))}
                    </select>
                </div>
                <div>
                    <ul>
                        <li className='countriesSelected'>
                            {input.countries.map((i) =>(
                                <div key={i} className='text-delete'>
                                    {i}
                                    <button className='button-delete' onClick={()=> handleDelete(i)} type='button'>x</button>
                                </div>
                            ))}

                        </li>
                    </ul>
                </div>
                <div className='buttons'>
                    <div>
                        <Link className='button-cancel-activitie' to='/countries'>
                            <button>Cancel</button>
                        </Link>
                    </div>
                    <div>
                        <button className='button-add-activitie' type="submit">Add Activity</button>
                    </div>
                </div>

            </form>
    </div>
    )


}
    
const mapStateToProps = (state) =>{
return {
    countries: state.countriesReference,
    activities: state.activities

}
}


export default connect(mapStateToProps,{postActivity, getAllCountries })(Form);