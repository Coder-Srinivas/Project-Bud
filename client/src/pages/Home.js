export default function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-hero--text">
          <h1 className="home-hero--text-title">
            Your search for the perfect learning buddy ends here.
          </h1>
          <h4 className="home-hero--text-sub">
            Get matched with profiles according to your learning goals and
            preferences. <br /> Matching as simple as a left swipe or a right
            swipe!
          </h4>
          <button className="btn">
           <a href="/browse">Get Started</a>
          </button>
        </div>
        <img className="home-hero--image" src="Images/hero.png" alt="hero" />
      </div>
    </div>
  );
}
