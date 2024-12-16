import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className="hero bg-transparent min-h-screen">
            <div className="hero-content text-center">
              <div className="max-w-lg">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Hello there
                </h1>
                <p className="py-6 mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <button className="btn btn-primary">Get Started</button>
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Start searching <span aria-hidden="true">→</span>
                </a>
                </div>
              </div>
            </div>
        </div>

        <div className="bg-transparent flex items-center justify-center">
            <div className="bg-transparent flex w-5xl mb-48">
              <div className="card bg-base-300 rounded-box grid h-96 w-80 flex-grow place-items-center">content</div>
              <div className="divider divider-horizontal">OR</div>
              <div className="card bg-base-300 rounded-box grid h-96 w-80 flex-grow place-items-center">content</div>
            </div>
        </div>
    </div>
  )
}
