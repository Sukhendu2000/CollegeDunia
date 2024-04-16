const colleges = [
  {
    cdrank: "#1",
    colleges: "IIT Madras - Indian Institute of Technology - [IITM]",
    collegeRank: "#3rd /131 in India",
    fees: 209550,
    userReviewRating: "Based on 289 Reviews - 8.6 /10",
    highestPackage: 254650,
    averagePackage: 200000000,
    location: "Chennai, Tamil Nadu",
    course: "B.Tech Computer Science Engineering",
    cutoff: "JEE-Advanced 2023 Cutoff: 144",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    cdrank: "#2",
    colleges: "IIT Delhi - Indian Institute of Technology [IITD]",
    collegeRank: "#1st /35 in India",
    fees: 209550,
    userReviewRating: "Based on 485 Reviews - 8.6 /10",
    highestPackage: 2582000,
    averagePackage: 200000000,
    location: "New Delhi, Delhi NCR",
    course: "B.Tech M.Tech Mathematics and Computing",
    cutoff: "JEE-Advanced 2023 Cutoff: 115",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    cdrank: "#3",
    colleges: "MIT - Massachusetts Institute of Technology",
    collegeRank: "#99th /147 in India",
    fees: 250000,
    userReviewRating: "Based on 23 Reviews - 9.3 /10",
    highestPackage: 3000000,
    averagePackage: 250000,
    location: "Cambridge, Massachusetts",
    course: "Computer Science and Engineering",
    cutoff: "SAT 2023 Cutoff: 1500",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    cdrank: "#4",
    colleges: "Stanford University",
    collegeRank: "#2nd /35 in India",
    fees: 280000,
    userReviewRating: "Based on 230 Reviews - 9.2 /10",
    highestPackage: 3500000,
    averagePackage: 270000,
    location: "Stanford, California",
    course: "Electrical Engineering",
    cutoff: "SAT 2023 Cutoff: 1480",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    cdrank: "#5",
    colleges: "Harvard University",
    collegeRank: "#4th /130 in India",
    fees: 300000,
    userReviewRating: "Based on 105 Reviews - 9.5 /10",
    highestPackage: 4000000,
    averagePackage: 280000,
    location: "Cambridge, Massachusetts",
    course: "Biomedical Engineering",
    cutoff: "SAT 2023 Cutoff: 1520",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    cdrank: "#6",
    colleges: "University of Oxford",
    collegeRank: "#98th /147 in India",
    fees: 200000,
    userReviewRating: "Based on 210 Reviews - 9.1 /10",
    highestPackage: 3200000,
    averagePackage: 260000,
    location: "Oxford, England",
    course: "Physics",
    cutoff: "A-levels 2023 Cutoff: AAA",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    cdrank: "#7",
    colleges: "ETH Zurich - Swiss Federal Institute of Technology",
    collegeRank: "#1st /40 in India",
    fees: 220000,
    userReviewRating: "Based on 350 Reviews - 9.0 /10",
    highestPackage: 3800000,
    averagePackage: 290000,
    location: "Zurich, Switzerland",
    course: "Mechanical Engineering",
    cutoff: "Swiss Matura 2023 Cutoff: 5.5",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    cdrank: "#8",
    colleges: "University of Tokyo",
    collegeRank: "#99th /131 in India",
    fees: 180000,
    userReviewRating: "Based on 70 Reviews - 9.8 /10",
    highestPackage: 3300000,
    averagePackage: 270000,
    location: "Tokyo, Japan",
    course: "Computer Engineering",
    cutoff: "University Entrance Exam 2023 Cutoff: 80%",
    applyLink: "→ Apply Now & Download Brochure",
    featured: false,
  },
  {
    cdrank: "#9",
    colleges: "California Institute of Technology (Caltech)",
    collegeRank: "#99th /141 in India",
    fees: 270000,
    userReviewRating: "Based on 300 Reviews - 9.2 /10",
    highestPackage: 3600000,
    averagePackage: 280000,
    location: "Pasadena, California",
    course: "Chemical Engineering",
    cutoff: "SAT 2023 Cutoff: 1500",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true,
  },
  {
    cdrank: "#10",
    colleges: "Massachusetts Institute of Technology (MIT)",
    collegeRank: "#3rd /131 in India",
    fees: 280000,
    userReviewRating: "Based on 150 Reviews - 9.4 /10",
    highestPackage: 3800000,
    averagePackage: 300000,
    location: "Cambridge, Massachusetts",
    course: "Aerospace Engineering",
    cutoff: "SAT 2023 Cutoff: 1550",
    applyLink: "→ Apply Now & Download Brochure",
    featured: true
},
{
  cdrank: "#11",
  colleges: "West Bengal University of technology",
  collegeRank: "#3rd /131 in India",
  fees: 209550,
  userReviewRating: "Based on 289 Reviews - 8.6 /10",
  highestPackage: 254650,
  averagePackage: 200000000,
  location: "Chennai, Tamil Nadu",
  course: "B.Tech Computer Science Engineering",
  cutoff: "JEE-Advanced 2023 Cutoff: 144",
  applyLink: "→ Apply Now & Download Brochure",
  featured: false,
},
{
  cdrank: "#12",
  colleges: "IIT Delhi - Indian Institute of Technology [IITD]",
  collegeRank: "#1st /35 in India",
  fees: 209550,
  userReviewRating: "Based on 485 Reviews - 8.6 /10",
  highestPackage: 2582000,
  averagePackage: 200000000,
  location: "New Delhi, Delhi NCR",
  course: "B.Tech M.Tech Mathematics and Computing",
  cutoff: "JEE-Advanced 2023 Cutoff: 115",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true,
},
{
  cdrank: "#13",
  colleges: "MIT - Massachusetts Institute of Technology",
  collegeRank: "#99th /147 in India",
  fees: 250000,
  userReviewRating: "Based on 300 Reviews - 9.3 /10",
  highestPackage: 3000000,
  averagePackage: 250000,
  location: "Cambridge, Massachusetts",
  course: "Computer Science and Engineering",
  cutoff: "SAT 2023 Cutoff: 1500",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true,
},
{
  cdrank: "#14",
  colleges: "Stanford University",
  collegeRank: "#2nd /35 in India",
  fees: 280000,
  userReviewRating: "Based on 230 Reviews - 9.2 /10",
  highestPackage: 3500000,
  averagePackage: 270000,
  location: "Stanford, California",
  course: "Electrical Engineering",
  cutoff: "SAT 2023 Cutoff: 1480",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true,
},
{
  cdrank: "#15",
  colleges: "Harvard University",
  collegeRank: "#4th /130 in India",
  fees: 300000,
  userReviewRating: "Based on 300 Reviews - 9.5 /10",
  highestPackage: 4000000,
  averagePackage: 280000,
  location: "Cambridge, Massachusetts",
  course: "Biomedical Engineering",
  cutoff: "SAT 2023 Cutoff: 1520",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true,
},
{
  cdrank: "#16",
  colleges: "University of Oxford",
  collegeRank: "#98th /147 in India",
  fees: 200000,
  userReviewRating: "Based on 380 Reviews - 9.1 /10",
  highestPackage: 3200000,
  averagePackage: 260000,
  location: "Oxford, England",
  course: "Physics",
  cutoff: "A-levels 2023 Cutoff: AAA",
  applyLink: "→ Apply Now & Download Brochure",
  featured: false,
},
{
  cdrank: "#17",
  colleges: "ETH Zurich - Swiss Federal Institute of Technology",
  collegeRank: "#1st /40 in India",
  fees: 220000,
  userReviewRating: "Based on 350 Reviews - 9.0 /10",
  highestPackage: 3800000,
  averagePackage: 290000,
  location: "Zurich, Switzerland",
  course: "Mechanical Engineering",
  cutoff: "Swiss Matura 2023 Cutoff: 5.5",
  applyLink: "→ Apply Now & Download Brochure",
  featured: false,
},
{
  cdrank: "#18",
  colleges: "University of Tokyo",
  collegeRank: "#99th /131 in India",
  fees: 180000,
  userReviewRating: "Based on 300 Reviews - 9.8 /10",
  highestPackage: 3300000,
  averagePackage: 270000,
  location: "Tokyo, Japan",
  course: "Computer Engineering",
  cutoff: "University Entrance Exam 2023 Cutoff: 80%",
  applyLink: "→ Apply Now & Download Brochure",
  featured: false,
},
{
  cdrank: "#19",
  colleges: "California Institute of Technology (Caltech)",
  collegeRank: "#99th /141 in India",
  fees: 270000,
  userReviewRating: "Based on 280 Reviews - 9.2 /10",
  highestPackage: 3600000,
  averagePackage: 280000,
  location: "Pasadena, California",
  course: "Chemical Engineering",
  cutoff: "SAT 2023 Cutoff: 1500",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true,
},
{
  cdrank: "#20",
  colleges: "Massachusetts Institute of Technology (MIT)",
  collegeRank: "#3rd /131 in India",
  fees: 280000,
  userReviewRating: "Based on 300 Reviews - 9.4 /10",
  highestPackage: 3800000,
  averagePackage: 300000,
  location: "Cambridge, Massachusetts",
  course: "Aerospace Engineering",
  cutoff: "SAT 2023 Cutoff: 1550",
  applyLink: "→ Apply Now & Download Brochure",
  featured: true
},
];

// Insert data into table rows and columns with data from array of objects
function insertColleges(colleges) {
  const tableBody = document.getElementById("table-body");

  colleges.forEach((college) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${college.cdrank}</td>
              <td>${college.colleges}</td>
              <td>${college.fees}</td>
              <td>${college.highestPackage}</td>
              <td>${college.averagePackage}</td>
              <td>${college.userReviewRating}</td>
              <td>${college.collegeRank}</td>
              ${college.featured ? '<td>Featured</td>' : '<td>NA</td>'}
          `;
    tableBody.appendChild(row);
  });
}

// Reset sorting 
const selects = document.getElementsByTagName("select");
for (let i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
}

// Sort table rows based on selected column

function sortTable(n, dir) {
const table = document.getElementById("table-body");
const rows = table.getElementsByTagName("tr");
const values = [];

for (let i = 0; i < rows.length; i++) {
    values.push(rows[i].getElementsByTagName("td")[n].textContent);
}

if(dir === "asc") {
    values.sort();
} else {
    values.sort();
    values.reverse();
}

for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < rows.length; j++) {
        if (rows[j].getElementsByTagName("td")[n].textContent === values[i]) {
            table.appendChild(rows[j]);
            break;
        }
    }
}
}

// Add event listeners to sorting selects
const sortByCollegedunia = document.getElementById("sort-by-collegedunia");
sortByCollegedunia.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(5, dir);
}
});
// Add event listeners to sorting selects and table rows when fees is selected
const sortByFees = document.getElementById("sort-by-fees");
sortByFees.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(1, dir);
}
});

// Add event listeners to sorting selects and table rows when user reviews is selected
const sortByUserReviews = document.getElementById("sort-by-user-reviews");
sortByUserReviews.addEventListener("change", function () {
const dir = this.value;
if (dir !== "") {
    sortTable(2, dir);
}
});

// Search colleges by name and display only those that match 
// the search query string passed to the function above and hide 
// the rest of the rows that do not match.
function searchColleges() {
  const input = document.getElementById("search");
  const filter = input.value.toUpperCase();
  const rows = document.getElementById("table-body").getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const td = rows[i].getElementsByTagName("td")[1];
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}

insertColleges(colleges);


// Infinite Scroll

function pic_scroll() {
  var containers = document.querySelectorAll('.table-wrapper');

  containers.forEach(function(container) {
      var table = container.querySelector('table');
      var tbody = table.querySelector('tbody');
      var rows = tbody.querySelectorAll('tr');
      
      var i = 1, l;
      var scrolling = setInterval(function() {
          l = container.scrollTop;
          if (l + container.clientHeight >= tbody.clientHeight) {
              // Append new rows when reaching the end
              for (let j = 0; j < rows.length; j++) {
                  tbody.appendChild(rows[j].cloneNode(true));
              }
          }
      }, 20);

      container.addEventListener('mouseover', function() {
          i = 0;
      });

      container.addEventListener('mouseout', function() {
          i = 1;
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  pic_scroll();
});
