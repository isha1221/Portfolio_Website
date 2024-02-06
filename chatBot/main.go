package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/projects", projectsHandler)
	http.HandleFunc("/experience", experienceHandler)
	http.HandleFunc("/techstack", techStackHandler)
	http.HandleFunc("/extracurricular", extracurricularHandler)
	http.HandleFunc("/contact", contactHandler)

	fmt.Println("Server is running on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", addCorsHeaders(http.DefaultServeMux)))
}

func addCorsHeaders(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		handler.ServeHTTP(w, r)
	})
}
func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "text/html") // Set content type to HTML
	fmt.Fprintf(w, `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Chatbot - Isha</title>
	</head>
	<body>
		<h1>Welcome to Isha's Chatbot!</h1>
		<p>What would you like to know about Isha?</p>
		<ul>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/experience">Experience</a></li>
			<li><a href="/techstack">Tech Stack</a></li>
			<li><a href="/extracurricular">Extracurricular Activities</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</body>
	</html>
	`)
}

func projectsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Isha's projects: <list of projects>")
}

func experienceHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Isha's experience: <details of experience>")
}

func techStackHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Isha's tech stack: <list of technologies>")
}

func extracurricularHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Isha's extracurricular activities: <details of activities>")
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Isha's contact information: <contact details>")
}
