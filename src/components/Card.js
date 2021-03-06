import React from 'react'
import { connect } from 'react-redux';
import { deleteCard, fetchUsers } from '../actions/CardActions'

class Card extends React.Component {

    // state = {
    //     user: ''
    // }

    componentDidMount(){
        let user = this.props.match.params.user
        this.setState({user:user})
        // this.props.fetchUsers()
    }

    onButtonClick = () => {
        let id = this.props.card.id;
        this.props.deleteCard(id);
        this.props.history.push('/contact');
    }

    render(){
        // const { user } = this.state
        // console.log(this.props);
        // console.log(this.props.users);
        const { title, body } = this.props.card;
        return (
            <div 
                className="ui raised very padded text container segment" 
                style={{marginTop:'80px'}}
            >
                <h3 className="ui header">{title}</h3>    
                <p>{body}</p>
                <button className="ui primary right floated button" onClick={this.onButtonClick}>
                    Delete
                </button>
                {/* <p>About: You can now view 12_react_router_redux in the browser.</p> */}
            </div>
        )

    }
    
}


const mapStateToProps = (state, ownProps) =>{
    let title = ownProps.match.params.user;
    return {
        card: state.cards.find(card => card.title === title),
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id))},
        // fetchUsers: ( () => { dispatch(fetchUsers())})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);