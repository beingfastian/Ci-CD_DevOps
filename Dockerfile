# Use the official Nginx image
FROM nginx:alpine

# Copy your HTML, CSS, and JavaScript files to the Nginx html directory
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/styles.css /usr/share/nginx/html/styles.css
COPY src/script.js /usr/share/nginx/html/script.js

# Copy a custom Nginx configuration file if necessary
COPY nginx.conf /etc/nginx/conf.d/default.conf
