// HomePage for ProjectGutenberg
// components:
// - NavBar (Logo, NavLinks, SearchIcon, ThemeIcon)
// - Header (Title, Subtitle, Carousel of books, etc.)
// - Main (Sections: About, Projects, Contact, etc.)
// - Footer (SocialMediaLinks, ContactInfo, etc.)

// NavBar
const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-8 bg-white dark:bg-zinc-800/30">
      <div className="flex items-center">
        <h1 className="ml-2 text-2xl font-bold">Project Gutenberg</h1>
      </div>
      <div className="flex items-center">
        <button className="p-1 mr-4 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
          </svg>
        </button>
        <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Header
const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-zinc-800/30">
      <h1 className="text-6xl font-bold">{contents.h1}</h1>
      <h2 className="mt-4 text-2xl">{contents.h2}</h2>
      <div className="flex mt-4">
        <button className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-400">
          Get Started
        </button>
        <button className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-400">
          Learn More
        </button>
      </div>
    </div>
  )
}

interface HomePageContents {
  h1: string
  h2: string
  intro: string
  p1: string
  p2: string
  p3: string
}
// contents
const contents: HomePageContents = {
  h1: 'Welcome to Project Gutenberg',
  h2: 'Project Gutenberg is a library of over 70,000 free eBooks',
  intro: 'Choose among free epub and Kindle eBooks, download them or read them online. You will find the world’s great literature here, with focus on older works for which U.S. copyright has expired. Thousands of volunteers digitized and diligently proofread the eBooks, for you to enjoy.',
  p1: 'No fee or registration! Everything from Project Gutenberg is gratis, libre, and completely without cost to readers. If you find Project Gutenberg useful, please consider a small donation to help Project Gutenberg digitize more books, maintain its online presence, and improve Project Gutenberg programs and offerings. Other ways to help include digitizing, proofreading and formatting, or reporting errors.',
  p2: 'No special apps needed! Project Gutenberg eBooks require no special apps to read, just the regular Web browsers or eBook readers that are included with computers and mobile devices. There have been reports of sites that charge fees for custom apps, or for the same eBooks that are freely available from Project Gutenberg. Some of the apps might have worthwhile features, but none are required to enjoy Project Gutenberg eBooks.',
  p3: '50 years of eBooks 1971-2021. In 2021, Project Gutenberg celebrated the first eBook for reading enjoyment and unlimited free redistribution. This eBook was created on July 4, 1971 by Project Gutenberg’s founder, Michael S. Hart. Read more about this lasting innovation. Project Gutenberg is grateful to all volunteers who helped to reach this milestone anniversary. Project Gutenberg offers a vibrant and growing collection of the world’s great literature. Read, enjoy, and share!'
  }

// Main
const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-white dark:bg-zinc-800/30">
      <p className="mt-4 text-xl">{contents.intro}</p>
      <p className="mt-4 text-xl">{contents.p1}</p>
      <p className="mt-4 text-xl">{contents.p2}</p>
      <p className="mt-4 text-xl">{contents.p3}</p>
    </div>
  )
}

// Footer
const Footer = () => {
  return (
    <div className="flex items-center justify-center h-16 bg-white dark:bg-zinc-800/30">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; 2021 ProjectGutenberg. All rights reserved.
      </p>
    </div>
  )
}

// export default HomePage
// HomePage display NavBar, Header, Main, Footer
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
