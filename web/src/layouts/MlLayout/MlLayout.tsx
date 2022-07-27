import { Link, routes } from "@redwoodjs/router"

type MlLayoutProps = {
  children?: React.ReactNode
}

const MlLayout = ({ children }: MlLayoutProps) => {
  return     <>
  <header>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={routes.home()} className="btn btn-ghost normal-case text-xl">Annotator</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <main>{children}</main>
</>
}

export default MlLayout
