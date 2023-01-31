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
                <li>
                  <div>
                    <button type="button" onClick={logOut}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>

                    </button>
                  </div>
                </li>
              ) : (
                <li>
                  <Link to={routes.login()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
</Link>
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
