# ctgpost

A modern, professional, and highly interactive news/media portal for Chittagong, built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Responsive, Single-Page Application**: Works beautifully on all devices.
- **Sticky Navbar** with smooth scrolling and mobile hamburger menu.
- **Hero Section** with full-cover background image.
- **Media Kit Section**:
  - Company overview, analytics, and proposal plug-in cards.
  - Animated analytics numbers (count up on scroll).
  - Interactive cards with hover effects and Framer Motion entrance animations.
- **About, Advertising, and Contact Sections**:
  - All info cards have interactive hover and motion effects.
- **Back to Top Button**: Animated, floating, and only appears after scrolling.
- **Modern Typography**: Roboto font for all text and headings.
- **Dark, Red, and Black Color Scheme**: Consistent with ctgpost branding.
- **Smooth Anchor Navigation**: All menu links scroll smoothly to their sections.

## 📊 Example Analytics (from Media Kit)

- **Facebook Fans**: 203,755+
- **Facebook Video Reach**: 5M (last month)
- **Facebook Reach**: 4,608,888 (+52% from previous 90 days)
- **Web Visitors (Daily)**: 8,000–10,000+
- **Unique Visitors (Daily Avg)**: 1,500
- **Page Views (Daily Avg)**: 3,500
- **Total Page Views (30 days)**: 95,000
- **News Portal Rank**: 07 (Chittagong)

## 🖥️ Demo

> _Add a link or screenshot here if deployed!_

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/yourusername/ctgpost.git
cd ctgpost
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧩 Project Structure

```
src/
  components/    # All React components (Header, Hero, MediaKit, etc.)
  assets/        # Images and static assets
  App.jsx        # Main app component
  index.css      # Tailwind and global styles
  main.jsx       # Entry point
public/
  # Static files
```

## ✨ Customization

- **Brand Colors**: Easily change in `tailwind.config.js`.
- **Analytics Data**: Update in `src/components/MediaKit.jsx`.
- **Logo**: Replace `src/assets/image.png` with your own.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)

---

> _ctgpost is a leading web portal in Chittagong, known as a trusted and fact-checked news agency, operating in both online and print media, and the only Chittagong-based bilingual news agency._
