import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Annotator</h2>
          <p>The goal of this app is to</p>
          <ul class="steps steps-vertical">
            <li class="step step-primary">segment</li>
            <li class="step step-primary">tokenize</li>
            <li class="step step-primary">submit sentence</li>
          </ul>
          <p>
            the result data will be used to train parts of speech data in accordance with <a class="link link-accent" href="https://universaldependencies.org/guidelines.html">Universal Dependancies</a> to create a model of a parts of speech tagger
          </p>

          <p>
            Tokenization and segmentation guidelines can be found  <a class="link link-accent" href="https://universaldependencies.org/u/overview/tokenization.html"> here </a>
          </p>
          <div class="card-actions justify-end">

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
