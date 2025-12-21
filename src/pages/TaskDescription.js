import "./TaskDescription.css";

function TaskDescription() {
  return (
    <div className="task-page">
      <div className="task-content">
        <h2>Background: Freehand US Reconstruction</h2>

        <p>
          The aim of Freehand US reconstruction is to estimate the transformation
          between any pair of US frames in an US scan without any external tracker,
          and thus reconstruct 2D US images into a 3D volume (see Fig. 1).
        </p>

        <p className="figure-caption">
          Fig. 1. An illustration of freehand US reconstruction.
        </p>

        <h2>Task Description</h2>

        <p>
          The algorithm is expected to take the entire scan as input and output
          two different sets of transformation-representing displacement vectors
          as results, a set of displacement vectors on individual pixels and a set
          of displacement vectors on provided landmarks. There is no requirement
          on how the algorithm is designed internally, for example, whether it is
          learning-based method; frame-, sequence- or scan-based processing; or,
          rigid-, affine- or nonrigid transformation assumptions. Details are
          explained further in <a href="www.google.com">Assessment</a>.
        </p>

        <p>
          Participant teams are expected to make use of the sequential data and
          potentially make knowledge transfer from US data with other scanning
          protocols, for example the dataset released in TUS-REC2024. The
          participant teams are expected to take US scan as input and output two
          sets of pixel displacement vectors, indicating the transformation to
          reference frame. The evaluation process will take the generated
          displacement vectors from their dockerized models, and produce the
          final accuracy score to represent the reconstruction performance, at
          local and global levels, representing different clinical application of
          the reconstruction methods.
        </p>

        <p>
          We provide a baseline algorithm in this <a href="www.google.com">repo</a>.
        </p>
      </div>
    </div>
  );
}

export default TaskDescription;
