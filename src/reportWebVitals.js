// src/reportWebVitals.js

/**
 * Function to measure and report web performance metrics.
 *
 * This function imports the `web-vitals` library dynamically and uses it to measure various performance metrics.
 * It calls the provided `onPerfEntry` callback with the performance data.
 *
 * @param {Function} onPerfEntry - A callback function that will be called with the performance metrics.
 *
 * Usage:
 * To use this function, pass a callback that will handle the performance metrics data:
 *
 * reportWebVitals(metric => {
 *   console.log(metric); // Process or log the performance metric data
 * });
 */
const reportWebVitals = onPerfEntry => {
    // Check if onPerfEntry is a function
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // Dynamically import the 'web-vitals' library
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            // Measure and report various web performance metrics
            getCLS(onPerfEntry); // Cumulative Layout Shift
            getFID(onPerfEntry); // First Input Delay
            getFCP(onPerfEntry); // First Contentful Paint
            getLCP(onPerfEntry); // Largest Contentful Paint
            getTTFB(onPerfEntry); // Time to First Byte
        });
    }
};

export default reportWebVitals;
