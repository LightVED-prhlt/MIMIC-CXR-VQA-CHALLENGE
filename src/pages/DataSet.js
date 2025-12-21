import "./DataSet.css";

function DataSet() {
  return (
    <div className="dataset-page">
      <div className="dataset-content">
        <h2>The Data set</h2>

        <p>
          The data in this challenge is acquired from both left and right
          forearms of 85 volunteers, acquired at University College London,
          London, U.K. with a racial-, gender-, age-diverse subject cohort.
          Fig. 3 shows the equipment setting during acquisition. No specific
          exclusion criteria as long as the participants do not have allergies
          or skin conditions which may be exacerbated by US gel. All scanned
          forearms are in good health.
        </p>

        <p>
          The data is randomly split into train, validation, and test sets of
          50, 3, and 32 subjects (100, 6, 64 scans; ~64k, ~9k, ~90k frames),
          respectively.
        </p>

        <div className="figure">
          <p className="figure-caption">
            Fig. 3. Freehand US data acquisition system.
          </p>
        </div>

        <h3>Images</h3>

        <p>
          The 2D US images were acquired using an Ultrasonix machine (BK,
          Europe) with a curvilinear probe (4DC7-3/40). The acquired US frames
          were recorded at 20 fps, with an image size of 480×640, without
          speckle reduction. The frequency was set at 6MHz with a dynamic
          range of 83 dB, an overall gain of 48% and a depth of 9 cm.
        </p>

        <p>
          Both left and right forearms of volunteers were scanned. For each
          forearm, the US probe was positioned near the elbow and moved around
          the fixed contact point. It was first fanned side-to-side along the
          short axis of the skin-probe interface and then rocked along the
          long axis in a similar manner. Afterwards, the probe was rotated
          about 90 degrees, and the fanning and rocking motions were repeated.
        </p>

        <p>
          The dataset contains 170 scans in total, 2 scans associated with
          each subject, around 1500 frames for each scan.
        </p>

        <h3>
          Train Data Structure{" "}
          <span className="inline-link">
            (<a href="www.google.com">Link to train dataset</a>)
          </span>
        </h3>

        <pre className="code-block">
{`Freehand_US_data_train_2025/
|
├── frames_transfs/
|   ├── 000/
|   |   ├── RH_rotation.h5   # US frames and associated transformations
|   |   └── LH_rotation.h5
|   ├── 001/
|   |   ├── RH_rotation.h5
|   |   └── LH_rotation.h5
|   └── ...
|
├── landmarks/
|   ├── landmark_000.h5      # landmarks in scans of subject 000
|   ├── landmark_001.h5
|   └── ...
|
└── calib_matrix.csv         # calibration matrix`}
        </pre>
      </div>
    </div>
  );
}

export default DataSet;
