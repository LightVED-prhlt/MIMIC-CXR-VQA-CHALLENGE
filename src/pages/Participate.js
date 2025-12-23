import "./Pages.css";
import { Link } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";


function Participate() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>How to Participate in the CXR-ORACLE 2025 Challenge</h2>

        <h3>1. <Link to="/Registration">Register</Link></h3>
        <ul>
          <li>
            Read the <Link to="/ChallengeRulesPolicies">Challenge Rules &amp; Policies</Link>.
          </li>
          <li>
            Register using the following{" "}
            <Link
              to="google.com"
              className="disabled-link"
              aria-disabled="true"
              title="Coming soon"
            >
              LINK (coming soon)
            </Link>.
          </li>
        </ul>

        <h3>2. Download <Link to="/Dataset">dataset</Link></h3>
        <p>
          We will send the links of data to you once we receive your registration
          information.
        </p>
        <ul>
          <li><Link to="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Training data (coming soon)</Link></li>
          <li><Link to="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Validation data (coming soon)</Link></li>
        </ul>

        <h3>3. Develop your method</h3>
        <ul>
          <li>
            Get started with the baselines:
            <ul>
              <li><Link to="https://github.com/LightVED-prhlt/BLIP-2-MultiView">BLIP-2 MultiView</Link></li>
              <li><Link to="https://github.com/LightVED-prhlt/SwinVED-SCST">SwinVED-SCST</Link></li>
            </ul>
          </li>
          <li>
            Get details about <Link to="/Assessment">assessment</Link>.
          </li>
        </ul>

        <h3>4. Build Docker image and submit</h3>
        <ul>
          <li><Link to="/Submission">Submission guideline</Link></li>
          <li><Link to="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">An example docker (coming soon)</Link></li>
        </ul>

        <h3>5. Relevant links</h3>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Challenge proposal (coming soon)</Link></li>
          <li><Link to="/TaskDescription">Task description</Link></li>
          <li><Link to="https://github.com/LightVED-prhlt/BLIP-2-MultiView">Baseline code 1: BLIP-2 MultiView</Link></li>
          <li><Link to="https://github.com/LightVED-prhlt/SwinVED-SCST">Baseline code 2: SwinVED-SCST</Link></li>
          <li><Link to="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">CXR-ORACLE Challenge paper (coming soon)</Link></li>
          {/* <li>
            Additional info:{" "}
            <Link to="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 1</Link>, <Link to="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 2</Link>,{" "}
            <Link to="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 3</Link>, <Link to="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 4</Link>.
          </li> */}
        </ul>
        <BackToTopButton />
      </div>
    </div>
  );
}

export default Participate;
