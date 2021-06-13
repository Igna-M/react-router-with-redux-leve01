import React from 'react';
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';


const Contact = ({ cards }) => {
    // console.log(props.cards);
    return (
        <div>
            {/* <Modal /> */}
            { cards.map( card => {
                return(
                    <div 
                        className="ui raised very padded text container segment" 
                        style={{marginTop:'80px'}}
                        key={card.id}
                    >
                        <Link to={`/${card.title}`} className="ui header">{card.title}</Link>    
                        <p>Contact: {card.body}</p>
                    </div>
                )
            })}
            
            {/* <div 
                className="ui raised very padded text container segment" 
                style={{marginTop:'80px'}}
            >
                <Link to="/willma" className="ui header">Willma</Link>    
                <p>Contact: You can now view 12_react_router_redux in the browser.</p>
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        cards: state.cards
    }
}


export default connect(mapStateToProps)(Contact);