import { useQuery } from "@apollo/client"
import { useState } from "react"
import { GET_USER } from "../actions/getUser"

export const User = () => {
  const [userId, setUserId] = useState(1)
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { user } = data;

  return (
    <div>
      <h2>User Information</h2>
      <div>
        <label>User ID:
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value.trim() === "" ? 0 : e.target.value))}
          />
        </label>
      </div>
      {user.id ?
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
        :
        <p>No user founda&&</p>
      }
    </div>
  )
}
