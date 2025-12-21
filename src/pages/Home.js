import ChestViewer from "../components/ChestViewer/ChestViewer";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // center horizontally
      }}
    >
      <ChestViewer />

      <div
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#222",
        }}
      >
        <p>
          <strong>The CXR-ORACLE Challenge</strong> introduces a new large-scale
          benchmark for medical VQA based on chest radiography. The challenge is
          built upon <strong>MIMIC-CXR-VQA</strong>, a new dataset comprising over
          3.2 million question–answer pairs derived from 254,934 chest X-ray
          images, spanning 15 clinically relevant categories. Questions are
          grounded in radiological findings, while answers are open-ended,
          evidence-based, and linguistically diverse, to faithfully reflect
          clinical reasoning rather than templated responses.
        </p>

        <p>
          A key feature of this challenge is the provision of two strong yet
          computationally accessible baselines, designed as interesting and
          extensible starting points for participants. These baselines are
          intentionally proposed as guiding ideas rather than prescriptive
          solutions, serving to illustrate effective design principles while
          leaving ample room for alternative modeling choices. The first baseline
          follows a bridged Vision Encoder–Decoder (VED) paradigm, enabling the
          reuse of powerful pretrained vision encoders and language decoders
          while keeping the number of trainable parameters low. This design
          encourages efficient experimentation and makes the challenge
          accessible to teams with limited computational resources. The second
          baseline is a distinct Vision Encoder–Decoder (VED) model that employs
          reinforcement learning (RL) via Self-Critical Sequence Training,
          directly optimizing semantic similarity metrics and demonstrating how
          RL techniques can be effectively leveraged to push beyond standard
          supervised VQA training.
        </p>

        <p>
          Rather than prescribing a single modeling direction, the challenge
          explicitly encourages participants to explore reinforcement
          learning–based optimization, hybrid VED architectures, and modular
          reuse of pretrained components to improve clinical accuracy and
          linguistic fidelity. At the same time, the challenge strongly
          encourages the development of entirely new methodologies, innovative
          training strategies, and unconventional model designs that go beyond
          the provided baselines, fostering creativity and methodological
          diversity within the community.
        </p>

        <p>
          By leveraging this unprecedentedly large, clinically grounded VQA
          dataset together with the proposed baselines and optimization
          strategies, the goal of the CXR-ORACLE Challenge is for participants to
          fully exploit these resources to design and train the best possible
          CXR-ORACLE models, systems capable of accurately reasoning over chest
          radiographs and delivering reliable, clinically meaningful, and
          linguistically faithful answers to complex medical questions. In doing
          so, the challenge aims to accelerate progress in medical multimodal
          reasoning and foster the development of practical, interpretable, and
          computationally efficient AI solutions for radiology.
        </p>
      </div>
    </div>
  );
}

export default Home;
