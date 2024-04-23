import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_FIREBASE_API': JSON.stringify(env.REACT_APP_FIREBASE_API),
      'process.env.REACT_APP_DOMAIN_API':JSON.stringify(env.REACT_APP_DOMAIN_API),
      'process.evn.REACT_APP_PROJECTID_API': JSON.stringify(evn.REACT_APP_PROJECTID_API),
      'process.env.REACT_APP_STORAGEBUCKET_API': JSON.stringify(env.REACT_APP_STORAGEBUCKET_API),
      'process.env.REACT_APP_MESSAGESENDERID_API': JSON.stringify(env.REACT_APP_MESSAGESENDERID_API),
      'process.env.REACT_APP_APPID_API ':JSON.stringify(env.REACT_APP_APPID_API),
      ' process.env.REACT_APP_MEASUREMENTID_API': JSON.stringify(env.REACT_APP_MEASUREMENTID_API),

    },
    plugins: [react()],
  }
})