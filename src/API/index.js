import react, { useEffect, useState } from 'react';
import './style.css';

function Apicalling() {

    const [user, setUser] = useState([]);
    // const[load,setLoad]=useState(false);

    const FetchData = () => {
        return fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,0,30,4,25,777,10,11"
        )
            .then((Response) => Response.json())
            .then((anita) => {
                console.log(`====>> anita>>>>>>`, anita)
                setUser(anita)
            });
    }
    useEffect(() => {
        FetchData();
    }, [])
    return (
        <>
        <div className="title"><h1>THE Rick and Morty API</h1></div>
            <div className="center">
                {
                    // user && 
                    // user.length &&
                    user.map((item) => (
                        <>

                            <div className="wrapper">
                                <div className="card">


                                    <div className="card-design">   

                                        <img className='img' src={item.image} />

                                        <div className="font">
                                            <div className="part-1">
                                                <h1 className='text-hover'>{item.name}</h1>
                                                <div className="round">
                                                    <div className={
                                                        (item.status === "Dead") ? "red" : "green"
                                                    }></div>

                                                    {item.species}-{item.status}
                                                </div>
                                            </div>
                                            <div className="part-2">
                                                <div className="locastion">
                                                    Last known location:
                                                </div>
                                                <div className="text-hover">{item.location.name} </div>
                                            </div>
                                            <div className="part-3">
                                                <div className="first ">
                                                    First seen in:
                                                </div>
                                                <div className="text-hover">{item.gender}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>


                    ))
                }



            </div>
        </>
    );
}
export default Apicalling;