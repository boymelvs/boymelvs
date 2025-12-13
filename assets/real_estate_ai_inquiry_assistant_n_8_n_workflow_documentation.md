# Real Estate AI Inquiry Assistant – Workflow Documentation (OnlineJobs.ph Submission)

## Summary
This document describes a **production-ready n8n automation** I built for handling Facebook Messenger real estate inquiries. The workflow receives messages, maintains conversation memory, qualifies leads, matches property listings, and responds using AI or predefined logic. All data is persisted without using a traditional database.

This documentation is written for **employers and non-technical reviewers** to clearly understand the system design, logic, and value.

---

## Business Objective
- Respond to Facebook Messenger inquiries 24/7
- Qualify leads automatically (name, phone, email, intent)
- Match users with relevant properties
- Reduce manual agent workload
- Store conversations and leads for follow‑up

---

## Tools & Stack
- **Automation:** n8n (self-hosted)
- **Channel:** Facebook Page Messenger API
- **AI:** Google Gemini (via n8n LangChain node)
- **State Storage:** Google Drive (JSON file)
- **Lead Storage:** Google Sheets

No paid CRM or database is required.

---

## High-Level Flow
1. User sends a message on Facebook Messenger
2. Workflow receives and validates the webhook
3. Message is normalized and stored
4. Previous conversation state is loaded
5. Intent and lead data are extracted
6. Workflow decides:
   - Quick rule-based reply, or
   - AI-generated reply with listings
7. Response is sent back to Messenger
8. Conversation state and lead data are saved

---

## Detailed Workflow Breakdown

### 1. Facebook Webhook (From_FB)
Receives all Messenger events (GET & POST).
- Handles webhook verification
- Accepts incoming messages

---

### 2. Message Validation
- Filters out non-text events
- Ensures only valid user messages continue

---

### 3. Data Normalization
Extracts and standardizes:
- Sender ID
- Message text
- Page ID
- Page access token

This ensures consistent data across all nodes.

---

### 4. Conversation State (AI Memory)
**How memory works:**
- A JSON file in Google Drive stores conversation state per user
- Each user is keyed by their Facebook sender ID

Stored data includes:
- Conversation history
- Current stage (greeting, collecting phone, AI, etc.)
- Extracted filters (property type, budget, location)

This allows natural, multi‑message conversations.

---

### 5. State Manager (Core Logic)
This is the main logic controller.

It performs:
- Intent detection (rent, buy, price, inquiry, greeting)
- Lead extraction (name, phone, email)
- Property filter detection
- Conversation stage control

Example stages:
- greeting
- collect_phone
- ready_for_ai
- ai
- thanks
- stop_ai

---

### 6. Quick Reply Path (No AI)
If the message is:
- Greeting
- Thank you
- Request for human agent

The workflow:
- Sends an immediate predefined reply
- Updates the user state
- Ends the flow

This saves AI cost and response time.

---

### 7. AI Processing Path
If AI is required:

**a. Property Listings Cache**
- Loads available listings (can be replaced with API or database later)

**b. Listing Filter**
- Matches listings using:
  - Property type
  - Location
  - Budget

**c. AI Prompt Generator**
The prompt includes:
- Full conversation state
- Filtered listings
- All available listings
- Behavior and language rules

---

### 8. AI Response Generation
- Uses Google Gemini model
- Generates a human-like reply
- Supports Taglish when user uses Taglish
- Maintains polite, professional tone

---

### 9. Lead Logging (Google Sheets)
Automatically saves or updates:
- Name
- Phone
- Email
- Property type
- Budget
- Location
- User intent
- Timestamp

This acts as a lightweight CRM.

---

### 10. State Persistence
After replying:
- Conversation is appended to history
- State file in Google Drive is updated
- Typing indicator is turned off

Conversation continues seamlessly on next message.

---

## Key Automation Features
- Stateless server, stateful conversations
- No database required
- AI + rule-based hybrid logic
- Lead qualification automation
- Property matching logic
- Messenger UX enhancements (typing, seen)

---

## Why This Workflow Is Valuable
- Reduces manual agent workload
- Never misses a lead
- Scales without hiring more staff
- Easy to maintain and extend
- Production-ready automation design

---

## Possible Extensions
- Replace listings with live API
- Add appointment scheduling
- Connect to SMS or email follow-ups
- Migrate state to database if needed

---

**Created and implemented by:**
Automation Specialist (n8n / AI / Messenger Workflows)

**Purpose:** OnlineJobs.ph job application documentation

