# AI Chat Assistant 🤖

A modern, responsive AI-powered chat application built with Next.js 14 App Router and React. Experience intelligent conversations with a beautiful, intuitive interface that adapts to your needs.

![AI Chat Assistant](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🚀 Instant Responses** - Get immediate, intelligent answers to your questions
- **🧠 Smart & Adaptive** - AI that learns and provides contextual responses
- **🔒 Secure & Private** - Your conversations are protected and confidential
- **📱 Responsive Design** - Beautiful interface that works on all devices
- **🎨 Modern UI/UX** - Clean, gradient-based design with smooth animations
- **💬 Real-time Chat** - Seamless conversation experience with floating chat modal
- **🌟 Interactive Elements** - Animated background and hover effects
- **⚡ API Integration** - Built-in REST API for message handling

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom React components
- **Icons:** Custom SVG icons and Heroicons
- **Animations:** CSS animations and Tailwind transitions
- **API:** Next.js API Routes

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-chat-assistant.git
   cd ai-chat-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
chat-bot/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── messages/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── FloatingButton.tsx
│   │   └── ChatModal.tsx
│   └── styles/
│       └── globals.css
├── public/
│   ├── logo.png
│   └── favicon files
├── package.json
└── README.md
```

## 🎯 Usage

1. **Landing Page**: Beautiful hero section with project overview and features
2. **Start Chat**: Click "Start Chatting Now" button or use the floating chat button
3. **Chat Interface**: Interactive modal with real-time messaging capabilities
4. **API Endpoints**: `/api/messages` for chat message handling
5. **Responsive**: Fully functional across desktop, tablet, and mobile devices

## 🎨 Design Features

- **Gradient Backgrounds**: Modern purple-to-blue gradient themes
- **Glassmorphism**: Semi-transparent elements with backdrop blur effects
- **Animated Blobs**: Floating background elements with smooth animations
- **Hover Effects**: Interactive buttons with scale and shadow transitions
- **Typography**: Clean, readable fonts with proper hierarchy
- **Custom Branding**: Custom favicon and browser tab title for professional appearance

## 🔌 API Endpoints

### Messages API
- **Endpoint:** `POST /api/messages`
- **Description:** Send messages to the AI assistant
- **Request Body:**
  ```json
  {
    "message": "Your message here"
  }
  ```
- **Response:**
  ```json
  {
    "message": "AI response",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## 📱 Screenshots

*Add screenshots of your application here*

- Landing page with hero section
- Chat modal interface
- Mobile responsive design
- Feature cards and animations

## 🔧 Customization

The application is built with modularity in mind:

- **Colors**: Easily customize the gradient themes in Tailwind classes
- **Animations**: Modify blob animations and transitions in the style section
- **Components**: Extend FloatingButton and ChatModal components
- **API**: Customize the message handling logic in `api/messages/route.ts`
- **Content**: Update hero text, features, and descriptions as needed

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel using Git integration
```

### Other Platforms
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the build settings for Next.js App Router
- **Docker**: Create a Dockerfile for containerized deployment

## 🔧 Development

### App Router Architecture
This project uses Next.js 14's App Router with:
- Server Components by default
- Client Components marked with `"use client"`
- Built-in API routes in the `app/api` directory
- Metadata API for SEO optimization

### Key Files
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/page.tsx` - Main home page component
- `src/app/api/messages/route.ts` - API route for chat messages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

If you found this project helpful, please give it a ⭐ on GitHub!

## 📞 Contact

- **Portfolio**: [Your Portfolio Website]
- **LinkedIn**: [Your LinkedIn Profile]
- **Email**: [your.email@example.com]

---

*Built with ❤️ using Next.js 14 App Router, React, and modern web technologies*
