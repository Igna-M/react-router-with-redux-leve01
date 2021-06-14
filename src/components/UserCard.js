import React from 'react'
import { connect } from 'react-redux';
import { deleteCard, fetchUsers } from '../actions/CardActions'

class UserCard extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
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
        const user = this.props.user;
        return (
            <div 
                className="ui raised very padded text container segment" 
                style={{marginTop:'80px'}}
            >
                <h3 className="ui header">{user.name}</h3>    
                <p>{user.username}:</p>
                <p>{user.email}</p>
                <h4>{user.address.city}</h4>
                {/* <button className="ui primary right floated button" onClick={this.onButtonClick}>
                    Delete
                </button> */}
                {/* <p>About: You can now view 12_react_router_redux in the browser.</p> */}
            </div>
        )

    }
    
}


const mapStateToProps = (state, ownProps) =>{
    let username = ownProps.match.params.username;
    return {
        user: state.users.find(user => user.username === username),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deleteCard: (id) => { dispatch(deleteCard(id))},
        fetchUsers: ( () => { dispatch(fetchUsers())})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCard);