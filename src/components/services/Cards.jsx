// import React, { useState } from "react";

// const Cards = () => {
//   const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded
//   const array = [
//     {
//       id: 1,
//       title: "Web Development",
//       title1: "Web Development1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 2,
//       title: "Web Development",
//       title1: "Web Development1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 3,
//       title: "Web Development",
//       title1: "Web Development1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 4,
//       title: "Web Development",
//       title1: "Web Development1",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//   ];

//   const handleExpand = (index) => {
//     if (expandedIndex === index) {
//       setExpandedIndex(-1); // Collapse the expanded box if clicked again
//     } else {
//       setExpandedIndex(index);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <div className="flex justify-center mx-auto max-w-[1560px]">
//           {array.map((item, index) => {
//             const isExpanded = expandedIndex === index;
//             return (
//               <div
//                 key={index}
//                 className={`relative p-8 ${
//                   isExpanded ? "w-96" : "w-44"
//                 } transition-width duration-300 ease-in-out`}
//                 style={{
//                   background: `linear-gradient(to right, #4f46e5, #964fe5)`,
//                   height: isExpanded ? "auto" : "20rem", // Set a fixed height for other boxes
//                 }}
//                 onClick={() => handleExpand(index)}
//               >
//                 <div
//                   className={`absolute ${
//                     isExpanded ? "top-4 left-4" : "bottom-20 left-10"
//                   } transform ${
//                     isExpanded ? "rotate-0" : "rotate-90"
//                   } transition-transform duration-300`}
//                   style={{ display: isExpanded ? "none" : "block" }}
//                 >
//                   {item.title}
//                 </div>
//                 <div
//                   className={`absolute top-20 left-10 transform transition-transform duration-300 ${
//                     isExpanded ? "rotate-0" : "rotate-90"
//                   }`}
//                   style={{ display: isExpanded ? "block" : "none", marginTop: isExpanded ? "1rem" : "0" }}
//                 >
//                   {item.title1}
//                 </div>
//                 {isExpanded && <div style={{ marginTop: "1rem" }}>{item.text}</div>}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

// import React, { useState } from "react";

// const Cards = () => {
//   const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded
//   const array = [
//     {
//       id: 1,
//       title: "Web Development",
//       title1: "Web Development",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 2,
//       title: "Web Development",
//       title1: "Web Development",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 3,
//       title: "Web Development",
//       title1: "Web Development",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//     {
//       id: 4,
//       title: "Web Development",
//       title1: "Web Development",
//       text:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
//     },
//   ];

//   const handleExpand = (index) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
//   };

//   return (
//     <div>
//       <div>
//         <div className="flex justify-center mx-auto max-w-[1560px] p-4">
//           {array.map((item, index) => {
//             const isExpanded = expandedIndex === index;
//             return (
//               <div
//                 key={index}
//                 className={`relative p-8 w-96 transition-width duration-1000 ease-in-out`}
//                 style={{
//                   background: `linear-gradient(to right, #4f46e5, #964fe5)`,
//                   height: "20rem", // Fixed height
//                   width: isExpanded ? "calc(100% - 32px)" : "calc(50% - 32px)", // Adjust width here
//                   marginBottom: "1rem", // Add margin between cards
//                 }}
//                 onClick={() => handleExpand(index)}
//               >
//                 <div
//                   className={`absolute ${
//                     isExpanded ? "top-4 left-4" : "bottom-20 left-10"
//                   } transform ${
//                     isExpanded ? "rotate-0" : "rotate-90"
//                   } transition-transform duration-300`}
//                   style={{ display: isExpanded ? "block" : "none" }} // Show title when expanded
//                 >
//                   {item.title}
//                 </div>
//                 <div
//                   className={`absolute top-20 left-10 transform transition-transform duration-1000 ${
//                     isExpanded ? "rotate-0" : "rotate-90"
//                   }`}
//                   style={{ display: isExpanded ? "none" : "block" }} // Hide title1 when expanded
//                 >
//                   {item.title1}
//                 </div>
//                 {isExpanded && (
//                   <div style={{ marginTop: "2rem" }}>{item.text}</div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import React, { useState } from "react";

const Cards = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track which card is expanded
  const array = [
    {
      id: 1,
      title: "Web Development",
      title1: "Web Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
    },
    {
      id: 2,
      title: "Web Development",
      title1: "Web Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
    },
    {
      id: 3,
      title: "Web Development",
      title1: "Web Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
    },
    {
      id: 4,
      title: "Web Development",
      title1: "Web Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non enim, commodi molestias labore facere esse libero. Repellat quae odit suscipit dolor, esse quaerat. Eveniet esse eos temporibus ab id.",
    },
  ];

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div>
      <div>
        <div className="flex justify-center mx-auto max-w-[1560px] p-4 max-[967px]:flex-col">
          {array.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`relative p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 transition-width duration-1000 ease-in-out`}
                style={{
                  background: `linear-gradient(to right, #4f46e5, #964fe5)`,
                  height: "20rem", // Fixed height
                  width: isExpanded ? "calc(100% - 8px)" : "calc(50% - 8px)", // Adjust width here
                  marginBottom: "1rem", // Add margin between cards
                }}
                onClick={() => handleExpand(index)}
              >
                <div
                  className={`absolute ${
                    isExpanded ? "top-4 left-4" : "bottom-20 left-4"
                  } transform ${
                    isExpanded ? "rotate-0" : "rotate-90"
                  } transition-transform duration-300`}
                  style={{ display: isExpanded ? "block" : "none" }} // Show title when expanded
                >
                  {item.title}
                </div>
                <div
                  className={`absolute top-20 left-4 transform transition-transform duration-1000 ${
                    isExpanded ? "rotate-0" : "rotate-90"
                  }`}
                  style={{ display: isExpanded ? "none" : "block" }} // Hide title1 when expanded
                >
                  {item.title1}
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "2rem" }}>{item.text}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
