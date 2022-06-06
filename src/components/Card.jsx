import './Card.css';

function Card(props) {

    return (
        <div className='card'>
            {props.data.firstname} {props.data.lastname}{props.data.age}
            

        </div>
    )

}

export default Card;