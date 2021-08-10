import React from 'react';
import PropTypes from 'prop-types';


const UserItem = ({user: {login, avatar_url, html_url}}) => {

    return (
        <div className='card text-center'>
            <img src= {avatar_url} 
            className='roung-img' 
            style={{ width: '60px'}} alt=''>
            </img>
            <h3>{login}</h3>
            <div>
            <a href={html_url} className='btn btn-dark btn-sm my-1'>
                More
            </a>
            </div>
        </div>
    )
    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem

/*
The final code for this project can be found in this Github repo:

https://github.com/bradtraversy/github-finder



Docs for the Github API:

https://developer.github.com/v3/



To Register Your Github App & Get Keys:

https://github.com/settings/applications/new

https://api.github.com/users

https://api.github.com/search/users?q=brad

https://api.github.com/users/bradtraversy

https://api.github.com/users/bradtraversy/repos
*/
