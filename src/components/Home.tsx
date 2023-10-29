import React from "react";
const Home = () => {
  return (
    <div id="page-wrapper">
      <section id="banner">
        <div className="inner">
          <h2>
            Orbit
            <sub>
              <span>EX</span>
            </sub>
          </h2>
          <p>
            The first In-Orbit Marketplace. <br /> Using a Decentralized
            Autonomous Organisation to <br /> create an NFT marketplace for
            space-junk.
          </p>
        </div>
        <a href="#one" className="more scrolly">
          Learn More
        </a>
      </section>
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>
              Decentralized Autonomous Organization Proposal <br /> Key
              Objectives
            </h2>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>Item Categorization</h3>
              <p>
                Allow community members to categorize junk items efficiently to
                enable better organization and searchability.
              </p>
            </li>
            <li className="icon solid fa-recycle">
              <h3>Eco-friendly Practices</h3>
              <p>
                Promote the responsible disposal and recycling of junk items,
                reducing environmental impact.
              </p>
            </li>
            <li className="icon solid fa-money-bill">
              <h3>Pricing Mechanism</h3>
              <p>
                Develop a pricing mechanism based on community consensus and
                market data to determine fair values for junk items.
              </p>
            </li>
            <li className="icon solid fa-home">
              <h3> Governance </h3>
              <p>
                Enable stakeholders to vote on critical decisions, including
                changes to DAO rules, item categorization, and pricing policies
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section id="one" className="wrapper style4 special">
        <div className="inner">
          <header className="major">
            <h2>Features</h2>
          </header>
          <div>
            <div>
              <h3>Item Listing and Community Voting</h3>
              <p>
                Members can list junk items on the platform, providing details
                and images. Users can vote on the
                categorization, pricing, and disposal method of each item.
              </p>
            </div>
            <div>
              <h3>Staking and Rewards</h3>
              <p>
                Implement a staking system where users can stake tokens to
                influence decision-making and receive rewards for active
                participation.
              </p>
            </div>
            <div>
              <h3>DAO Treasury </h3>
              <p>
                Allocate a portion of transaction fees to the DAO treasury to
                fund community initiatives, promotions, or further development.
              </p>
            </div>
            <div>
              <h3> Marketplace</h3>
              <p>
                Build a marketplace for junk items where users can buy, sell, or
                trade items.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy;</li>
          <li>orbitex</li>
        </ul>
      </footer>
    </div>
  );
};
export default Home;
