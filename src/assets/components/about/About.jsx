import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Education',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: 'BS Software Engineering',
    description: "Course Content",
    features: ['PF', 'OOP', 'DSA', 'DB CN OS'],
    featured: false,
  },
  {
    name: 'Skills',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Frontend Developer',
    description: 'I specialize in frontend development',
    features: [
      'HTML CSS and Responsive design',
      'Javascript (ES6)',
      'React JS and Next.JS',
      'Tailwind CSS and Boootstrap',
      'Redux-toolkit',

  
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const  About=()=> {
  return (
 
    <div className="relative isolate bg-white px-6 py-10 md:py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-indigo-600 heading">About Me</h2>
        <p className="mt-2 text-balance text-xl md:text-2xl  tracking-tight text-black sm:text-2xl paragraph dark:text-gray-400">
        Hi, I am Talha, a recent graduate with a BS in Software Engineering from Lahore Garrison University.
        </p>
      </div>
 
      <div className="mx-auto mt-10 md:mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 dark:text-gray-400">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl dark:text-gray-400' : 'bg-white/60 sm:mx-8 lg:mx-0 ',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-xl md:text-base/7 md:font-semibold paragraph ')}
            >
              {tier.name}
            </h3>
            <p className="mt-2 md:mt-4 flex items-baseline gap-x-2 paragraph">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-2xl md:text-5xl font-semibold tracking-tight paragraph ',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}></span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-3 md:mt-6 text-base/7 paragraph')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300 ' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10 paragraph',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none paragraph ')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
     
          </div>
        ))}
      </div>
    </div>
  
  )
}
export default About;