import "./Registration.css";

function Registration() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", padding: 24 }}>
      <div
        className="timeline-content"
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#222",
        }}
      >
        <h2>Registration</h2>

        <p>
          Prior to participating the challenge, we kindly request all participants
          to familiarize themselves with our participation and data usage policies,
          along with our publication policy.
        </p>

        <br />

        <p>
          We ask participants to formally register by filling in{" "}
          <a href="https://forms.gle/REPLACE_WITH_REAL_FORM" target="_blank" rel="noopener noreferrer">
            this form
          </a>.
        </p>

        <br />

        <p>
          After registering, you will receive the links to data and will be added
          to the participants mailing list{" "}
          <strong>tus-rec2025-participants@live.ucl.ac.uk</strong>. Please note that you
          may not be able to be added to this mailing list because of some restrictions
          within your organisation. Please contact{" "}
          <a href="mailto:maasala@prhlt.upv.es">maasala@prhlt.upv.es</a> if you encounter
          any problem during registration.
        </p>
      </div>
    </div>
  );
}

export default Registration;
