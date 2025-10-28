# Live URL- https://sanauar-ansari.github.io/Book_Library/

# Books Library

A responsive book search web app built with **React** and **Tailwind CSS**, using the **Open Library API** to help users find books instantly as they type — **powered by a smooth debounced search experience**.

## Features
1. Search books by title using Open Library API
2. Real-time search with debouncing (waits 500ms after typing)
3. Displays book title, author, and publish year
4. Placeholder image for books with no cover
5. Responsive grid layout using Tailwind CSS
6. Clean hover animation on book cards
7. Deployed on GitHub Pages


##  Tech Stack

| Frontend     | Styling      | API              | Deployment   |
| ------------ | ------------ | ---------------- | ------------ |
| React (Vite) | Tailwind CSS | Open Library API | GitHub Pages |


## Installation & Setup

1. Clone the repo
-git clone https://github.com/your-username/your-repo-name.git
-cd your-repo-name

2. Install dependencies by "npm install" and start the dev server by "npm run dev" 


## API Reference
1. https://openlibrary.org/search.json?title={query}
   for example https://openlibrary.org/search.json?title=rich dad poor dad
   
2. How to file Book Cover Image
   The Open Library provides a special endpoint for cover images.
   https://covers.openlibrary.org/b/id/{cover_i}-{size}.jpg     ----> size: S:small, M:medium, L-large
   We have cover_i in our response so we can find book cover image.


## Future Improvements

1. Add pagination for large results

2. Add book detail modal or page

3. Enable search by author or genre

4. Add dark/light theme toggle


 ## Screenshots
![image alt](https://github.com/Sanauar-Ansari/Task-Manager/blob/32e946ea0d3bbdb3a51045cb13575076a56ed473/Screenshot%202025-10-13%20130437.png)
![image alt](https://github.com/Sanauar-Ansari/Task-Manager/blob/32e946ea0d3bbdb3a51045cb13575076a56ed473/Screenshot%202025-10-13%20130513.png)
    



