import "./Pages.css";
import { Link } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

function Registration() {
  return (
    <div className="page-container" id="top">
      <div className="page-content">
        <h2>Registration</h2>

        <p>
          Prior to participating the challenge, we kindly request all participants
          to familiarize themselves with our {" "}
          <Link to="/ChallengeRulesPolicies" target="_blank" rel="noopener noreferrer">
            participation and data usage policies, along with our publication policy
          </Link>.
        </p>

        <p>
          We ask participants to formally register by filling in this {" "}
          <Link
            to="google.com"
            class="disabled-link"
            aria-disabled="true"
            title="Coming soon"
          >
            LINK (coming soon)
          </Link>
        </p>

        <p>
          After registering, you will receive the links to data and will be added
          to the participants mailing list <strong>(coming soon)</strong>. Please note that you
          may not be able to be added to this mailing list because of some restrictions
          within your organisation. Please contact <Link to="mailto:maasala@prhlt.upv.es">maasala@prhlt.upv.es </Link>
          if you encounter any problem during registration.
        </p>
        <BackToTopButton />
      </div>
    </div>
  );
}

export default Registration;
