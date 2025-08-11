# ShortenURL - Modern URL Shortener

A beautiful, privacy-focused URL shortening web application built with Next.js, TypeScript, and Tailwind CSS. No database required - all data is stored locally in your browser.

## ✨ Features

- **🔗 Instant URL Shortening** - Transform long URLs into short, shareable links
- **🛡️ Privacy First** - All data stored locally, no external servers or tracking
- **📊 Click Tracking** - Monitor link performance with real-time analytics
- **📱 QR Code Generation** - Generate QR codes for easy mobile sharing
- **📋 One-Click Copy** - Copy shortened URLs to clipboard instantly
- **📱 Mobile Responsive** - Beautiful design that works on all devices
- **🌙 Dark Mode** - Automatic dark/light mode based on system preferences
- **⚡ No Registration** - Start using immediately without accounts
- **🚀 SEO Ready** - Optimized for search engines and social sharing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shorten-url
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [shortCode]/       # Dynamic route for shortened URLs
│   ├── about/             # About page
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── UrlShortener.tsx   # Main URL shortening form
│   └── UrlHistory.tsx     # URL history and analytics
└── lib/                    # Utility functions
    └── utils.ts           # URL operations and storage
```

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **nanoid** - Secure, unique ID generation
- **Local Storage** - Browser-based data persistence

## 📱 How It Works

1. **Paste URL** - User enters a long URL
2. **Generate Code** - System creates a unique 6-character code
3. **Store Locally** - URL is saved in browser's localStorage
4. **Share Link** - User gets a shortened URL to share
5. **Track Clicks** - System counts visits and updates analytics
6. **Redirect** - Visitors are automatically redirected to original URL

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed

### Other Platforms

- **Netlify** - Drag and drop deployment
- **Railway** - Simple container deployment
- **DigitalOcean** - VPS deployment
- **AWS/GCP** - Cloud platform deployment

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Google Analytics (if you want to add it later)
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Custom domain for QR codes
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Customization

- **Colors**: Modify CSS variables in `globals.css`
- **Branding**: Update logo and text in components
- **Features**: Add/remove functionality in `utils.ts`

## 📊 Storage & Performance

### Local Storage Limits
- **Chrome/Firefox**: 5-10 MB per domain
- **Safari**: 5-10 MB per domain
- **Mobile**: 5-10 MB per domain

### Capacity
- **URLs**: ~1,000-5,000 URLs easily
- **Storage**: ~23 KB per 100 URLs
- **Performance**: Instant generation and redirection

## 🔒 Privacy & Security

- **No External Tracking** - All data stays in your browser
- **No User Accounts** - No personal information collected
- **Local Storage** - Data never leaves your device
- **HTTPS Only** - Secure connections for all operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Beautiful utility-first CSS
- **Vercel** - Seamless deployment platform
- **Open Source Community** - For inspiration and tools

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/shorten-url/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/shorten-url/discussions)
- **Email**: your-email@example.com

## 🚀 Roadmap

- [ ] Custom short codes
- [ ] Link expiration dates
- [ ] Password protection
- [ ] Bulk URL shortening
- [ ] API endpoints
- [ ] User accounts (optional)
- [ ] Advanced analytics
- [ ] Link categories
- [ ] Export functionality
- [ ] Mobile app

---

**Made with ❤️ by [Muhammad Hasnain]**

*Transform your URLs, protect your privacy.*
