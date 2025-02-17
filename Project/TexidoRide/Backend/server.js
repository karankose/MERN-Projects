    import http from 'http';
    import App from './App.js';

    const port = process.env.PORT || 5000  // Define port before using it
    const server = http.createServer(App); // Create an HTTP server
    
    
    server.listen(port, () => {
         console.log(`🚀 Server started at http://localhost:${port}`);
    });
    