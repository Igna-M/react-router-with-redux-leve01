import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/CardActions'

class Users extends React.Component {

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        // console.log('USERSSSSSS');
        console.log(this.props.users);
        const users = this.props.users;
        console.log(users);
        return (
            <div>
                { users.map( user => {
                    return(
                        <div 
                            className="ui raised very padded text container segment" 
                            style={{marginTop:'80px'}}
                            key={user.id}
                        >
                            <Link to={`user/${user.username}`} className="ui header">{user.name}</Link>    
                            <p>User Name: {user.username}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        cards: state.cards,
        users: state.users
    }
}


// const mapStateToProps = (state, ownProps) =>{
//     let title = ownProps.match.params.user;
//     return {
//         card: state.cards.find(card => card.title === title),
//         users: state.users
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: ( () => { dispatch(fetchUsers())})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);