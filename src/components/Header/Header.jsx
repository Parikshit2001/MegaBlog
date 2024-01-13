import React, { useState } from 'react'
import { Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [selectedItem, setSelectedItem] = useState(null);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: !authStatus
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
    name: "My Posts",
    slug: "/my-posts",
    active: authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const handleItemClick = (item, index) => {
    setSelectedItem(index);
    navigate(item.slug);
  };

  return (
    <header className='py-3 shadow bg-gray-500'>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item, index) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => handleItemClick(item, index)}
                className={`inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ${selectedItem === index ? 'bg-blue-100' : ''}`}
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
    </header>
  )
}

export default Header