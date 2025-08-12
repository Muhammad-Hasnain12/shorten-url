export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About ShortenURL
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, privacy-focused URL shortening service that helps you create clean, 
            shareable links without the complexity of databases or external services.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">1. Paste Your URL</h3>
              <p className="text-muted-foreground text-sm">
                Simply paste any long URL into our input field. We&apos;ll automatically validate 
                and normalize it for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">2. Get Shortened Link</h3>
              <p className="text-muted-foreground text-sm">
                We generate a unique 6-character code and create your shortened URL 
                instantly. No waiting, no registration required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">3. Share & Track</h3>
              <p className="text-muted-foreground text-sm">
                Share your shortened link anywhere. We track clicks and provide analytics 
                to see how your links perform.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Privacy First</h4>
                  <p className="text-sm text-muted-foreground">
                    All data is stored locally in your browser. No external servers or tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Click Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitor how many times each shortened link is accessed with real-time updates.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">QR Code Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate QR codes for easy mobile sharing and offline access.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Instant Copy</h4>
                  <p className="text-sm text-muted-foreground">
                    One-click copy to clipboard with visual feedback and confirmation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">Mobile Responsive</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautiful, responsive design that works perfectly on all devices.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground">No Registration</h4>
                  <p className="text-sm text-muted-foreground">
                    Start using immediately without creating accounts or providing personal information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-card border border-border rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            Technical Details
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Storage</h4>
                <p className="text-sm text-muted-foreground">
                                     All shortened URLs are stored locally in your browser&apos;s localStorage. 
                   This means your data stays private and works offline.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">URL Generation</h4>
                <p className="text-sm text-muted-foreground">
                  We use nanoid to generate unique, secure 6-character codes that are 
                  collision-resistant and URL-safe.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Validation</h4>
                <p className="text-sm text-muted-foreground">
                  URLs are automatically validated and normalized to ensure they have 
                  proper protocols (http/https).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Built with Next.js 15 and optimized for speed. Instant URL generation 
                  and real-time click tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-card border border-border rounded-xl p-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-6">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Social media sharing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Email campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Business presentations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">QR code generation</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Personal link management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Marketing campaigns</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Document sharing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-card-foreground">Quick link access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Connect with me on various platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Card */}
          <a 
            href="mailto:hasnainmemon02@outlook.com"
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
              <p className="text-muted-foreground text-sm break-words">
                hasnainmemon02@outlook.com
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/muhammad-hasnain-61b4aa379/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">
                muhammad-hasnain
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/Muhammad-Hasnain12"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-muted-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm">
                Muhammad-Hasnain12
              </p>
            </div>
          </a>

          {/* Portfolio Card */}
          <a 
            href="https://hasnainportfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Portfolio</h3>
              <p className="text-muted-foreground text-sm break-words">
                hasnainportfolio.vercel.app
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
