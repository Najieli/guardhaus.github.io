import logo from "../assets/GuardHaus_Logo.svg";

function HeroHeader({ title, subtitle, showLogo = false }) {
  return (
    <div className="title-box">
      <h1>
        {showLogo ? (
          <>
            Guard
            <img
              src={logo}
              alt="GuardHaus Logo"
              className="title-logo"
            />
            Haus
          </>
        ) : (
          title
        )}
      </h1>

      <p>{subtitle}</p>
    </div>
  );
}

export default HeroHeader;