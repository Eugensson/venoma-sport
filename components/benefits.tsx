// import Image from "next/image";

// import { benefitsData } from "@/lib/data";

// export const Benefits = () => {
//   return (
//     <section className="relative mt-24 pt-18 min-h-135 bg-benefits bg-cover bg-no-repeat overflow-hidden">
//       <div className="container mx-auto flex flex-col">
//         <ul className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-48 text-grey-300">
//           {benefitsData.map((group, i) => (
//             <li key={i} className="flex-1 flex flex-col gap-6 w-full max-w-90">
//               {group.items.map((item, j) => (
//                 <div key={j}>
//                   <div
//                     className={`mb-4 flex items-center gap-2 ${
//                       item.alignRight ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     <Image
//                       src={item.icon}
//                       width={24}
//                       height={24}
//                       alt={item.alt}
//                     />
//                     <h3 className="uppercase font-bold text-white">
//                       {item.title}
//                     </h3>
//                   </div>
//                   <p
//                     className={`${item.alignRight ? "xl:text-right" : ""} ${
//                       item.extraClasses || ""
//                     }`}
//                   >
//                     {item.text}
//                   </p>
//                 </div>
//               ))}
//             </li>
//           ))}
//         </ul>

//         <div className="w-full h-70 xl:h-auto xl:absolute top-0 left-0 bottom-0 right-0">
//           <div className="absolute -bottom-56 w-full h-full bg-benefitsLogo bg-bottom bg-no-repeat" />
//           <div className="relative w-full h-full flex items-end justify-center">
//             <Image
//               src="/assets/img/benefits/s1.png"
//               width={916}
//               height={604}
//               alt="Benefits"
//               className="absolute z-50 xl:top-16"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import Image from "next/image";

import { BenefitItem } from "@/components/benefit-item";

import { benefitsData } from "@/lib/data";

export const Benefits = () => {
  return (
    <section className="relative mt-24 pt-18 min-h-135 bg-benefits bg-cover bg-no-repeat overflow-hidden">
      <div className="container mx-auto flex flex-col">
        <ul className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-48 text-grey-300">
          {benefitsData.map((group, i) => (
            <li key={i} className="flex-1 flex flex-col gap-6 w-full max-w-90">
              {group.items.map((item, j) => (
                <BenefitItem key={j} {...item} />
              ))}
            </li>
          ))}
        </ul>

        <div className="w-full h-70 xl:h-auto xl:absolute top-0 left-0 bottom-0 right-0">
          <div className="absolute -bottom-56 w-full h-full bg-benefitsLogo bg-bottom bg-no-repeat" />
          <div className="relative w-full h-full flex items-end justify-center">
            <Image
              src="/assets/img/benefits/s1.png"
              width={916}
              height={604}
              alt="Benefits"
              className="absolute z-50 xl:top-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
