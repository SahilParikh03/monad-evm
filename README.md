# Monad AI Chat

An interactive chat interface for conversing with an AI agent specializing in Monad blockchain technology. Features a stunning Matrix-inspired purple code rain animation.

## Features

- **Matrix Rain Background**: Animated falling code effect with purple theme
- **Chat Interface**: Clean, modern chat UI with user and AI message bubbles
- **Chat History**: Sidebar with chat session management
- **Real-time Typing Indicator**: Shows when the AI is thinking
- **Responsive Design**: Works on desktop and mobile devices
- **Session Management**: Create new chats and switch between conversations

## Tech Stack

- **React** with TypeScript
- **Vite** for blazing fast development
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Canvas API** for Matrix rain animation

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── chat/           # Chat-related components
│   │   ├── ChatContainer.tsx
│   │   ├── ChatInput.tsx
│   │   ├── Message.tsx
│   │   └── TypingIndicator.tsx
│   ├── sidebar/        # Sidebar components
│   │   ├── Sidebar.tsx
│   │   ├── NewChatButton.tsx
│   │   └── ChatHistory.tsx
│   └── common/         # Shared components
│       ├── MatrixRain.tsx
│       └── SocialLinks.tsx
├── contexts/           # React Context providers
│   └── ChatContext.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Backend Integration

This is a frontend-only implementation. To connect to a real LLM backend:

1. Replace the simulated response in `ChatContext.tsx` (line 46-58)
2. Add your API endpoint and authentication
3. Update the `sendMessage` function to make real API calls

## Customization

### Colors

The purple theme can be customized in `tailwind.config.js`:

```js
colors: {
  'matrix-purple': {
    light: '#C084FC',
    DEFAULT: '#A855F7',
    dark: '#8B5CF6',
  },
}
```

### Matrix Rain

Adjust the animation speed and character set in `MatrixRain.tsx`.

## License

MIT
