import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Page</a></li>
        <li>
          <a>Gallery</a>
          <ul className="p-2">
            <li><a>Gallery  1</a></li>
            <li><a>Gallery 2</a></li>
          </ul>
        </li>
        <li><a>Shop</a></li>
        <li><a>About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">FUEGO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Page</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Gallery</summary>
          <ul className="p-2">
            <li><a>Gallery 1</a></li>
            <li><a>Gallery 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Shop</a></li>
      <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Out there</h1>
      <p className="mb-5">Typically, fall in the Canadian Rocky Mountains lasts only a few short weeks. Mixed in with all that beautiful colour is a variety of lighting and weather conditions.</p>
      <button className="btn btn-primary">Gallery</button>
    </div>
  </div>
</div>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Immersion</h1>
      <p className="mb-5">When it comes to landscape photography, most of you will agree that location matters. It’s well worth the effort to research and scout locations you intend to photograph, especially if you seek a specific element, like fall colour, within your images. Not all locations will offer fall colours in abundance. </p>
      <button className="btn btn-primary">Shop</button>
    </div>
  </div>
</div>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/18725/images/DAau3fjETFmAjLVaNl3B_FallLandscape7-.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">To Infinity</h1>
      <p className="mb-5">As in everything to do with photography, good light can make or break a photo. Prime light for landscape photography is around the hours of sunrise and sunset. However, one of the things I love about fall is that this season looks spectacular in all types of light. Don’t put your camera away during the day hours.</p>
      <button className="btn btn-primary">About Us</button>
    </div>
  </div>
</div>


    <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Gallery</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Shop</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </main>
  )
}
