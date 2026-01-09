import "./Pages.css";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

function Assessment() {
  return (
    <div className="page-container" id="top">
      <div className="page-content">
        <h2>Assessment Criteria</h2>

        <h3>Evaluation Metrics</h3>

        <p>
          The goal of this challenge is to evaluate a model’s ability to generate
          clinically accurate, semantically faithful, and linguistically sound
          answers to visual questions grounded in chest X-ray images. Since the
          task involves open-ended natural language generation, multiple
          complementary evaluation metrics are employed.
        </p>

        <p>
          Metrics are divided into three categories: <em>semantic similarity</em>,
          <em>clinical correctness</em>, and <em>lexical overlap</em>. This design
          ensures that top-ranked models are not only fluent, but also clinically
          reliable.
        </p>

        <h4>Primary Metrics</h4>

        <ul>
          <li>
            <strong>BERTScore (F1)</strong>: Measures semantic similarity between
            generated answers and reference answers using contextual embeddings.
            This metric is robust to paraphrasing and linguistic variation and
            serves as the <strong>primary ranking metric</strong> in the
            challenge.
          </li>
          <li>
            <strong>RadGraph (F1)</strong>: Evaluates the correctness of clinical
            entities and relations extracted from the generated answers. This
            metric assesses factual grounding and penalizes hallucinated or
            missing findings.
          </li>
        </ul>

        <p>
          <strong>BERTScore (F1)</strong> and <strong>RadGraph (F1)</strong> are both
          considered <strong>primary evaluation metrics</strong> and contribute
          equally to the final ranking.
        </p>

        <h4>Auxiliary Linguistic Metrics</h4>

        <ul>
          <li>BLEU-1, BLEU-2, BLEU-3, BLEU-4</li>
          <li>ROUGE-L</li>
        </ul>

        <p>
          These token-based metrics are reported for completeness and comparison
          with prior work, but they are <strong>not used for ranking</strong> due
          to their sensitivity to surface-level wording and limited ability to
          capture clinical meaning.
        </p>

        <h3>Ranking Method</h3>

        <p>
          The official leaderboard ranking is based primarily on semantic and
          clinical correctness.
        </p>

        <p>
          Models are ranked according to a weighted average of
          <strong> BERTScore (F1)</strong> and <strong>RadGraph (F1)</strong>, with
          equal contribution from both metrics.
        </p>

        <div className="formula-block">
          <p>
            Final Score = 0.5 × BERTScore (F1) + 0.5 × RadGraph (F1)
          </p>
        </div>

        <p>
          Scores are computed per question–answer pair and averaged across the
          full test set. Higher scores indicate better overall performance.
        </p>

        <div className="note">
          <strong>NOTE:</strong> Submissions that fail to generate valid outputs
          or for which metrics cannot be computed will receive a score of zero.
          All raw metric values will be publicly released to support transparent
          and reproducible evaluation.
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}

export default Assessment;
