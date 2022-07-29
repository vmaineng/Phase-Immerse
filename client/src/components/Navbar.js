import React from 'react'
import {useSelector} from 'react-redux';

function Navbar() {
    const user = useSelector((state) => state.user.value)

    return (
    <div>Navbar {user.name}</div>
  )
}

export default Navbar