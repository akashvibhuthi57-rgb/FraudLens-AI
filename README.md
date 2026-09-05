# 🛡️ FraudLens AI

## AI Risk Intelligence Platform

FraudLens AI is a defense-only fintech risk platform designed to help merchants identify suspicious transactions, understand payment risk, and make safer payment decisions.

**Built by:** AKASH B V  
**Track:** Razorpay AI Buildathon 2026 — AI Risk Manager

### 🚀 Live Demo

https://fraud-lens-ai-gamma.vercel.app

### 💻 GitHub

https://github.com/akashvibhuthi57-rgb/FraudLens-AI

---

## 🎯 Problem

Merchants can lose revenue through fraudulent transactions, payment failures, chargebacks, and payment abuse.

FraudLens AI combines risk scoring, failure prediction, gateway recommendation, and explainable AI into a single workflow so that a merchant can investigate a transaction before taking action.

---

## 💡 What FraudLens AI Does

### 🛡 Fraud Detection Agent
Calculates a transaction fraud score using transaction attributes such as amount, country, and device information.

### 📉 Failure Prediction Agent
Estimates payment failure risk using country, currency, and card BIN information.

### 🔀 Smart Gateway Routing
Recommends a payment gateway based on the predicted failure risk.

### 🤖 AI Decision Engine
Uses Gemini AI to generate an understandable explanation of the transaction risk and recommendation.

### 📊 Risk Dashboard
Provides analytics for:
- Total transactions
- High-risk payments
- Revenue recovery potential
- Fraud analytics
- Gateway distribution
- Transaction history

### ✏️ Transaction Management
The dashboard supports:
- Create
- Read
- Update
- Delete

transactions through Supabase.

### 🔐 Authentication
Supabase Authentication provides:
- Sign up
- Login
- Logout

---

## ⚙️ How It Works

```text
Transaction Input
       ↓
Fraud Detection
       ↓
Failure Prediction
       ↓
Gateway Recommendation
       ↓
Gemini AI Explanation
       ↓
Supabase Storage
       ↓
Risk Dashboard
```

---

## 🧩 Technology Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 |
| Language | TypeScript |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| AI | Google Gemini |
| Charts | Recharts |
| Deployment | Vercel |

---

## 📂 Project Structure

```text
app/
├── analyze/
│   └── page.tsx
├── architecture/
│   └── page.tsx
├── dashboard/
│   └── page.tsx
├── edit/
│   └── [id]/
│       └── page.tsx
├── login/
│   └── page.tsx
├── signup/
│   └── page.tsx
├── api/
│   ├── explain/
│   │   └── route.ts
│   ├── delete-transaction/
│   │   └── route.ts
│   └── update-transaction/
│       └── route.ts
└── components/

src/
└── lib/
    ├── auth.ts
    ├── failurePredictor.ts
    ├── fraudEngine.ts
    ├── gemini.ts
    ├── routingEngine.ts
    ├── supabase.ts
    └── components/
        ├── DeleteButton.tsx
        ├── EditButton.tsx
        ├── EditForm.tsx
        ├── FraudChart.tsx
        ├── GatewayChart.tsx
        └── LogoutButton.tsx
```

---

## 🛠️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/akashvibhuthi57-rgb/FraudLens-AI.git
cd FraudLens-AI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Never commit `.env` or `.env.local` to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔐 Authentication Flow

```text
Landing Page
    ↓
Sign Up
    ↓
Login
    ↓
Dashboard
    ↓
Analyze Transaction
    ↓
Logout
```

---

## 🧠 AI Explainability

For a transaction, FraudLens sends relevant transaction and risk information to Gemini and displays an AI-generated explanation.

Example output areas include:
- Risk level
- Why the transaction may be suspicious
- Why payment may fail
- Why a gateway was selected
- Recommended merchant action

The AI is used as an explainability and decision-support layer; it is not presented as a guaranteed fraud verdict.

---

## 🛡️ Defense-Only Design

FraudLens AI is intended only for defensive fraud-risk analysis and merchant protection.

It does **not** provide:
- Attack instructions
- Fraud execution methods
- Credential theft
- Evasion techniques
- Payment abuse tooling

---

## 📈 Track 02 — AI Risk Manager

FraudLens AI is aligned with the AI Risk Manager theme through:

- Fraud-risk scoring
- Transaction monitoring
- Explainable AI decisions
- Risk-focused dashboarding
- Merchant loss prevention

### Important Evaluation Roadmap

The current application contains the product and risk-analysis workflow. For a complete Track 02 ML evaluation, the next milestone is to add a labeled fraud dataset and report performance on a held-out test set:

- Precision
- Recall
- F1 score
- False-positive rate
- False-positive cost

These metrics should be measured on unseen test data rather than estimated or hard-coded.

---

## 🔮 Roadmap

### Phase 1 — Current
- Transaction analyzer
- Fraud scoring
- Failure prediction
- Gateway recommendation
- Gemini explanation
- Supabase persistence
- Dashboard
- CRUD
- Authentication

### Phase 2 — Risk Evaluation
- Labeled fraud dataset
- Train/test split
- Precision and recall
- Confusion matrix
- False-positive cost analysis

### Phase 3 — Advanced Risk Intelligence
- Fraud-spike detection
- Risk trend monitoring
- Alert center
- Explainable reason codes
- Risk decision: APPROVE / REVIEW / BLOCK

---

## 📸 Demo Flow

A typical demonstration can follow:

```text
1. Open FraudLens AI
2. Sign up / Login
3. Open Transaction Analyzer
4. Enter transaction details
5. Run fraud analysis
6. Review fraud score and failure risk
7. Review recommended gateway
8. Read Gemini AI explanation
9. Open Dashboard
10. Review charts and transaction history
11. Edit or delete a transaction
12. Logout
```

---

## 👨‍💻 Author

**AKASH B V**

FraudLens AI — AI Risk Intelligence Platform

---

## ⭐ Support

If you find the project useful, consider starring the repository and sharing feedback.

Built with Next.js, Supabase, Gemini AI, TypeScript, and Vercel.
