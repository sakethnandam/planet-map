# 🚀 Wemo Website Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Free)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial Wemo website"
   git remote add origin https://github.com/yourusername/wemo-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your `wemo-website` repository
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `wemo.com`)
   - Update DNS records as instructed

### Option 2: Netlify (Free Alternative)
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder (after running `npm run build`)
   - Or connect your GitHub repository

### Option 3: GitHub Pages
1. **Update next.config.ts**:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   };
   
   module.exports = nextConfig;
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   # Upload the 'out' folder to GitHub Pages
   ```

## 🎯 Pre-Deployment Checklist

- [ ] Update contact information in `src/app/page.tsx`
- [ ] Replace placeholder content with your actual information
- [ ] Add your real portfolio projects
- [ ] Update meta tags in `src/app/layout.tsx`
- [ ] Test the contact form functionality
- [ ] Check mobile responsiveness
- [ ] Verify all links work correctly

## 🔧 Post-Deployment

1. **SEO Setup**:
   - Submit your sitemap to Google Search Console
   - Set up Google Analytics
   - Test page speed with Google PageSpeed Insights

2. **Domain Setup**:
   - Point your domain to the hosting provider
   - Set up SSL certificate (automatic with Vercel/Netlify)

3. **Monitoring**:
   - Set up uptime monitoring
   - Configure error tracking
   - Monitor performance metrics

## 📱 Testing Checklist

- [ ] Desktop navigation works
- [ ] Mobile menu functions properly
- [ ] Contact form submits correctly
- [ ] All animations work smoothly
- [ ] Images load properly
- [ ] Links navigate correctly
- [ ] Page loads quickly (< 3 seconds)

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Check for TypeScript errors
2. **Images not loading**: Verify image paths
3. **Styling issues**: Clear browser cache
4. **Form not working**: Check form action URL

### Support:
- Check the [README.md](./README.md) for detailed instructions
- Review Next.js documentation for framework-specific issues
- Contact: hello@wemo.com

---

**Your Wemo website is ready to impress clients! 🎉** 