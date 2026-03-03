# Med-Agent-AI
This project is a Multi-Agent AI-Based Medical X-Ray Analysis System designed to assist users in screening X-ray images for potential abnormalities.

It provides a user-friendly graphical interface (GUI) where users can upload X-ray images of specific body parts and receive AI-generated analysis reports.

⚠️ Disclaimer:
This project is developed for research and educational purposes only. It is not a substitute for professional medical diagnosis or treatment.

Frontend (User Interface)
The application features a clean, intuitive, and easy-to-understand GUI.
Landing Page
Highlights the purpose of the platform.
On scrolling down, users see the option:
“Check for a Disease”

Disease Selection Page
When the user clicks “Check for a Disease,” they are redirected to a new page containing body-part options:
Spine
Brain
Leg
Hand
Each option represents a specialized AI agent trained for that specific body region.

Upload Modal
When a user selects a body part:
A pop-up appears.
User uploads the X-ray image of the selected body part.
A disclaimer checkbox must be accepted before submission.
Once uploaded, the image is sent to the backend for analysis.

Backend Architecture (Multi-Agent AI System)

Router Agent
The Router:
Verifies whether the uploaded X-ray matches the selected body part.
Prevents incorrect uploads (e.g., uploading a hand X-ray under “Spine”).
This ensures system robustness and reliability.

Specialist AI Agents
Each agent is trained specifically for a particular body region:
Spine Agent
Detects spinal abnormalities such as scoliosis or vertebral issues.
Brain Agent
Detects tumors or hemorrhages in brain scans.
Bone Agent (Leg/Hand)
Detects fractures or dislocations.
Chest Agent (Future Scope)
Detects pneumonia or lung-related abnormalities.
Each agent:
Uses Convolutional Neural Networks (CNNs).
Is trained using transfer learning.
Focuses only on its assigned body region.

AI Analysis Output
After the AI completes its evaluation, a results pop-up appears containing:
AI Analysis Summary
If abnormalities are detected:
“Possible hairline fracture detected in lower tibia.”
If no abnormalities are found:
“No visible abnormalities detected. The examined region appears healthy.”
The system provides a detailed explanation of what was detected.
Confidence level of the prediction.
General interpretation in easy-to-understand language.
Severity Level Indicator
Color-coded system:
Green → Healthy / No Issue
Yellow → Mild / Monitor Condition
Red → Urgent / Immediate Medical Attention Recommended
Suggested Action Plan
If no issue:
Encourage healthy lifestyle habits.
Suggest mobility exercises.
Recommend balanced calcium-rich diet.
If mild issue:
Suggest monitoring symptoms.
Recommend posture correction or guided exercises.
If severe issue:
Advise immediate consultation with a doctor.
Display urgent warning message.
⚠️ The system does not provide prescriptions or medical treatment plans.

Technology Stack
Frontend:
Next.js
Tailwind CSS
Backend:
FastAPI
AI Framework
PyTorch
Deployment:
Vercel (Frontend)
Hugging Face Spaces (Model Hosting)

Key Features
✔ User-friendly and intuitive GUI
✔ Multi-Agent AI Architecture
✔ Specialized CNN models per body region
✔ Router validation system
✔ AI-generated detailed reports
✔ Severity classification
✔ Explainable AI capability (future integration: Grad-CAM heatmaps)
✔ Responsible AI disclaimer implementation

Objective
The goal of this project is to demonstrate:
Multi-model orchestration
Transfer learning in medical imaging
Explainable AI concepts
Full-stack AI system development
Responsible deployment of healthcare AI systems
