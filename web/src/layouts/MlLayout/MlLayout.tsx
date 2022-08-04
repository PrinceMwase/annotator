import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
type MlLayoutProps = {
  children?: React.ReactNode
}

const MlLayout = ({ children }: MlLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <Toaster />
      <header>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link
              to={routes.home()}
              className="btn btn-ghost normal-case text-xl"
            >
              Annotator
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              {isAuthenticated ? (
                <div>
                  <span>Logged in as {currentUser.email}</span>{' '}
                  <button type="button" onClick={logOut}>
                    Logout
                  </button>
                </div>
              ) : (
                <li>
                  <Link to={routes.login()}>Login</Link>
                </li>
              )}
              <li>
                <Link to={routes.about()}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MlLayout
