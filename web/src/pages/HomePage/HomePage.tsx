import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import SubjectCell from 'src/components/SubjectCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />


      <SubjectCell/>
    </>
  )
}

export default HomePage
