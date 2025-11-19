# 🏛️ Corporate Legal Assistant - Deployment Guide

## 📋 Overview

This is a **Next.js web application** that provides AI-powered corporate legal and business consulting services for Indian businesses. It includes:

- ✅ Interactive chat interface for legal queries
- ✅ Pre-built document templates (Board notices, resolutions, etc.)
- ✅ Compliance checklists (Income Tax, GST, FEMA, ROC)
- ✅ Quick action buttons for common tasks
- ✅ Professional UI optimized for business users

---

## 🚀 Quick Start - Run Locally

### Prerequisites
- **Node.js 18+** installed on your system
- **npm** or **yarn** package manager

### Steps:

1. **Navigate to the project directory:**
   ```bash
   cd corporate-legal-assistant
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Visit: **http://localhost:3000**
   - The application will be running locally!

5. **To stop the server:**
   - Press `Ctrl + C` in the terminal

---

## 🌐 Deploy to Vercel (Recommended - FREE)

Vercel is the easiest way to deploy Next.js applications with **zero configuration**.

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account:**
   - Go to: https://vercel.com/signup
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push your code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   git add .
   git commit -m "Initial commit - Corporate Legal Assistant"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/corporate-legal-assistant.git
   git push -u origin main
   ```

3. **Import to Vercel:**
   - Go to: https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"
   - **Done!** Your app will be live in ~2 minutes

4. **Access your live app:**
   - Vercel will provide a URL like: `https://corporate-legal-assistant.vercel.app`
   - You can also add a custom domain in Vercel settings

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd corporate-legal-assistant

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? corporate-legal-assistant
# - Directory? ./
# - Override settings? No

# Your app is now live!
```

---

## 🔧 Deploy to Other Platforms

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Or use Netlify Dashboard:**
   - Go to: https://app.netlify.com
   - Drag and drop the `.next` folder
   - Done!

### Deploy to Railway

1. **Go to:** https://railway.app
2. **Click "New Project"**
3. **Select "Deploy from GitHub repo"**
4. **Select your repository**
5. **Railway auto-detects Next.js and deploys**

### Deploy to DigitalOcean App Platform

1. **Go to:** https://cloud.digitalocean.com/apps
2. **Click "Create App"**
3. **Connect your GitHub repository**
4. **Select the repository**
5. **DigitalOcean auto-configures and deploys**

---

## 📦 Build for Production

To create a production-ready build:

```bash
# Build the application
npm run build

# Start production server
npm start
```

The production server will run on **http://localhost:3000**

---

## 🛠️ Project Structure

```
corporate-legal-assistant/
├── app/
│   ├── page.tsx          # Main chat interface
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── favicon.ico       # App icon
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

---

## 🎯 Features Included

### 1. **Interactive Chat Interface**
- Ask any corporate legal or compliance question
- Get detailed, structured responses
- Professional formatting with tables and checklists

### 2. **Quick Action Templates**
- 📋 Board Meeting Notice
- 🏢 Company Incorporation Guide
- 💱 FEMA Compliance
- 📊 Tax Filing Checklist
- ✍️ Auditor Appointment Resolution
- 📰 Recent Regulatory Updates

### 3. **Expertise Areas**
- Companies Act, 2013
- Income Tax Act
- GST Compliance
- FEMA Regulations
- ROC Filings
- Corporate Governance

### 4. **Document Templates**
The assistant can generate:
- Board meeting notices
- Shareholder resolutions
- Compliance checklists
- Tax filing guides
- FEMA documentation
- ROC filing templates

---

## 🔐 Environment Variables (Optional)

If you want to integrate with external APIs (e.g., OpenAI, Anthropic), create a `.env.local` file:

```env
# Example for future AI integration
OPENAI_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

---

## 📱 Access the Application

### Local Development:
- **URL:** http://localhost:3000
- **Hot reload:** Changes reflect automatically

### Production (Vercel):
- **URL:** https://your-app-name.vercel.app
- **Custom domain:** Configure in Vercel dashboard

---

## 🎨 Customization

### Change Branding:
Edit `/app/page.tsx`:
```typescript
// Line 15-20: Update company name and description
<h1>Your Company Name</h1>
<p>Your tagline</p>
```

### Add More Templates:
Edit the `quickActions` array in `/app/page.tsx`:
```typescript
const quickActions: QuickAction[] = [
  {
    title: "Your Template",
    description: "Description",
    prompt: "Your prompt here",
    icon: "🔧"
  },
  // ... add more
];
```

### Modify Responses:
Edit the `generateResponse()` function in `/app/page.tsx` to customize AI responses.

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Dependencies not installing
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Support & Updates

### To update the application:
```bash
git pull origin main
npm install
npm run build
```

### To add new features:
1. Edit files in `/app` directory
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy with `git push` (if using Vercel/Netlify GitHub integration)

---

## 📄 License

This project is for business use. Customize as needed for your organization.

---

## ✅ Next Steps

1. **Run locally** to test: `npm run dev`
2. **Deploy to Vercel** for free hosting
3. **Share the URL** with your team
4. **Customize** templates and branding as needed
5. **Integrate** with your existing systems (optional)

---

## 🎉 You're All Set!

Your Corporate Legal Assistant is ready to help with:
- Company incorporation and compliance
- Board meetings and documentation
- Tax and GST filings
- FEMA regulations
- Business consulting
- Legal document drafting

**Need help?** The application includes built-in guidance and templates for all common corporate legal tasks in India.

---

**Developed with ❤️ for Indian businesses**
