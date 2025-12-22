import "./Pages.css";

function Participate() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>How to Participate in the CXR-ORACLE 2025 Challenge</h2>

        <h3>1. <a href="/Registration">Register</a></h3>
        <ul>
          <li>
            Read the <a href="/ChallengeRulesPolicies">Challenge Rules &amp; Policies</a>.
          </li>
          <li>
            Fill in the registration {" "}
            <a
              href="google.com"
              class="disabled-link"
              aria-disabled="true"
              title="Coming soon"
            >
              form (coming soon)
            </a>.
          </li>
        </ul>

        <h3>2. Download <a href="/Dataset">dataset</a></h3>
        <p>
          We will send the links of data to you once we receive your registration
          information.
        </p>
        <ul>
          <li><a href="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Training data (coming soon)</a></li>
          <li><a href="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Validation data (coming soon)</a></li>
        </ul>

        <h3>3. Develop your method</h3>
        <ul>
          <li>
            Get started with the baselines:
            <ul>
              <li><a href="https://github.com/LightVED-prhlt/BLIP-2-MultiView">BLIP-2 MultiView</a></li>
              <li><a href="https://github.com/LightVED-prhlt/SwinVED-SCST">SwinVED-SCST</a></li>
            </ul>
          </li>
          <li>
            Get details about <a href="/Assessment">assessment</a>.
          </li>
        </ul>

        <h3>4. Build Docker image and submit</h3>
        <ul>
          <li><a href="/Submission">Submission guideline</a></li>
          <li><a href="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">An example docker (coming soon)</a></li>
        </ul>

        <h3>5. Relevant links</h3>
        <ul>
          <li><a href="/">Homepage</a></li>
          <li><a href="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">Challenge proposal (coming soon)</a></li>
          <li><a href="/TaskDescription">Task description</a></li>
          <li><a href="https://github.com/LightVED-prhlt/BLIP-2-MultiView">Baseline code 1: BLIP-2 MultiView</a></li>
          <li><a href="https://github.com/LightVED-prhlt/SwinVED-SCST">Baseline code 2: SwinVED-SCST</a></li>
          <li><a href="google.com" class="disabled-link" aria-disabled="true" title="Coming soon">CXR-ORACLE Challenge paper (coming soon)</a></li>
          {/* <li>
            Additional info:{" "}
            <a href="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 1</a>, <a href="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 2</a>,{" "}
            <a href="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 3</a>, <a href="https://forms.gle/REPLACE_WITH_REAL_FORM">Paper 4</a>.
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Participate;
