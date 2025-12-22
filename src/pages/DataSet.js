import "./Pages.css";
import FinalDistribution from "../assets/FinalLabelDistribution.png";


function DataSet() {
  return (
    <div className="page-container" id="top">
      <div className="page-content">
        <h2>The Dataset</h2>

        <p>
          This dataset is a large-scale medical Visual Question Answering (VQA)
          resource constructed from the <a href="https://www.nature.com/articles/s41597-019-0322-0">MIMIC-CXR database</a>. It contains over
          <strong> 3.2 million question–answer (QA) pairs</strong> derived from
          chest X-ray studies, covering 15 clinically relevant categories such as
          cardiomegaly, pneumonia, pleural effusion, pneumothorax, and support
          devices.
        </p>
        <p>
          Questions are generated using <a href="https://ojs.aaai.org/index.php/AAAI/article/view/3834">CheXpert labels</a> extracted from radiology
          reports, while answers are automatically produced by a large language
          model (<a href="https://arxiv.org/abs/2302.13971">LLaMA 3.1</a>) following a strictly evidence-based prompt. The model
          receives the radiology findings and study indication and is constrained
          to generate answers grounded exclusively in the visual content of the
          radiograph, avoiding assumptions, comparisons, or templated language.
          This results in rich, clinically faithful, and linguistically diverse
          answers aligned with real radiologists’ reporting practices.
        </p>

        <h3>Distribution</h3>

        <p>
          The dataset is designed to be <strong>doubly balanced</strong>. First, question
          coverage is evenly distributed across all diagnostic labels by generating a
          fixed number of questions per condition. Second, the overall proportion of
          positive and negative findings is balanced to avoid dominance of any single
          outcome.
        </p>

        <div className="figure-container" id="fig-1">
          <img
            src={FinalDistribution}
            alt="Final distribution of generated questions across diagnostic labels"
            className="figure"
          />
          <p className="figure-caption">
            Fig. 1. Final distribution of generated questions across all diagnostic labels,
            showing balanced coverage and a comparable proportion of positive and negative
            findings.
          </p>
        </div>

        <p>
          As shown in <a href="#fig-1">Fig. 1</a>, this strategy prevents the
          over-representation of frequent positive findings and ensures uniform question
          coverage across conditions. The resulting distribution reduces dataset bias and
          encourages models to learn robust clinical reasoning rather than exploiting
          label frequency imbalances.
        </p>


        <h3>Dataset Validation</h3>

        <p>
          Given the clinical relevance of the task, the dataset was rigorously
          validated using a hybrid evaluation strategy combining human and
          automated verification.
        </p>

        <p>
          A sample of 100 QA pairs was independently reviewed by three human
          annotators, evaluating correctness, consistency with the original
          report, answer completeness, and clinical relevance. In parallel, an
          automated LLM-based verifier was used to assess alignment with human
          judgments. After this initial validation, the LLM-based evaluator was
          applied at scale to over 33,000 QA pairs.
        </p>
        <p>
          Results show high agreement across evaluators and consistently high
          correctness and clinical fidelity, confirming that the dataset provides
          a reliable supervisory signal for training medical VQA models.
        </p>

        <h3>Data Structure</h3>

        <p>
          The dataset is organized in a simple and flat structure to facilitate easy
          loading and integration into existing VQA pipelines. It is distributed as
          CSV files, with each row corresponding to a single question–answer pair linked
          to a specific MIMIC-CXR study and image.
        </p>
        <pre className="code-block">
{`CXR_ORACLE_2025/
|
├── CXR_ORACLE_2025_Train.csv
└── CXR_ORACLE_2025_Validation.csv`}
        </pre>
        <p>
          The training and validation splits are provided separately to ensure clean
          experimental setups and prevent data leakage. Each CSV includes the question,
          the generated answer, and metadata fields that allow the QA pair to be mapped
          back to its associated chest X-ray study and images.
        </p>
        <h3>QA Pairs</h3>

        <p>
          Each row in the CSV files corresponds to a single QA pair and includes
          the question, the generated answer, and metadata linking it to its
          associated MIMIC-CXR study and image identifiers. Multiple QA pairs may
          be associated with the same radiographic study, reflecting different
          clinically relevant questions derived from the same report.
        </p>

        <h3>Images</h3>

        <p>
          The dataset does not redistribute images. All chest X-ray images must
          be obtained directly from the <a href="https://physionet.org/content/mimic-cxr/2.1.0/">official MIMIC-CXR database</a> and linked
          using the provided study and image identifiers. Users must comply with
          the original MIMIC-CXR data usage agreement to access the images.
        </p>
        <p className="back-to-top">
          <a href="#top">Back to top ↑</a>
        </p>
      </div>
    </div>
  );
}

export default DataSet;
