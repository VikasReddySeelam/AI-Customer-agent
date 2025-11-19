"use client";

import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface QuickAction {
  title: string;
  description: string;
  prompt: string;
  icon: string;
}

const quickActions: QuickAction[] = [
  {
    title: "Board Meeting Notice",
    description: "Draft notice for board meeting",
    prompt: "Draft a board meeting notice for approval of financial statements under the Companies Act, 2013",
    icon: "📋"
  },
  {
    title: "Company Incorporation",
    description: "Post-incorporation compliance checklist",
    prompt: "List the post-incorporation compliance and GST registration process for a private limited company",
    icon: "🏢"
  },
  {
    title: "FEMA Compliance",
    description: "Foreign investment requirements",
    prompt: "Advise on FEMA requirements and documentation for inbound foreign investment",
    icon: "💱"
  },
  {
    title: "Tax Filing Checklist",
    description: "Annual tax compliance guide",
    prompt: "Prepare checklist for annual income tax and GST filings for Indian startups",
    icon: "📊"
  },
  {
    title: "Auditor Appointment",
    description: "Board resolution template",
    prompt: "Create a board resolution template for appointment of auditors under the Companies Act",
    icon: "✍️"
  },
  {
    title: "Recent Updates",
    description: "Latest regulatory changes",
    prompt: "Summarize recent changes in FEMA, GST, and income tax affecting SMEs and startups",
    icon: "📰"
  }
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Welcome to Corporate Legal & Business Consulting Assistant! 🏛️

I'm your AI-powered senior company secretary and corporate legal professional specializing in Indian corporate law.

**I can help you with:**

✓ Company incorporation and compliance
✓ Board meetings, AGMs, and documentation
✓ Income Tax, GST, and FEMA compliance
✓ Legal document drafting and templates
✓ Business consulting and expansion strategies
✓ Regulatory updates and case law summaries

**How would you like to proceed?**

You can either:
- Click on a quick action below for common tasks
- Type your specific question or requirement in the chat

Let's get started! 📋⚖️`
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(message);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickAction = (prompt: string) => {
    handleSend(prompt);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes("board meeting notice") || lowerQuery.includes("financial statements")) {
      return `**BOARD MEETING NOTICE TEMPLATE**

**[COMPANY NAME]**
**CIN: [Company Identification Number]**
**Registered Office: [Address]**

---

**NOTICE OF BOARD MEETING**

Date: [Date]

To,
The Directors
[Company Name]

Dear Sir/Madam,

**Subject: Notice of Board Meeting**

Notice is hereby given that a meeting of the Board of Directors of the Company will be held as per the following details:

**Meeting Details:**
- **Date:** [Date]
- **Time:** [Time]
- **Venue:** [Physical Address / Video Conferencing Link]
- **Mode:** [Physical / Video Conference / Hybrid]

**AGENDA:**

1. To note the presence of quorum
2. To approve the draft financial statements for the year ended [Date]
3. To approve the Board's Report
4. To recommend dividend (if applicable)
5. To fix date, time, and venue for Annual General Meeting
6. Any other matter with the permission of the Chair

**Compliance Notes:**
✓ Notice issued as per Section 173 of the Companies Act, 2013
✓ Minimum 7 days' notice provided
✓ Quorum: 1/3rd of total strength or 2 directors, whichever is higher
✓ Interested directors to disclose interest and abstain from voting

Please confirm your attendance.

Yours faithfully,

[Name]
Company Secretary
[Membership Number]

---

**Next Steps:**
1. Send notice via email/registered post
2. Maintain proof of dispatch
3. Prepare agenda notes and supporting documents
4. Arrange video conferencing facility (if required)
5. Prepare attendance register and minutes book`;
    }

    if (lowerQuery.includes("post-incorporation") || lowerQuery.includes("compliance") && lowerQuery.includes("private limited")) {
      return `**POST-INCORPORATION COMPLIANCE CHECKLIST**

**Phase 1: Immediate Actions (Within 30 Days)**

✅ **1. Certificate of Incorporation**
   - Collect Certificate of Incorporation from MCA
   - Obtain CIN (Corporate Identity Number)

✅ **2. PAN & TAN Application**
   - Apply for PAN (Permanent Account Number)
   - Apply for TAN (Tax Deduction Account Number)
   - Timeline: 15-20 days

✅ **3. Bank Account Opening**
   - Open current account in company's name
   - Submit: MOA, AOA, COI, PAN, Board Resolution
   - Deposit share capital

✅ **4. GST Registration** (if applicable)
   - Register on GST portal within 30 days of incorporation
   - Required if turnover exceeds ₹40 lakhs (₹20 lakhs for services)
   - Documents: PAN, COI, Address proof, Bank statement

**Phase 2: Statutory Registers (Within 30 Days)**

✅ **5. Maintain Statutory Registers**
   - Register of Members (Section 88)
   - Register of Directors & KMP (Section 170)
   - Register of Charges (Section 85)
   - Register of Investments (Section 186)
   - Minutes Book (Section 118)

**Phase 3: First Board Meeting (Within 30 Days)**

✅ **6. Convene First Board Meeting**
   Agenda:
   - Appointment of First Auditor (Section 139)
   - Appointment of Key Managerial Personnel
   - Registered Office address confirmation
   - Common Seal adoption
   - Opening of Bank Account
   - Issue of Share Certificates

**Phase 4: ROC Filings (Within 60 Days)**

✅ **7. File Form INC-20A**
   - Commencement of Business Declaration
   - File within 180 days of incorporation
   - Attach: Bank statement showing paid-up capital

✅ **8. File Form DIR-3 KYC**
   - Annual KYC for all directors
   - Due by 30th September every year

**Phase 5: Ongoing Compliance**

✅ **9. Annual Filings**
   - AOC-4: Financial Statements (within 30 days of AGM)
   - MGT-7: Annual Return (within 60 days of AGM)
   - ADT-1: Auditor Appointment (within 15 days)

✅ **10. Tax Compliance**
   - Income Tax Return: By 31st October
   - GST Returns: Monthly/Quarterly
   - TDS Returns: Quarterly

**GST REGISTRATION PROCESS:**

**Step 1:** Visit www.gst.gov.in
**Step 2:** Click "Register Now" → New Registration
**Step 3:** Enter PAN, Email, Mobile → Verify OTP
**Step 4:** Fill Part A (Business Details)
**Step 5:** Upload Documents:
   - Photograph
   - Address proof
   - Bank statement/cancelled cheque
   - Authorization letter
**Step 6:** Submit Application
**Step 7:** Receive ARN (Application Reference Number)
**Step 8:** Verification by GST Officer
**Step 9:** GSTIN issued (within 7 working days)

**Important Deadlines:**
⏰ First Board Meeting: Within 30 days
⏰ INC-20A Filing: Within 180 days
⏰ First AGM: Within 9 months of financial year end
⏰ Auditor Appointment: Within 30 days of incorporation

**Penalties for Non-Compliance:**
- Late filing fees: ₹100 per day
- Maximum penalty: ₹5 lakhs
- Director disqualification possible

Need help with any specific filing? Let me know! 📋`;
    }

    if (lowerQuery.includes("fema") || lowerQuery.includes("foreign investment")) {
      return `**FEMA COMPLIANCE FOR INBOUND FOREIGN INVESTMENT**

**Overview:**
Foreign Exchange Management Act (FEMA), 1999 regulates foreign investment in India through two routes:
1. **Automatic Route** - No prior approval required
2. **Government Route** - Prior approval from DPIIT/RBI required

---

**STEP-BY-STEP PROCESS:**

**Step 1: Determine Investment Route**

✅ **Automatic Route** (Most sectors)
   - Up to 100% FDI allowed in most sectors
   - No government approval needed
   - Post-investment reporting required

✅ **Government Route** (Restricted sectors)
   - Defense (beyond 74%)
   - Broadcasting
   - Print media
   - Satellites
   - Prior approval from FIPB/DPIIT required

**Step 2: Pre-Investment Documentation**

📋 **Required Documents:**
1. Board Resolution approving foreign investment
2. Valuation Report (by Chartered Accountant/Merchant Banker)
3. Shareholders' approval (Special Resolution)
4. Form FC-GPR (for government route)
5. KYC documents of foreign investor
6. Share Subscription Agreement

**Step 3: Pricing Guidelines**

💰 **Valuation Requirements:**
- **Unlisted Companies:** Fair value determined by Merchant Banker/CA
- **Listed Companies:** Price not less than:
  - SEBI pricing guidelines, OR
  - Valuation by Merchant Banker/CA
- **Startups:** Valuation by Merchant Banker (Category I)

**Step 4: Fund Transfer**

💱 **Remittance Process:**
1. Foreign investor remits funds to Indian company's bank account
2. Bank issues Foreign Inward Remittance Certificate (FIRC)
3. Funds must be received within 180 days of share allotment
4. Currency: Freely convertible foreign currency only

**Step 5: Share Allotment**

✅ **Allotment Procedure:**
1. Convene Board Meeting
2. Pass Board Resolution for allotment
3. Issue share certificates within 60 days
4. Update statutory registers
5. File Form PAS-3 with ROC (within 30 days)

**Step 6: FEMA Reporting**

📊 **Mandatory Filings:**

**A. Form FC-GPR (Advance Reporting)**
   - File within 30 days of receipt of funds
   - Filed on RBI's FIRMS portal
   - Details: Investment amount, sector, investor details

**B. Form FC-TRS (Transfer Reporting)**
   - File within 60 days of share allotment
   - Filed on RBI's FIRMS portal
   - Attach: Valuation report, FIRC, Board resolution

**C. Annual Return on Foreign Liabilities & Assets (FLA)**
   - Due by 15th July every year
   - Filed on RBI portal
   - Details: All foreign investment holdings

**Step 7: ROC Filings**

📋 **Companies Act Compliance:**
1. **Form PAS-3:** Return of Allotment (within 30 days)
2. **Form MGT-14:** Board resolution filing (within 30 days)
3. **Form DIR-12:** Change in directors (if applicable)
4. Update Register of Members

**Step 8: Tax Compliance**

💼 **Tax Implications:**
1. **For Company:**
   - No tax on capital received
   - Maintain Form 15CA/15CB for future remittances

2. **For Foreign Investor:**
   - Capital gains tax on exit (as per DTAA)
   - Dividend Distribution Tax (if applicable)
   - Obtain PAN/TAN

**SECTORAL CAPS & CONDITIONS:**

| Sector | FDI Limit | Route |
|--------|-----------|-------|
| E-commerce (Marketplace) | 100% | Automatic |
| E-commerce (Inventory) | 0% | Prohibited |
| Insurance | 74% | Automatic |
| Banking (Private) | 74% | Automatic |
| Defense | 74% | Automatic |
| Defense | 74%-100% | Government |
| Telecom | 100% | Automatic |
| Pharmaceuticals | 100% | Automatic |
| Real Estate | 100% | Automatic |

**PROHIBITED SECTORS:**
❌ Lottery business
❌ Gambling & betting
❌ Chit funds
❌ Nidhi companies
❌ Trading in TDRs
❌ Atomic energy
❌ Railway operations

**KEY COMPLIANCE POINTS:**

⚠️ **Common Mistakes to Avoid:**
1. Delayed FEMA reporting (penalties apply)
2. Incorrect valuation methodology
3. Missing FIRC documentation
4. Non-compliance with sectoral conditions
5. Delayed ROC filings

⏰ **Important Timelines:**
- FC-GPR: Within 30 days of fund receipt
- Share Allotment: Within 60 days of fund receipt
- FC-TRS: Within 60 days of allotment
- PAS-3: Within 30 days of allotment

**Penalties:**
- Late FC-TRS filing: ₹5,000 per day (max ₹1 lakh)
- Non-filing: Up to 3x investment amount
- Compounding fees applicable

**Need specific guidance on your investment structure? Share details and I'll provide customized advice! 🌐**`;
    }

    if (lowerQuery.includes("tax filing") || lowerQuery.includes("checklist") && lowerQuery.includes("startup")) {
      return `**ANNUAL TAX & COMPLIANCE FILING CHECKLIST FOR STARTUPS**

---

**📊 INCOME TAX COMPLIANCE**

**1. Income Tax Return (ITR)**

✅ **ITR-6 Filing** (For Companies)
   - **Due Date:** 31st October (for non-audit cases)
   - **Due Date:** 30th November (for audit cases)
   - **Form:** ITR-6
   - **Documents Required:**
     - Audited Financial Statements
     - Tax Audit Report (Form 3CD) if applicable
     - Computation of Income
     - TDS Certificates (Form 16A)
     - Advance Tax payment challans

✅ **Tax Audit** (if applicable)
   - Required if turnover > ₹1 crore (₹10 crore for digital payments)
   - Form 3CA/3CB: Audit Report
   - Form 3CD: Audit particulars
   - Due Date: 30th September

✅ **Transfer Pricing Audit** (if applicable)
   - Required if international/specified domestic transactions > ₹1 crore
   - Form 3CEB: Accountant's Report
   - Due Date: 31st October

**2. TDS Compliance**

✅ **Quarterly TDS Returns**
   - **Q1 (Apr-Jun):** Due 31st July
   - **Q2 (Jul-Sep):** Due 31st October
   - **Q3 (Oct-Dec):** Due 31st January
   - **Q4 (Jan-Mar):** Due 31st May

✅ **Forms:**
   - Form 24Q: Salary TDS
   - Form 26Q: Non-salary TDS
   - Form 27Q: TDS on payments to non-residents

✅ **TDS Certificates:**
   - Form 16: For employees (by 15th June)
   - Form 16A: For vendors (quarterly)

**3. Advance Tax**

✅ **Quarterly Payments:**
   - 15% by 15th June
   - 45% by 15th September
   - 75% by 15th December
   - 100% by 15th March

---

**🧾 GST COMPLIANCE**

**1. Monthly/Quarterly Returns**

✅ **GSTR-1** (Outward Supplies)
   - Monthly: 11th of next month
   - Quarterly: 13th of month following quarter

✅ **GSTR-3B** (Summary Return)
   - Monthly: 20th of next month
   - Quarterly: 22nd/24th of month following quarter

✅ **GSTR-2B** (Auto-drafted ITC)
   - Available by 14th of next month
   - Reconcile before filing GSTR-3B

**2. Annual Returns**

✅ **GSTR-9** (Annual Return)
   - Due Date: 31st December
   - Required if turnover > ₹2 crore

✅ **GSTR-9C** (Reconciliation Statement)
   - Due Date: 31st December
   - Required if turnover > ₹5 crore
   - Certified by CA/CMA

**3. E-Invoicing** (if applicable)
   - Mandatory if turnover > ₹5 crore
   - Generate IRN for B2B invoices

---

**🏢 ROC COMPLIANCE (Companies Act, 2013)**

**1. Annual Filings**

✅ **Form AOC-4** (Financial Statements)
   - Due: Within 30 days of AGM
   - Attach: Balance Sheet, P&L, Cash Flow, Notes

✅ **Form MGT-7** (Annual Return)
   - Due: Within 60 days of AGM
   - Certified by Company Secretary (if applicable)

✅ **Form ADT-1** (Auditor Appointment)
   - Due: Within 15 days of AGM
   - For appointment/reappointment of auditor

**2. AGM (Annual General Meeting)**

✅ **Timeline:**
   - Within 6 months of financial year end
   - Within 9 months of incorporation (first AGM)
   - Gap between two AGMs: Not more than 15 months

✅ **Documents:**
   - Notice (21 days in advance)
   - Directors' Report
   - Audited Financial Statements
   - Auditor's Report

**3. Board Meetings**

✅ **Minimum Frequency:**
   - At least 4 meetings per year
   - Maximum gap: 120 days between meetings

✅ **Filings:**
   - Form MGT-14: For specific resolutions (within 30 days)

**4. Director KYC**

✅ **Form DIR-3 KYC**
   - Due: 30th September every year
   - For all directors with DIN

---

**📋 STARTUP-SPECIFIC COMPLIANCE**

**1. DPIIT Recognition** (if applicable)

✅ **Annual Compliance:**
   - Update on Startup India portal
   - Maintain eligibility criteria
   - Turnover < ₹100 crore
   - Age < 10 years

**2. Angel Tax Exemption**

✅ **Requirements:**
   - DPIIT recognition, OR
   - Valuation report from Merchant Banker
   - File with Income Tax Department

**3. 80IAC Tax Benefit**

✅ **Eligibility:**
   - DPIIT recognized startup
   - 100% tax exemption for 3 consecutive years (out of 10)
   - File Form 10-IC with ITR

---

**📅 ANNUAL COMPLIANCE CALENDAR**

| Month | Compliance |
|-------|------------|
| **April** | - Advance Tax Q1 (15th June) |
| **May** | - TDS Return Q4 (31st May) |
| **June** | - Form 16 issuance (15th June) |
| **July** | - TDS Return Q1 (31st July) |
| **September** | - Tax Audit Report (30th Sept)<br>- DIR-3 KYC (30th Sept)<br>- Advance Tax Q2 (15th Sept) |
| **October** | - ITR Filing (31st Oct)<br>- TDS Return Q2 (31st Oct) |
| **December** | - Advance Tax Q3 (15th Dec)<br>- GSTR-9/9C (31st Dec) |
| **January** | - TDS Return Q3 (31st Jan) |
| **March** | - Advance Tax Q4 (15th Mar) |
| **AGM Month** | - AOC-4 (within 30 days)<br>- MGT-7 (within 60 days)<br>- ADT-1 (within 15 days) |

---

**⚠️ PENALTIES FOR NON-COMPLIANCE**

| Non-Compliance | Penalty |
|----------------|---------|
| Late ITR Filing | ₹5,000 (₹1,000 if income < ₹5 lakh) |
| Late TDS Return | ₹200 per day |
| Late GST Return | ₹50 per day (₹20 for nil return) |
| Late AOC-4/MGT-7 | ₹100 per day |
| Late AGM | ₹1 lakh + ₹500 per day |

---

**✅ BEST PRACTICES**

1. **Maintain Digital Records:**
   - All invoices, receipts, bank statements
   - Retention period: 8 years

2. **Reconciliation:**
   - Monthly bank reconciliation
   - GST ITC reconciliation (GSTR-2B vs books)
   - TDS reconciliation (26AS vs books)

3. **Professional Help:**
   - Engage CA for tax planning
   - Use compliance software (Tally, Zoho Books, etc.)
   - Set up calendar reminders

4. **Documentation:**
   - Maintain minute books
   - Update statutory registers
   - File board resolutions

**Need help with specific filing or want templates? Let me know! 📊**`;
    }

    // Default response
    return `Thank you for your query. I'm here to help with:

**Corporate & Legal Services:**
- Company incorporation and compliance
- Board meetings and documentation
- Companies Act, 2013 guidance

**Tax & Regulatory:**
- Income Tax compliance
- GST registration and returns
- FEMA regulations

**Business Consulting:**
- Startup advisory
- Expansion strategies
- Compliance planning

**Document Drafting:**
- Resolutions and notices
- Legal agreements
- Compliance templates

Could you please provide more specific details about your requirement? For example:
- What type of document do you need?
- What compliance matter are you dealing with?
- What stage is your business at?
- What specific legal/tax issue are you facing?

This will help me provide you with accurate, actionable advice tailored to your situation. 📋`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                ⚖️
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Corporate Legal Assistant</h1>
                <p className="text-sm text-slate-600">AI-Powered Business & Compliance Advisor</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm text-slate-600">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">🇮🇳 India</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">✓ Active</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sticky top-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.prompt)}
                    className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-start space-x-2">
                      <span className="text-2xl">{action.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 group-hover:text-blue-700">
                          {action.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Expertise Areas</h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Companies Act, 2013</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Income Tax Act</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>GST Compliance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>FEMA Regulations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>ROC Filings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span>Corporate Governance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[calc(100vh-180px)]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-3xl rounded-lg px-4 py-3 ${
                        message.role === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-lg px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-slate-200 p-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend(input)}
                    placeholder="Type your legal or compliance question..."
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => handleSend(input)}
                    disabled={isLoading || !input.trim()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-sm"
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  Professional advice for Indian corporate law, tax, and compliance matters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
