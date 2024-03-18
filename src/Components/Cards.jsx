// import Card from "./Card";
// import React, { useState } from 'react'

// const Cards = (props) => {

    
    
    
//     console.log(props.category);
//     console.log(props.courses);

//     let category = props.category;
//     const [likedCourses, setLikedCourses] = useState([]);
//     //   let allCourse = [];
    
//     // It Returns list of all courses received from the api Response

//     // const getCourses = () => {
//     //     Object.values(props.courses).forEach((courseCategory) => {
//     //         courseCategory.forEach((course) => {
//     //             allCourse.push(course);
//     //         });
//     //     });
//     //     return allCourse;
//     // };
    
//     function getCourses(category) {
//         if (category === "All") {
//             let allCourses = [];
//             Object.values(props.courses).forEach((array) => {
//                 array.forEach((courseData) => {
//                     allCourses.push(courseData);
//                 });
//             });
//             return allCourses;
//         }
//         else
//         {
//             return props.courses[category];
//         }
//     }

//     //   console.log(allCourse);
//     const coursesForRendering = getCourses(category);
   
//     return (
       
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
//           {
//                 coursesForRendering.map((course) => (
//                     <Card
//                         key={course.id}
//                         course={course}
//                         likedCourses={likedCourses}
//                         setLikedCourses={setLikedCourses}
//                     />
//                 ))
//             }
//         </div>
//     );
// };

// export default Cards;

//-------------------------------------------------------------------------------------------------------------------------- 
import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    // Destructuring props to extract category and courses
    const { category, courses } = props;
    
    // Logging category and courses for debugging
    console.log("Category:", category);
    console.log("Courses:", courses);

    // Using useState hook for likedCourses
    const [likedCourses, setLikedCourses] = useState([]);

    // Function to get courses based on category
    function getCourses(category) {
        if (category === "All") {
            // If category is "All", flatten all courses
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            // If category is specific, return courses for that category
            return courses[category] || []; // Ensure it returns an empty array if category not found
        }
    }

    // Getting courses for rendering based on category
    const coursesForRendering = getCourses(category);

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {/* Rendering each course as a Card component */}
            {coursesForRendering.map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))}
        </div>
    );
};

export default Cards;
// ---------------------------------------------------------------------------------------------------------------------------------------



// import React, { useState } from 'react';
// import Card from "./Card";

// const Cards = (props) => {
//     console.log("Category:", props.category);
//     console.log("Courses:", props.courses);

//     const { category, courses } = props;
//     const [likedCourses, setLikedCourses] = useState([]);

//     function getCourses(category) {
//         console.log("Getting courses for category:", category);
//         if (category === "All") {
//             let allCourses = [];
//             Object.values(courses).forEach((array) => {
//                 array.forEach((courseData) => {
//                     allCourses.push(courseData);
//                 });
//             });
//             return allCourses;
//         } else {
//             return courses[category] || []; // Ensure it returns an empty array if category not found
//         }
//     }

//     const coursesForRendering = getCourses(category);
//     console.log("Courses for rendering:", coursesForRendering);

//     return (
//         <div className="flex flex-wrap justify-center gap-4 mb-4">
            // {
            //     coursesForRendering.map((course) => (
            //         <Card
            //             key={course.id}
            //             course={course}
            //             likedCourses={likedCourses}
            //             setLikedCourses={setLikedCourses}
            //         />
            //     ))
            // }
//         </div>
//     );
// };

// export default Cards;

