import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Annotator</h2>
          <p>The goal of this app is to</p>
          <ul class="steps steps-vertical">
            <li class="step step-primary">segment words</li>
            <li class="step step-primary">assign parts of speech as tokenization to stemmed words</li>
            <li class="step step-primary">submit</li>
          </ul>
          <p>
            the result data will be used to train parts of speech data in accordance with <Link to="https://universaldependencies.org/guidelines.html">Universal Dependancies</Link>
          </p>

          <p>
            Tokenization and segmentation guidelines can be found at <Link to="https://universaldependencies.org/u/overview/tokenization.html">Universal Dependancies</Link>
          </p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
