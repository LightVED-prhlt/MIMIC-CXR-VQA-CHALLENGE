import "./Pages.css";
import DescriptionVQA from "../assets/DescriptionVQA.png";


function TaskDescription() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h2>Background: CXR Visual Question Answering (VQA)</h2>

        <p>
          Chest X-ray (CXR) Visual Question Answering (VQA) is an emerging multimodal task that
          aims to automatically answer clinically relevant questions about radiographic images by
          jointly reasoning over visual and textual information. Unlike conventional report generation
          or classification pipelines, CXR VQA enables targeted clinical queries, such as the presence
          or absence of specific findings, disease severity, or anatomical abnormalities. This paradigm
          is particularly important in clinical decision support, education, and large-scale dataset
          annotation, as it allows flexible and fine-grained interrogation of medical images while
          reducing the cognitive and time burden on radiologists.
        </p>

        <p>
          In CXR VQA, the model receives one or more chest X-ray images—typically acquired in different
          views such as posteroanterior (PA), anteroposterior (AP), and lateral projections—together with
          a natural language question. The goal is to generate an accurate and clinically grounded answer
          based on the visual evidence present in the images (see <a href="#fig-1">Fig. 1</a>). 
          This formulation naturally extends beyond binary classification, supporting open-ended, yes/no, and 
          short descriptive answers.
        </p>

        <div className="figure-container" id="fig-1">
          <img
            src={DescriptionVQA}
            alt="Illustration of CXR Visual Question Answering"
            className="figure"
          />
          <p className="figure-caption">
            Fig. 1. An illustration of CXR Visual Question Answering, where chest X-ray images and a clinical question are jointly processed to produce a textual answer.
          </p>
        </div>
        <p>
          From a modeling perspective, CXR VQA is typically addressed using an encoder–decoder
          architecture that combines a visual encoder with a language model. Given an input
          image (or a set of images) I and a natural language question Q, the visual encoder
          extracts a sequence of image-level embeddings V using a Vision Transformer backbone,
          while the question is tokenized and mapped into a textual embedding sequence T.
        </p>

        <p>
          The visual and textual representations are then fused through a multimodal
          interaction module, commonly implemented using cross-attention mechanisms.
          This fusion produces a joint representation Z that captures the semantic
          alignment between radiographic patterns and linguistic concepts present in
          the question.
        </p>

        <p>
          Conditioned on this joint representation, a transformer-based decoder generates
          the answer in an autoregressive manner. Formally, the model learns to estimate
          the conditional probability of an answer sequence Y given the image I and the
          question Q, decomposed token by token as:
        </p>

        <p className="equation">
          P(Y | I, Q) = ∏ₜ P(yₜ | y₍ₜ₋₁₎, Z)
        </p>

        <p>
          The model relies on global image embeddings and learned attention
          weights to associate textual tokens with relevant visual evidence. The overall
          answer generation process can therefore be expressed as:
        </p>

        <p className="equation">
          Ŷ = argmax_Y P(Y | fθ([φVIT(I); φTXT(Q)]))
        </p>

        <p>
          where φVIT denotes the vision encoder, φTXT represents the textual embedding
          function for the question, and fθ corresponds to the multimodal fusion and decoding
          network parameterized by θ. This formulation enables effective CXR Visual Question
          Answering even in the absence of grounding masks or pixel-level annotations,
          making it well suited for large-scale clinical datasets.
        </p>


        <h2>Task Description</h2>

        <p>
          The algorithm is expected to take one or more chest X-ray images as input,
          together with a natural language clinical question, and generate a textual
          answer grounded in the visual content of the images. There is no constraint on
          the internal design of the algorithm, including whether it is a rule-based or
          learning-based approach, the choice of visual or language backbone, or the
          specific multimodal fusion strategy employed. The model may support binary,
          categorical, or free-form answers depending on the question type. Further
          details regarding the evaluation protocol are provided in the
          <a href="/Assessment"> Assessment</a> section.
        </p>

        <p>
          Participant teams are encouraged to leverage the multimodal nature of the data,
          potentially incorporating prior knowledge from related vision–language tasks
          or large-scale medical image datasets. The submitted models should accept chest
          X-ray images and associated questions as input and output a corresponding
          answer for each image–question pair. During evaluation, answers generated by
          the dockerized models will be automatically collected and compared against
          reference answers using standardized natural language and clinical accuracy
          metrics, producing the final performance scores across different question
          categories and clinical scenarios.
        </p>


        <p>
          We provide two baseline algorithm in these repositories:
          <ul>
            <li><a href="https://github.com/LightVED-prhlt/BLIP-2-MultiView">BLIP-2 MultiView</a></li>
            <li><a href="https://github.com/LightVED-prhlt/SwinVED-SCST">SwinVED-SCST</a></li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default TaskDescription;
