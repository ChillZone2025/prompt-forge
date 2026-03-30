# Federal Grant Application Draft — NSF CAREER Award

## Cover Sheet Information

| Field | Detail |
|-------|--------|
| **Program** | NSF CAREER: Faculty Early Career Development Program |
| **Directorate** | Computer and Information Science and Engineering (CISE) |
| **Division** | Information and Intelligent Systems (IIS) |
| **Program Officer** | Dr. Sylvia Chen |
| **PI** | Dr. Hina Singh, Assistant Professor of Computer Science |
| **Institution** | Lakewood State University |
| **UEI** | LKW7D4R92K15 |
| **Proposal Title** | CAREER: Human-AI Collaborative Decision Support for Rural Healthcare Triage |
| **Requested Amount** | $549,872 (5 years) |
| **Proposed Start Date** | August 1, 2026 |
| **Proposed End Date** | July 31, 2031 |
| **Human Subjects** | Yes — involves surveys and interviews with healthcare workers and patients |
| **IRB Status** | Pending — protocol submitted to Lakewood State IRB, February 2026 |

---

## Project Summary (1 page max)

### Overview
This CAREER proposal establishes a research program in human-AI collaborative decision support systems, with specific application to healthcare triage in rural and underserved communities. Rural emergency departments face chronic staffing shortages, leading to triage decisions made by less experienced personnel with limited specialist consultation. This project develops and evaluates an AI-assisted triage decision support system that augments — rather than replaces — human clinical judgment.

### Intellectual Merit
The research advances fundamental knowledge in three areas: (1) human-AI interaction models that preserve clinician autonomy while providing evidence-based decision support, (2) explainable AI (XAI) methods tailored for time-critical, high-stakes healthcare decisions, and (3) adaptive interfaces that calibrate information presentation to the user's expertise level and cognitive load. The work contributes novel algorithms for real-time clinical decision support that explicitly account for the human decision-maker's uncertainty and cognitive state.

### Broader Impacts
The educational plan integrates research into undergraduate and graduate curricula through a new "AI for Social Good" course sequence, a summer research program for underrepresented students from regional community colleges, and a rural healthcare informatics workshop series. The project directly addresses health disparities in rural Ohio by developing technology that improves triage accuracy in resource-constrained settings. All software and de-identified datasets will be made publicly available.

### Keywords
Human-AI Interaction, Clinical Decision Support, Explainable AI, Rural Health, Healthcare Triage, Cognitive Load

---

## Project Description (15 pages max — excerpted)

### 1. Introduction and Motivation

Rural emergency departments serve approximately 46 million Americans but face staffing shortages that result in triage decisions made without specialist input. The Agency for Healthcare Research and Quality (AHRQ) reports that rural ED patients experience 20% longer wait times and 15% higher rates of triage under-classification compared to urban counterparts. These disparities are not caused by inferior clinician skill but by systemic resource constraints — fewer physicians per capita, limited specialist availability, and higher patient-to-nurse ratios.

This CAREER project addresses a fundamental question in human-AI interaction: **How should AI decision support systems present information to human decision-makers in time-critical, high-stakes environments where the consequences of error are severe?**

[...]

### 2. Research Plan

#### 2.1 Aim 1: Develop Explainable Triage Prediction Models (Years 1-2)

We will develop machine learning models trained on the MIMIC-IV Emergency Department dataset (approximately 425,000 ED visits from Beth Israel Deaconess Medical Center, 2011-2019) and the National Hospital Ambulatory Medical Care Survey (NHAMCS) dataset. Models will predict Emergency Severity Index (ESI) levels using presenting complaints, vital signs, chief complaint free text, and demographic variables.

Key innovation: rather than producing a single predicted ESI level, our models will output a probability distribution over all ESI levels with calibrated uncertainty estimates, enabling the triage nurse to understand both the recommendation and the system's confidence.

Methodology:
- Gradient-boosted decision trees (XGBoost) as baseline for tabular clinical data
- Transformer-based model for chief complaint free-text processing
- Conformal prediction for distribution-free uncertainty quantification
- SHAP (SHapley Additive exPlanations) values for feature-level explanations

#### 2.2 Aim 2: Design and Evaluate Adaptive Decision Support Interfaces (Years 2-4)

Building on the models from Aim 1, we will design interfaces that adapt the presentation of AI recommendations based on the user's measured cognitive load (via eye-tracking and interaction patterns) and self-reported expertise level.

**Human Subjects Component:** We will recruit 60 triage nurses from 8 rural EDs in Northeast Ohio for a mixed-methods study:
- Phase 1: Semi-structured interviews (n=20) to understand current triage workflows and attitudes toward AI decision support
- Phase 2: Randomized controlled usability study (n=40) comparing adaptive vs. static AI decision support interfaces using simulated triage scenarios
- Phase 3: Post-study interviews and surveys to assess trust, perceived utility, and workflow integration barriers

#### 2.3 Aim 3: Pilot Deployment and Longitudinal Evaluation (Years 4-5)

Pilot deployment at 2 partner rural EDs (Lakewood Community Hospital, Ashtabula County Medical Center) with 6-month longitudinal evaluation. Metrics include triage accuracy, time-to-triage, clinician trust calibration, and patient outcomes (ED length of stay, admission rates, 72-hour return visits).

[...]

### 3. Broader Impacts

The broader impacts of this project serve the national interest by improving healthcare delivery in underserved communities and diversifying the STEM workforce.

**Educational Integration:**
- New undergraduate course: "CS 395: AI for Social Good" (to be offered Spring 2027)
- New graduate seminar: "CS 595: Human-AI Interaction in Healthcare" (to be offered Fall 2027)
- Integration of triage decision support case studies into existing CS 440 (Machine Learning) course

**Broadening Participation:**
- Summer Research Experience for Community College Students (SRECCS): 8-week paid summer research program for students from Cuyahoga Community College, Lorain County Community College, and Lakeland Community College. Target: 6 students per summer, Years 2-5 (24 total). Focus on students from groups underrepresented in computing.
- Mentoring plan for all research participants following CUR (Council on Undergraduate Research) best practices.

**Community Engagement:**
- Annual rural healthcare informatics workshops in partnership with the Northeast Ohio Area Health Education Center (AHEC)
- Public-facing website with project updates, publications, datasets, and software releases

**Dissemination:**
- All publications will be deposited in NSF Public Access Repository
- Software released under MIT open-source license on GitHub
- De-identified datasets deposited in PhysioNet (for clinical data) and ICPSR (for survey/interview data)

---

## Budget Justification

### Year 1 Budget Detail

| Category | Amount | Justification |
|----------|--------|---------------|
| **Senior Personnel** | | |
| PI — Dr. Hina Singh (2 months summer salary) | $22,000 | PI will devote 2 months of summer effort to the project. AY effort is contributed (not charged to grant). |
| **Other Personnel** | | |
| Postdoctoral Researcher (1 FTE, 12 months) | $48,000 | Postdoc will lead Aim 1 model development. Salary is consistent with institutional postdoc salary scale. |
| Graduate Research Assistant (1, 12 months) | $28,000 | Stipend for 1 Ph.D. student to support Aim 1 data preprocessing and model evaluation. Rate per university GA policy. |
| Undergraduate Research Assistants (2, academic year, 10 hrs/week) | $12,000 | Two undergraduates assisting with data annotation and literature review. $15/hr x 10 hrs/week x 40 weeks. |
| **Fringe Benefits** | | |
| PI | $6,160 | 28% of salary |
| Postdoc | $14,400 | 30% of salary |
| GRA | $8,400 | 30% of stipend (includes tuition remission) |
| Undergrad | $918 | 7.65% (FICA only) |
| **Travel** | | |
| Domestic conference travel | $5,000 | Attendance at ACM CHI (Human-Computer Interaction) and AMIA Annual Symposium (medical informatics) for PI and postdoc. |
| International conference travel | $3,500 | Attendance at IJCAI (International Joint Conference on Artificial Intelligence) for PI. |
| **Equipment** | | |
| Eye-tracking system (Tobii Pro Spark) | $4,500 | Required for Aim 2 cognitive load measurement. |
| **Other Direct Costs** | | |
| Participant compensation (interviews, Year 1 pilot) | $3,000 | $50 gift cards for 60 interview/survey participants |
| Cloud computing (AWS) | $4,000 | Model training and hosting for Aim 1 development |
| Software licenses (NVivo qualitative analysis) | $1,200 | For interview coding and thematic analysis |
| Publication charges | $2,000 | Open-access publication fees for 2 papers |
| SRECCS program (not Year 1) | $0 | Program begins Year 2 |
| **Total Direct Costs (Year 1)** | **$163,078** |
| **F&A Costs (48% MTDC)** | **$74,141** |
| **Year 1 Total** | **$237,219** |

### 5-Year Budget Summary

| Year | Direct Costs | F&A (48% MTDC) | Total |
|------|-------------|----------------|-------|
| 1 | $163,078 | $74,141 | $237,219 |
| 2 | $118,500 | $52,920 | $171,420 |
| 3 | $55,280 | $24,358 | $79,638 |
| 4 | $41,600 | $18,304 | $59,904 |
| 5 | $1,691 | $0 | $1,691 |
| **Total** | **$380,149** | **$169,723** | **$549,872** |

---

## Data Management Plan (2 pages max)

### Types of Data
This project will generate three categories of data:
1. **Clinical prediction model data:** Feature-engineered datasets derived from MIMIC-IV and NHAMCS public datasets, trained model weights, and evaluation metrics.
2. **Software artifacts:** Source code for prediction models, decision support interfaces, and evaluation tools.
3. **Usability study data:** Eye-tracking recordings, interaction logs, survey responses, and semi-structured interview transcripts from the human subjects studies (Aims 2 and 3).

### Data Standards and Formats
- Clinical data: CSV and Parquet formats, documented with data dictionaries following FAIR (Findable, Accessible, Interoperable, Reusable) principles
- Software: Python, documented with README files and API documentation, version-controlled in Git
- Survey data: Qualtrics export format (CSV), codebook provided
- Interview transcripts: De-identified plain text, coded using NVivo

### Data Sharing and Public Access
- Model code and non-sensitive data will be shared via GitHub (MIT license) within 12 months of publication
- Trained model weights deposited in Hugging Face Model Hub
- De-identified clinical datasets deposited in PhysioNet
- Survey instruments deposited in ICPSR

### Data Preservation
All data will be preserved for a minimum of 10 years after the end of the award period, per university data retention policy. Primary storage: university institutional repository (Lakewood State Digital Commons). Backup: AWS S3 Glacier.

### Privacy and Confidentiality
All survey and interview data will be de-identified prior to analysis. Participants will be assigned random identifiers. Audio recordings will be transcribed and then deleted. Consent forms and any linking files will be stored separately from data in encrypted university-managed storage.

*Note: The DMP does not address specific protections for human subjects data collected from healthcare workers and patients, including HIPAA considerations for any patient-related data that may be incidentally collected during the pilot deployment (Aim 3), or the IRB-required data security protocols for the vulnerable population components of the study.*

---

## Facilities, Equipment, and Other Resources

### Computing Resources
- **Lakewood State HPC Cluster:** 48 nodes, NVIDIA A100 GPUs (8 per node), 100TB shared storage. PI has guaranteed allocation of 2 nodes for project duration.
- **AWS Cloud:** Department holds AWS Education credits ($10,000/year). Additional cloud costs budgeted in proposal.
- **Lab Space:** PI's Human-AI Interaction Lab (Room 312, Science Building) — 800 sq ft, 6 workstations, eye-tracking equipment.

### Clinical Partner Sites
- **Lakewood Community Hospital:** 120-bed community hospital with 24/7 ED. Letter of support from Dr. Maria Gonzalez, ED Medical Director. Hospital IT will provide de-identified triage data extracts for model validation.
- **Ashtabula County Medical Center:** 90-bed rural hospital, designated Critical Access Hospital. Letter of support from Director of Nursing.

### Library and Research Support
- University library provides access to ACM Digital Library, IEEE Xplore, PubMed Central, and Web of Science.
- Office of Sponsored Programs provides pre-award and post-award grant management.

---

## Biographical Sketch — Dr. Hina Singh

### Professional Preparation
| Institution | Major | Degree | Year |
|------------|-------|--------|------|
| Indian Institute of Technology Delhi | Computer Science | B.Tech | 2015 |
| Carnegie Mellon University | Human-Computer Interaction | M.S. | 2017 |
| Carnegie Mellon University | Human-Computer Interaction | Ph.D. | 2021 |

### Appointments
| Position | Institution | Dates |
|---------|------------|-------|
| Assistant Professor of Computer Science | Lakewood State University | 2021 – present |
| Postdoctoral Researcher, HCII | Carnegie Mellon University | 2021 (3 months) |

### Products — Most Closely Related to Proposed Work

1. Singh, H., & Rodriguez, A. (2025). "Adaptive Explainability in Clinical Decision Support: A Framework for Cognitive Load-Aware Interfaces." *ACM Conference on Human Factors in Computing Systems (CHI)*. DOI: 10.1145/3613904.3642100
2. Singh, H., Chen, A., & Patel, B. (2024). "Calibrated Uncertainty in Emergency Triage Prediction: Conformal Methods for High-Stakes Clinical AI." *Journal of Biomedical Informatics*, 148, 104532.
3. Singh, H. (2024). "Trust Dynamics in Human-AI Collaborative Decision Making Under Time Pressure." *Proceedings of the AAAI Conference on Artificial Intelligence*, 38(1), 15234-15242.
4. Singh, H., & Williams, K. (2023). "Explainable AI for Non-Expert Users: A Systematic Review and Design Framework." *International Journal of Human-Computer Studies*, 178, 103089.
5. Singh, H., & Patel, B. (2023). "Toward Equitable AI-Assisted Triage: Bias Detection and Mitigation in Emergency Department Prediction Models." *AMIA Annual Symposium Proceedings*, 2023, 982-991.

### Products — Other Significant Contributions

1. Singh, H., Kim, C., & Nakamura, I. (2025). "Federated Learning for Privacy-Preserving Clinical NLP Across Rural Hospital Networks." *In preparation.* Target: NeurIPS 2025.
2. Chen, A., Singh, H., & Davis, K. (2024). "Adversarial Robustness of Transformer-Based Clinical Text Classification." *IEEE Transactions on Neural Networks and Learning Systems*, 35(4), 4821-4835.
3. Singh, H. (2022). "Human-Centered Design of AI Decision Support for Emergency Medicine." *Ph.D. Dissertation*, Carnegie Mellon University.
4. Rodriguez, A., Singh, H., & Thompson, J. (2024). "Multi-Modal Sensing for Real-Time Cognitive Load Estimation in Clinical Settings." *ACM Conference on Intelligent User Interfaces (IUI)*. DOI: 10.1145/3640543.3645200
5. Singh, H., & Lee, M. (2023). "Community-Engaged Research Methods for Rural Health Technology Design." *Journal of Participatory Medicine*, 15(2), e41523.

### Synergistic Activities
1. Faculty advisor, Lakewood State ACM-W (Women in Computing) chapter, 2022-present
2. Reviewer for ACM CHI, CSCW, AAAI, AMIA Annual Symposium
3. Organizer, Northeast Ohio Rural Health Informatics Workshop Series, 2023-present
4. Mentor, CRA-WP DREU (Distributed Research Experiences for Undergraduates) program, Summer 2023, 2024
5. Invited panelist, NSF CAREER Workshop for Early-Career Faculty, 2024

---

## Current and Pending (Other) Support

### Current Support

**Award 1:**
| Field | Detail |
|-------|--------|
| **Source** | NSF CISE/IIS |
| **Title** | "Explainable AI Methods for Time-Critical Decision Support" |
| **Award Number** | IIS-2238475 |
| **Amount** | $320,000 |
| **Period** | 08/2023 – 07/2026 |
| **PI Effort** | 1 month summer |
| **Status** | Active |
| **Overlap** | The current award focuses on general XAI methods. The CAREER proposal applies XAI specifically to healthcare triage with human subjects evaluation — distinct research questions and methodology. |

**Award 2:**
| Field | Detail |
|-------|--------|
| **Source** | Lakewood State University — Internal Research Grant |
| **Title** | "Pilot Study: AI-Assisted Triage in Rural Emergency Departments" |
| **Award Number** | LSU-IRG-2025-018 |
| **Amount** | $15,000 |
| **Period** | 01/2025 – 12/2025 |
| **PI Effort** | 0.5 month summer |
| **Status** | Active |
| **Overlap** | Pilot data from this internal grant informs the CAREER proposal design. No budget overlap. |

### Pending Support

**Pending 1:**
| Field | Detail |
|-------|--------|
| **Source** | NSF CISE/IIS — CAREER |
| **Title** | "CAREER: Human-AI Collaborative Decision Support for Rural Healthcare Triage" |
| **Amount** | $549,872 |
| **Period** | 08/2026 – 07/2031 |
| **PI Effort** | 2 months summer |
| **Status** | This proposal |

*Note: Not disclosed in Current & Pending: Dr. Singh serves as Co-PI on an industry-funded project with TriageAI, Inc. ($85,000, 09/2025 – 08/2026) developing a commercial triage prediction product. This project uses similar datasets (MIMIC-IV) and related methods (gradient-boosted triage models). The project was initiated after the C&P deadline for the current NSF award but before this CAREER proposal submission.*

---

## PLANTED ISSUES (for evaluation — agent should catch these)

1. **Postdoc salary below NIH NRSA minimum.** The budget lists the postdoctoral researcher salary at $48,000/year. The NIH NRSA postdoctoral stipend for FY2025 starts at $56,484 for Year 0 experience. While NSF does not mandate NIH NRSA rates, the proposed salary is significantly below the community standard and would make it difficult to recruit a qualified postdoc. NSF reviewers frequently flag postdoc salaries below the NRSA minimum as evidence of inadequate mentoring environment and poor institutional support. The salary should be at minimum $56,484 (NRSA Year 0) and ideally adjusted for the candidate's experience level. This also raises questions about the institution's commitment to postdoctoral training — a critical element of a CAREER proposal.

2. **Data management plan doesn't address human subjects data protections adequately.** The DMP describes general data types and sharing plans but fails to address: (a) specific IRB-required data security protocols for interview and survey data from human subjects, (b) HIPAA considerations for Aim 3's pilot deployment in hospital EDs where patient-related data may be incidentally collected, (c) how eye-tracking biometric data will be protected (eye-tracking data can be used for re-identification), (d) specific procedures for handling audio recordings beyond "transcribed and deleted," (e) how data from the vulnerable population component (rural healthcare workers who could face professional consequences if their triage performance data were disclosed) will be protected. NSF reviewers evaluate DMP rigor, and human subjects proposals with inadequate data protection plans are frequently returned or receive panel criticism.

3. **Broader impacts section is generic and doesn't connect to the specific research.** The broader impacts include standard elements (new courses, summer research program, community workshops) but the connection between the research and the educational plan is superficial. The "AI for Social Good" course and "Human-AI Interaction in Healthcare" seminar are listed as new courses but there is no detail on how they differ from existing offerings, how research findings will be integrated into the curriculum, or how student learning will be assessed. The SRECCS summer program targets community college students but doesn't explain how 8 weeks is sufficient for meaningful research engagement or what happens after the program ends (persistence tracking, transfer support). NSF CAREER proposals are expected to have educational plans that are as well-developed as the research plan — this one reads as an afterthought. Reviewers will note that the broader impacts could be attached to any AI research proposal, not specifically this one.

4. **Biographical sketch lists a publication "in preparation."** Product #6 in the "Other Significant Contributions" section lists "Singh, H., Kim, C., & Nakamura, I. (2025). 'Federated Learning for Privacy-Preserving Clinical NLP Across Rural Hospital Networks.' *In preparation.* Target: NeurIPS 2025." NSF PAPPG (NSF 25-1, Chapter II.D.2.h) explicitly states that the biographical sketch may include "published or accepted for publication" works only. Publications that are "submitted," "under review," or "in preparation" are NOT allowed. This is a compliance violation that could result in the proposal being returned without review. The PI should remove this entry and replace it with a published or accepted work.

5. **Budget includes travel to a conference not relevant to the research area.** The Year 1 budget includes $3,500 for international travel to IJCAI (International Joint Conference on Artificial Intelligence). While IJCAI is a prestigious AI conference, the proposed research is in human-AI interaction and healthcare informatics — the core venues are CHI, CSCW, AMIA, and IUI (all already listed in the PI's publication record). IJCAI focuses on theoretical AI, planning, reasoning, and knowledge representation. NSF reviewers will question why travel to IJCAI is necessary when the PI's research community is clearly in HCI and health informatics. The budget justification should either (a) explain the specific relevance of IJCAI to the proposed work or (b) reallocate the travel funds to a more relevant venue (e.g., AMIA Clinical Informatics Conference, ACM CSCW, or HFES Annual Meeting).

6. **Current & Pending does not disclose a related industry-funded project (conflict of interest risk).** Dr. Singh has an industry-funded project with TriageAI, Inc. ($85,000) that uses similar datasets (MIMIC-IV) and related methods (triage prediction models) but it is not disclosed in the Current & Pending support section. NSF requires disclosure of ALL current and pending support from all sources, including industry. Failure to disclose creates a conflict-of-interest risk: the CAREER proposal and the TriageAI project share overlapping intellectual territory, and NSF needs to evaluate whether there is scientific, budgetary, or commitment overlap. Non-disclosure of support is a research integrity violation under NSF's Research Term & Condition, Article IV. In recent years, NSF has increased enforcement of C&P disclosure requirements, and omissions — even if unintentional — can result in award suspension, termination, or debarment. The PI must disclose the TriageAI project and provide a clear overlap statement explaining how the two projects differ.
