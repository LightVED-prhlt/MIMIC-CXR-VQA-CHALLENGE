import ChestViewer from "../components/ChestViewer/ChestViewer";
import Table from "../components/Table/Table";
import { Link } from "react-router-dom";
import "./Pages.css"
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import sponsorLogo from "../assets/logo-gva-proyecto-prometeo.png";


function Home() {
  const timelineColumns = ["Date", "Challenge Milestone"];
  const ProgrammeColumns = ["Time", "Activity"];

  const timelineData = [
    ["Apr. 01, 2026", "Challenge Websites Opening/Registration Opens"],
    ["Apr. 28, 2026", "Training Data/Baseline Code Release"],
    ["Jun. 23, 2026", "Validation Data/Submission Code Release"],
    ["Jul. 01, 2026", "Submission Starts"],
    ["Aug. 31, 2026", "Submission Closes"],
    ["Sep. 01, 2026", "Winners Announcement"],
    ["Sep. 27, 2026", "CXR-ORACLE Challenge Events at MICCAI 2025"],
  ];
  
  const ProgrammeData = [
    ["00:00-00:10", "Introduction to the CXR-ORACLE Challenge"],
    ["00:10-00:55", "Presentations by winner teams"],
    ["00:55-01:05", "Results summary"],
    ["01:05-01:15", "Awards ceremony"],
    ["01:15-02:00", "Poster Session & Networking"],
  ];

  return (
    <div className="page-container">
      <ChestViewer />
      <div className="page-content">
        <p>
          <strong>The CXR-ORACLE Challenge</strong> introduces a new large-scale
          benchmark for medical VQA based on chest radiography. The challenge is
          built upon a new dataset comprising over <strong>3.2 million</strong> question–answer 
          pairs derived from 254,934 chest X-ray images, spanning 15 clinically 
          relevant categories. Questions are grounded in radiological findings, 
          while answers are open-ended, evidence-based, and linguistically diverse, 
          to faithfully reflect clinical reasoning rather than templated responses.
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
        <h3>Timeline</h3>
        <Table columns={timelineColumns} data={timelineData} />
        <h3>Programme</h3>
        <p>
          The Challenge will take place on (coming soon), in meeting room (coming soon). The tentative schedule is outlined below.
        </p>
        <Table columns={ProgrammeColumns} data={ProgrammeData} />
        <h3>The Task</h3>
        <p>
          This challenge focuses on Chest X-ray Visual Question Answering (VQA), where the goal is to
          automatically generate clinically meaningful answers to natural language questions by
          jointly reasoning over chest X-ray images and textual inputs. By enabling targeted and
          fine-grained queries about radiographic findings, anatomical structures, and disease
          characteristics, this task establishes a benchmark for multimodal reasoning in medical
          imaging and supports the development of models with potential applications in clinical
          decision support, education, and large-scale dataset annotation.
        </p>
        <p>
          For detailed information, please refer to <Link to="/TaskDescription">task description</Link>, 
          <Link to="/Dataset"> dataset</Link>, <Link to="/Assessment">assessment</Link>, and <Link to="/Submission">submission process</Link>.
        </p>
        <h3>Awards</h3>
        <p>
          The results from all participants will be made publicly available on leaderboard unless the submitted dockers
          incurred errors during the evaluation process. Teams are allowed to make multiple distinct submissions (but must 
          ensure they are not merely simple variations in hyperparameter values). The leaderboard will be accessible for 
          public viewing <Link to="/Leaderboard">here</Link>.
          <ul>
            <li>The first-place will receive additional certificates.</li>
            <li>Participants who successfully participated the challenge will be awarded certificates of participation.</li>
          </ul>
        </p>
        <h3>Organizers</h3>
        <p>
          Mohamed Aas Alas, polytechnic university of valencia, Spain
        </p>
        <p>
          Alberto Albiol Colomer, polytechnic university of valencia, Spain
        </p>
        <p>
          Roberto Paredes Palacios, polytechnic university of valencia, Spain
        </p>
        <h3>Sponsors</h3>
        <img
          src={sponsorLogo}
          alt="GVA Proyecto Prometeo"
          className="sponsor-logo"
        />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default Home;
