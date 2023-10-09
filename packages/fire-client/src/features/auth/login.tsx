import { useLoginMutation, useLogoutMutation } from '../../graphql/types'

export const Login = () => {
  const [loginMutation, { data, loading, error }] = useLoginMutation()
  const [logoutMutation] = useLogoutMutation()
  const onLogin = (e) => {
    e.preventDefault()
    loginMutation({ variables: { id: '123' } })
  }

  const onLogout = (e) => {
    e.preventDefault()
    logoutMutation({ variables: { id: '123' } })
  }
  // firstName and lastName will have correct type

  return (
    <div>
      <form onSubmit={onLogin}>
        <button type="submit">Login</button>
      </form>

      <form onSubmit={onLogout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  )
}
