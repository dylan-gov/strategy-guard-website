/**
 * Vercel Speed Insights Integration
 * This script initializes Speed Insights for the Strategy Guard website
 */

// Import the Speed Insights library from node_modules
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights
// This will automatically track Web Vitals and page performance metrics
injectSpeedInsights({
  // Enable debug mode in development (shows events in console)
  debug: false,
  
  // Sample rate: 1.0 means all events are tracked (100%)
  sampleRate: 1.0,
  
  // beforeSend can be used to modify or filter events before sending
  // Useful for redacting sensitive data or customizing metrics
  beforeSend: (event) => {
    // You can modify the event here if needed
    return event;
  }
});
