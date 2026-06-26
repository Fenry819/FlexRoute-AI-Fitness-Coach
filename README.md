# FlexRoute - AI Fitness Coach & Dynamic Routine Architect

FlexRoute is a fully containerized, locally-hosted AI fitness application designed to act as a clinical biomechanist and elite strength programmer. 

By leveraging a hybrid AI architecture—routing between local LLMs (Mistral) and cloud logic (Gemini)—FlexRoute dynamically generates training macrocycles, enforces injury guardrails, and provides real-time biomechanical coaching without unnecessary API bloat.

## ✨ Core Architecture & Features

* 🧠 **Semantic Routing (Dual-Engine AI):** Uses LangGraph to classify user intent. Casual chat and fitness Q&A are routed to a local Mistral LLM to save API costs, while complex structural routine generation is routed to Gemini 2.5 Flash.
* 🛡️ **Dynamic Guardrails:** Users can report physical injuries in natural language. The system parses the anatomy, updates a secure local SQLite database, and strictly bans exercises that load the injured chain in all future generated routines.
* 🏗️ **Style-Aware Architect:** Dynamically shifts programming logic based on the user's training style (e.g., automatically swapping barbells for bodyweight flows and time-based holds if the user selects 'Yoga').
* 📚 **RAG Biomechanics Engine:** Utilizes Qdrant vector databases to inject clinical rehab protocols and form cues directly into the LLM's context window when injuries are detected.
* 🚀 **1-Click Execution:** Fully containerized startup sequence bridging an Electron/React frontend with a Python/FastAPI backend.

## 🛠️ Tech Stack

**Frontend (The Visual Shell):**
* React 18 + Vite
* Electron (Desktop Containerization)
* TailwindCSS + Framer Motion 

**Backend (The Neural Engine):**
* Python 3 (FastAPI)
* SQLite (Secure local state & profile memory)
* LangGraph & LangChain (AI Routing & Multi-Agent orchestration)
* Ollama (Local Mistral LLM)
* Qdrant (Local Vector Database)

---

## ⚙️ Prerequisites

Before installing FlexRoute, ensure you have the following installed on your machine:
1. [Node.js](https://nodejs.org/) (v18 or higher)
2. [Python](https://www.python.org/) (3.10 or higher)
3. [Ollama](https://ollama.com/) (You must pull the Mistral model locally by running `ollama run mistral` in your terminal).

---

## 🚀 Installation & Setup

**1. Clone the repository:**

git clone [https://github.com/Fenry819/FlexRoute-AI-Fitness-Coach.git](https://github.com/Fenry819/FlexRoute-AI-Fitness-Coach.git)

cd FlexRoute-AI-Fitness-Coach

**2. Install Frontend Dependencies:**

npm install

**3. Install Backend Dependencies:**
**Create a virtual environment and install the required Python packages.**

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

**4. Configure Environment Variables:**
**You must provide your own Google Gemini API keys for the cloud generation routing. Create a file named .env in the root directory of the project and add your keys:**

# Primary and fallback keys for Cloud LLM generation

GOOGLE_API_KEY=your_primary_gemini_api_key_here

GOOGLE_API_KEY_BACKUP=your_backup_gemini_api_key_here

(Note: Do not wrap the keys in quotes. The .gitignore is pre-configured to ensure this file is never pushed to public repositories).

🎮 Usage
FlexRoute is designed for seamless local booting via a Windows Batch script.

Simply double-click the start_flexroute.bat file in the root directory. This script automates the entire boot sequence:

a. Wakes up the local Ollama LLM API.
b. Activates the Python virtual environment and boots the FastAPI backend on port 8000.
c. Launches the React/Electron interactive desktop application.

To close the application, simply exit the Electron window and close the backend terminal.

🤝 Disclaimer & License

This project is an open-source portfolio piece created to demonstrate multi-agent LLM orchestration, hybrid cloud/local routing, and full-stack integration. FlexRoute provides AI-generated fitness advice and should not replace professional medical or clinical guidance.
