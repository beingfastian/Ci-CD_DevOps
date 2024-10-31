# Dockerfile
# Use the official Nginx image
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the Nginx server
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js

# Expose port 80
EXPOSE 80
