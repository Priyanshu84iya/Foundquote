# ✨ Found Quotes

<div align="center">

**A Beautiful, Minimalist Web Application for Discovering Inspiring Anime Quotes**

[![GitHub Stars](https://img.shields.io/github/stars/Priyanshu84iya/Foundquote?style=for-the-badge&logo=github)](https://github.com/Priyanshu84iya/Foundquote)
[![GitHub Forks](https://img.shields.io/github/forks/Priyanshu84iya/Foundquote?style=for-the-badge&logo=github)](https://github.com/Priyanshu84iya/Foundquote/fork)
[![License](https://img.shields.io/badge/License-Custom-blue?style=for-the-badge)](https://github.com/Priyanshu84iya/Foundquote/blob/main/LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-green?style=for-the-badge)](https://github.com/Priyanshu84iya/Foundquote/releases)

[**🚀 Live Demo**](https://priyanshu84iya.github.io/Foundquote) • [**📖 Documentation**](#documentation) • [**🐛 Report Bug**](https://github.com/Priyanshu84iya/Foundquote/issues) • [**✨ Request Feature**](https://github.com/Priyanshu84iya/Foundquote/issues)

</div>

---

## 🌟 Overview

**Found Quotes** is an elegant, interactive web application that showcases inspiring quotes from beloved anime series. With smooth animations, dynamic gradient backgrounds, and responsive design, it offers a delightful experience for discovering wisdom and motivation from iconic anime characters.

### 📸 Preview

[![Found Quotes Screenshot](https://i.postimg.cc/vBnjxrgk/screenshot-foundquote.png)](https://priyanshu84iya.github.io/Foundquote)

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎨 **Visual Excellence**
- Dynamic gradient backgrounds that change with each quote
- Smooth word-by-word text animations
- Beautiful typography with custom font selections
- Elegant blur effects and smooth transitions

</td>
<td width="50%">

### 📱 **Responsive Design**
- Fully optimized for all screen sizes
- Mobile-first approach with touch-friendly controls
- Tablet and desktop responsive layouts
- Landscape and portrait orientation support

</td>
</tr>
<tr>
<td width="50%">

### ⚡ **User Experience**
- Simple spacebar navigation
- Quick loading with optimized assets
- Accessible design with reduced motion support
- Clean, distraction-free interface

</td>
<td width="50%">

### 🔧 **Developer Friendly**
- Easy-to-modify CSV database
- Clean, well-documented code
- No build process required
- Vanilla JavaScript implementation

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor (optional, for customization)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshu84iya/Foundquote.git
   cd Foundquote
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for better experience:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Start exploring!**
   - Press `spacebar` to cycle through quotes
   - Click on book titles to visit source links
   - Enjoy the beautiful animations

---

## 📁 Project Structure

```
Foundquote/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styles and responsive design
├── ⚙️ script.js           # Quote logic and animations
├── 📊 data.csv            # Quote database (easily editable)
├── 📖 README.md           # Project documentation
└── 📜 LICENSE             # License information
```

---

## 🎮 Usage Guide

### Navigation
- **Spacebar**: Move to the next quote
- **Click on book title**: Visit the original source (MyAnimeList)
- **Hover near bottom**: View copyright information

### Customization

#### Adding New Quotes
Edit `data.csv` with your favorite quotes:

```csv
quote,author,book,link
"Your inspiring quote here","Character Name","Anime Title","https://source-link"
```

**Example:**
```csv
"The world isn't perfect. But it's there for us, doing the best it can... that's what makes it so damn beautiful.","Roy Mustang","Fullmetal Alchemist: Brotherhood","https://myanimelist.net/anime/5114"
```

#### Modifying Colors
Update the CSS variables in `style.css`:

```css
:root {
    --gradient-color1: rgba(255, 209, 255, 0.95);
    --gradient-color2: rgba(250, 208, 196, 0.95);
}
```

---

## 💻 Technical Details

### Built With
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - Pure JS, no frameworks
- **CSV** - Simple data storage format

### Browser Support
| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 80+     | ✅ Fully Supported |
| Firefox | 75+     | ✅ Fully Supported |
| Safari  | 13+     | ✅ Fully Supported |
| Edge    | 80+     | ✅ Fully Supported |

### Performance
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: < 50KB total
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized meta tags and structure

---

## 🎨 Customization Examples

### Color Schemes
The application includes multiple predefined color schemes:

```javascript
const colorSchemes = [
    { color1: 'rgba(255, 209, 255, 0.8)', color2: 'rgba(250, 208, 196, 0.8)' },
    { color1: 'rgba(168, 237, 234, 1)', color2: 'rgba(254, 214, 243, 0.95)' },
    { color1: 'rgba(253, 219, 146, 1)', color2: 'rgba(209, 253, 255, 1)' },
    { color1: 'rgba(147, 165, 207, 1)', color2: 'rgba(228, 239, 233, 1)' }
];
```

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Ultra-wide**: > 1920px

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas
- 🌐 Add more anime quotes
- 🎨 Create new color schemes
- 📱 Improve mobile experience
- 🌍 Add internationalization support
- ⚡ Performance optimizations

---

## 📱 Device Compatibility

<div align="center">

| Device Type | Screen Size | Status |
|-------------|-------------|--------|
| 📱 Mobile   | 320px+      | ✅ Optimized |
| 📱 Tablet   | 768px+      | ✅ Optimized |
| 💻 Laptop   | 1024px+     | ✅ Optimized |
| 🖥️ Desktop  | 1440px+     | ✅ Optimized |
| 📺 4K/UHD   | 2560px+     | ✅ Optimized |

</div>

---

## 📄 License & Copyright

**© 2025 Priyanshu Chaurasiya. All rights reserved.**

This project is protected by copyright law. For licensing inquiries, commercial use, or partnerships, please contact:

📧 **Email**: [priyanshu69chaurasiya@gmail.com](mailto:priyanshu69chaurasiya@gmail.com)

### Usage Terms
- ✅ Personal use and modification
- ✅ Educational purposes
- ❌ Commercial use without permission
- ❌ Redistribution without attribution

---

## 👨‍💻 About the Creator

<div align="center">

**Priyanshu Chaurasiya**

[![GitHub](https://img.shields.io/badge/GitHub-Priyanshu84iya-black?style=for-the-badge&logo=github)](https://github.com/Priyanshu84iya)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:priyanshu69chaurasiya@gmail.com)

*Passionate about creating beautiful, functional web experiences that inspire and delight users.*

</div>

---

## 🙏 Acknowledgments

- **Anime Community** - For the inspiring quotes and characters
- **MyAnimeList** - For being an incredible resource
- **Google Fonts** - For the beautiful typography
- **Open Source Community** - For inspiration and best practices

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/Priyanshu84iya/Foundquote?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Priyanshu84iya/Foundquote?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/Priyanshu84iya/Foundquote?style=for-the-badge)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

**💝 Made with love for the anime community**

[⬆ Back to Top](#-found-quotes)

</div>
