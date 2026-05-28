# 📚 Usama Rafid Portfolio | Easy Update & Hand-off Guide

Welcome to your personal portfolio website, Usama! 

This website has been built to be **extremely easy to maintain**. You do **not** need to know programming, coding languages, or hire a web developer to keep this site updated. There are **no databases to set up, no complicated servers, and no installations required**. 

If you can edit a text file on your computer, you can update your website!

---

## 🛠️ The Absolute Basics: How to Make Changes
1. **Open the files**: Your website consists of 5 main web pages in your folder:
   * `index.html` (The Home page)
   * `about.html` (The About page)
   * `academic.html` (The Academic & Course page)
   * `reportage.html` (The Reportage & Articles catalog)
   * `awards.html` (The Honors & Accolades page)
2. **Edit the text**: Open any of these files using a simple text editor (like **TextEdit** on Mac, **Notepad** on Windows, or a free editor like **VS Code**).
3. **Save and View**: Make your text changes, save the file, and double-click the file to open it in Google Chrome or Safari to see your updates instantly!

---

## ✍️ How to Add a New Article (`reportage.html`)

Adding a new article, report, or op-ed to your catalog is incredibly simple. You **do not** have to write any complicated HTML boxes!

1. Open `reportage.html` in your text editor.
2. Scroll all the way to the bottom until you see the list of articles starting with:
   `const WORKS = [`
3. Copy one of the existing article blocks (from the open `{` to the closing `},`), paste it at the very top of the list, and fill in your new details:

```javascript
{ 
  title: "Your New Article Headline Here", 
  outlet: "The Business Standard", // Must be exactly: "The Daily Star", "The Business Standard", "Roar Bangla", "Coastal Voices", or "Others"
  venue: "The Business Standard",  // Displays under the title as the publisher label
  type: "Feature",                 // The tag displayed on the card (e.g. "Op-Ed", "Feature", "Opinion", "Bangla Essay")
  theme: "Media and Journalism",   // Must be exactly: "Media and Journalism", "Environment and Climate", "Politics and Society", or "History"
  date: "2026-06-15",              // Date in Year-Month-Day format (used for sorting)
  img: "https://www.tbsnews.net/sites/default/files/...jpg", // Web address of the cover image
  url: "https://www.tbsnews.net/thoughts/your-live-link",    // The link readers go to when they click the card
  blurb: "A short one-sentence summary of your article that readers will see on the card."
},
```
4. **Save the file**. The catalog will automatically sort the new article by date, add it to your search bar, and assign the correct category filter!

---

## 🎓 How to Edit Course Details (`academic.html`)

To edit your course descriptions or syllabus topics:
1. Open `academic.html` in your text editor.
2. Search for the name of the course (e.g., `Journalism and Society` or `MSJ 2251`).
3. To edit the main course summary, simply change the text inside the `<p>` paragraph block:
   ```html
   <p class="font-body-sm text-[14px] text-secondary leading-relaxed">
       Type your new course summary description here. Keep it engaging for your students!
   </p>
   ```
4. To edit the **Core Syllabus Themes** (the bullet points inside the drawer), simply update the text next to the primary dots:
   ```html
   <li class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 bg-primary rounded-full"></span>Type New Theme Name</li>
   ```

---

## 📷 How to Swap Your Portrait Photo

Your professional portrait is saved in the **`assets`** folder inside your website folder.
* **To swap it**: Save your new photo inside the `assets` folder on your computer. Name it exactly **`portrait.jpg`** (replacing the old one). 
* That's it! Because all 5 pages are pre-programmed to look for a file named `portrait.jpg`, your new photo will automatically update across your entire website instantly!

---

## 🔗 How to Update Your Social Media & Footer Links

If you change your Facebook username, LinkedIn link, or email in the future, you should update it at the bottom of **all 5 pages**:
1. Open each `.html` file.
2. Scroll to the bottom and locate the `<!-- Footer -->` section.
3. Update the website addresses inside the `href="..."` quotes:
   ```html
   <div class="flex flex-wrap gap-x-8 gap-y-2 items-center justify-center">
       <a href="https://linkedin.com/in/YOUR_NEW_LINK" target="_blank" rel="noopener">LinkedIn</a>
       <a href="https://web.facebook.com/YOUR_NEW_LINK" target="_blank" rel="noopener">Facebook</a>
       <a href="mailto:YOUR_EMAIL@gmail.com?cc=YOUR_WORK_EMAIL@ulab.edu.bd">Email</a>
   </div>
   ```

---

## 🏠 How to Edit Your Bio on the Home Page (`index.html`)

If you want to update your biography or tagline on the Home Page:
1. Open `index.html` in your text editor.
2. To change the header tagline right beneath your name, locate:
   ```html
   <p class="font-subhead-serif text-lg md:text-2xl italic text-secondary max-w-3xl leading-relaxed">
       Academician and Journalist
   </p>
   ```
   Modify `Academician and Journalist` to whatever fits best!
3. To update your institutional titles (e.g. changing ULAB Faculty, BIGD Fellow, etc.), search for `BIGD Fellow` in the file and simply replace the text inside the boxes.

---

## 💎 Design Consistency Note
The headers of your **About**, **Academic**, and **Reportage** pages have been unified to use a gorgeous, matching **Editorial Design System**:
* Each has a small top label (like `Pedagogy & Scholarship` or `Dispatch & Features`).
* Each has a massive cinematic title where your second title word is elegantly outlined (e.g. *Usama Rafid*, *Portfolio*, *& Stories*).
* Each has a matching large italic serif subheading sentence. 

*If you ever want to change these main title headers, just search for the text in the respective file and type your edits. The elegant styles will stay perfectly applied!*
