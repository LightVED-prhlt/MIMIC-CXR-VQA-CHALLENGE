import "./Pages.css";

function ChallengeRulesPolicies() {
  return (
    <div className="page-container" id="top">
      <div className="page-content">
        <h2>Participation Policy</h2>

        <ul>
          <li>Submitted methods must be fully automatic.</li>
          <li>
            Public and private data are permitted, however their use must be
            disclosed by participants.
          </li>
          <li>
            Members of the organizers’ institutes may participate but are not
            eligible for awards and will not be listed in the leaderboard.
          </li>
          <li>
            All participants must belong to teams, even if a team consists of
            only one member, and each participant can only be a member of one
            team.
          </li>
        </ul>

        <h2>Data Usage Policy</h2>

        <p>
          The data is provided under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY NC SA
          </a>{" "}
          license. It is exclusively intended for research purposes, in
          compliance with the restrictions imposed by the original ethics
          approval and patient consent.
        </p>

        <p>
          Following the conclusion of the challenge, the training and validation
          data will remain publicly accessible. These datasets may be utilized
          within the research scope of the challenge and in subsequent
          research-related publications. However, commercial use of the training
          and validation data is prohibited. In cases where the intended use is
          ambiguous, participants accessing the data are requested to refrain
          from further distribution or utilization beyond the scope of this
          challenge.
        </p>

        <h2>Publication Policy</h2>

        <p>
          We are planning to submit a challenge paper including the analysis of
          the dataset and the results. Members of the top participating teams
          will be invited as co-authors. The invited teams will be announced
          after the challenge event and will depend on the number of
          participating teams.
        </p>

        <p>
          The challenge organizers determine the order of the authors in the
          joint challenge paper. The participating teams can publish their
          results separately but only after publication of the joint challenge
          paper (expected by end of 2026). If you have any queries about the
          publication policy, please contact us. Once the challenge paper from
          the organizing team is published, the participants should cite this
          challenge paper.
        </p>

        <h2>Participant Code of Conduct</h2>

        <p>
          By participating in this challenge, whether as an organizer or
          participant, you commit to ensuring that participation in our
          community remains a harassment-free experience for all, irrespective
          of age, body size, visible or invisible disability, ethnicity, sex
          characteristics, gender identity and expression, level of experience,
          education, socio-economic status, nationality, personal appearance,
          race, caste, color, religion, or sexual identity and orientation.
        </p>

        <p>
          Your pledge includes conducting yourself in a manner that fosters an
          environment characterized by openness, inclusivity, diversity, and
          health.
        </p>

        <p className="italic">
          Examples of behavior that contributes to a positive environment for
          our community include:
        </p>

        <ul>
          <li>Showing empathy and kindness towards others</li>
          <li>Respecting diverse opinions, viewpoints, and experiences</li>
          <li>Offering and graciously receiving constructive feedback</li>
          <li>
            Taking accountability and apologizing to those impacted by our
            errors, and using the opportunity for growth
          </li>
          <li>
            Prioritizing the collective welfare of the community, not just
            individual interests
          </li>
        </ul>

        <p className="italic">
          Examples of unacceptable behavior include:
        </p>

        <ul>
          <li>
            Engaging in sexualized language or imagery, or making sexual advances
          </li>
          <li>
            Participating in trolling, making derogatory comments, or launching
            personal or political attacks
          </li>
          <li>Engaging in public or private harassment</li>
          <li>
            Disclosing others’ private information, including physical or email
            addresses, without explicit consent
          </li>
          <li>
            Any other behavior that could reasonably be deemed inappropriate in
            a professional environment
          </li>
        </ul>

        <h2>Enforcement Responsibilities</h2>

        <p>
          Community leaders are tasked with elucidating and upholding our
          standards of acceptable behavior. They will take appropriate and
          equitable corrective measures in response to any conduct they perceive
          as inappropriate, threatening, offensive, or harmful.
        </p>

        <p>
          Community leaders have the authority and obligation to delete, edit, or
          decline comments, code, discussion board entries, issues, and other
          contributions that deviate from this Code of Conduct. They will
          provide explanations for moderation decisions when deemed appropriate.
        </p>

        <h2>Scope</h2>

        <p>
          This Code of Conduct applies to all community spaces, whether online or
          during in-person events.
        </p>

        <h2>Enforcement</h2>

        <p>
          Instances of abusive, harassing, or otherwise unacceptable behavior
          may be reported to the community leaders responsible for enforcement
          at{" "}
          <a href="mailto:maasala@prhlt.upv.es">maasala@prhlt.upv.es</a>. All
          complaints will be promptly and fairly reviewed and investigated.
        </p>

        <p>
          All community leaders are required to uphold the privacy and security
          of the reporter of any incident.
        </p>

        <p className="footnote">
          This Code of Conduct has been adapted from the policy available{" "}
          <a href="https://github.com/just-the-docs/just-the-docs/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">
            here
          </a>{" "}
          for Just the Docs.
        </p>
        <p className="back-to-top">
          <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </div>
  );
}

export default ChallengeRulesPolicies;
