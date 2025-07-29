// import React from 'react'

// function CustomBtn({className}) {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 465 86" fill="none">
//             <path d="M405.587 1H11C5.47715 1 1 5.47715 1 11V75C1 80.5228 5.47716 85 11 85H454C459.523 85 464 80.5228 464 75V44.4711C464 41.1874 462.388 38.113 459.687 36.2456L411.274 2.77446C409.603 1.61896 407.619 1 405.587 1Z"
//                 fill="white" stroke="black" />
//                 <text x="40%" y="50%" text-anchor="middle" dominant-baseline="middle"
//                     font-size="18" font-weight="bold" fill="black" font-family="Arial, sans-serif">
//                     Placeholder Text
//                 </text>            
//             <path d="M389.5 1.5V84.5" stroke="#0D0C0C" />
//         </svg>
            
//     )
// }

// export default CustomBtn


const CustomBtn = ({ className }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        // width="100%"
        // height="100%"
        viewBox="0 0 465 86"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <path
          d="M405.587 1H11C5.47715 1 1 5.47715 1 11V75C1 80.5228 5.47716 85 11 85H454C459.523 85 464 80.5228 464 75V44.4711C464 41.1874 462.388 38.113 459.687 36.2456L411.274 2.77446C409.603 1.61896 407.619 1 405.587 1Z"
          fill="white"
          stroke="black"
        />
        <text
          x="232.5"
          y="43"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="19"
          fontFamily="Arial, sans-serif"
          fill="black"
          fontWeight="bold"
        >
          Placeholder Text
        </text>
        <path d="M389.5 1.5V84.5" stroke="#0D0C0C" />
      </svg>    );
  };
  
export default CustomBtn

