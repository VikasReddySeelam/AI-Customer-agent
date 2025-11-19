# Corporate Legal Assistant

An AI-powered web application for corporate legal, compliance, and business consulting services in India.

## 🎯 Features

- **Interactive Chat Interface**: Get expert advice on Indian corporate law, tax, and compliance matters
- **Quick Actions**: Pre-built templates for common tasks:
  - Board Meeting Notices
  - Company Incorporation Checklists
  - FEMA Compliance Guidance
  - Tax Filing Checklists
  - Auditor Appointment Templates
  - Recent Regulatory Updates

- **Expertise Areas**:
  - Companies Act, 2013
  - Income Tax Act
  - GST Compliance
  - FEMA Regulations
  - ROC Filings
  - Corporate Governance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd corporate-legal-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

#### AWS, Google Cloud, Azure
1. Build the project: `npm run build`
2. Use Docker or deploy the built files to your cloud provider
3. Ensure Node.js runtime is available
4. Run: `npm start`

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready (works on any Node.js hosting)

## 📋 Project Structure

```
corporate-legal-assistant/
├── app/
│   ├── page.tsx          # Main chat interface
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎨 Features Implemented

### Chat Interface
- Real-time chat simulation with AI responses
- Pre-built responses for common queries:
  - Board meeting notices with templates
  - Post-incorporation compliance checklists
  - FEMA compliance guidelines
  - Annual tax filing checklists
  - Document templates

### Quick Actions Sidebar
- 6 pre-configured quick action buttons
- Expertise areas display
- Responsive design for mobile and desktop

### Professional UI/UX
- Clean, modern design with gradient backgrounds
- Blue color scheme suitable for legal/business context
- Responsive layout that works on all devices
- Smooth animations and transitions

## 🔧 Customization

### Adding New Quick Actions

Edit `app/page.tsx` and add to the `quickActions` array:

```typescript
{
  title: "Your Action Title",
  description: "Brief description",
  prompt: "The prompt to send to the AI",
  icon: "📋"
}
```

### Modifying AI Responses

Edit the `generateResponse` function in `app/page.tsx` to customize responses based on user queries.

## 📝 Use Cases

- **Startups**: Get guidance on incorporation, compliance, and tax matters
- **Company Secretaries**: Access templates and compliance checklists
- **Business Owners**: Understand regulatory requirements
- **Legal Professionals**: Quick reference for Indian corporate law

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

This project is created for demonstration purposes.

## 🤝 Support

For questions or support, please refer to the chat interface within the application.

---

**Built with ❤️ using Next.js and Tailwind CSS**
