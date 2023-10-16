import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import "../../styles/about.css"

const About = () => {
    const { store, actions } = useContext(Context);
    let params = useParams();
    console.log(params);
    let item = store[`${params.type}`][`${params.id}`];
    console.log(item);
    let fields;

    if (params.type === 'people') {
        fields = (
            <div className='fixed-about'>
                <div className='top'>
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.id) + 1}.jpg`}
                        onError={(e) => {
                            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                        }}
                    />
                    <div><h2 className="char-title">{item?.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    </p>
                    </div>
                </div>
                    <hr></hr>
                <div className='bottom'>
                    <h2>{item?.name}</h2>
                    <h2>{item?.mass}</h2>
                    <h2>{item?.skin_color}</h2>
                    <h2>{item?.eye_color}</h2>
                </div>
            </div>
        );
    } else if (params.type === "planets") {
        fields = (
            <div>
                <h2>{item?.name}</h2>
                <h2>{item?.population}</h2>
            </div>
        );
    }
    return (
        <div>{fields}</div>
    );
};

export default About;
