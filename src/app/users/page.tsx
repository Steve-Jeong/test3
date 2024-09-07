import React from 'react'

type User = {
  id : number,
  name : string,
}

const Users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users : User[] = await res.json()

  return (
    <div>
      <div className='text-lg font-bold mb-4'>Users</div>
      {users.map(user => <p key={user.id} className='border border-t-0 mb-1 border-b-gray-300'>{user.name}</p>)}
    </div>
  )
}

export default Users