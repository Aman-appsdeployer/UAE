// import { blogs } from "@/lib/blogs";
// import BlogCard from "../blog-card"
// import { useMemo, useState } from "react";
// // import { ChevronDown } from "lucide-react";
// import '../../styles/ethosphere.css'

// // import {
// //     Select,
// //     SelectContent,
// //     SelectItem,
// //     SelectTrigger,
// //     SelectValue,
// // } from "../ui/select";

// const Ethosphere = () => {

//     const [selectedYear, setSelectedYear] = useState<string>("2024");
//     const [selectedMonth, setSelectedMonth] = useState<string>("none");
//     const yearOptions = [
//         // { label: "2023", value: "2023" },
//         { label: "2024", value: "2024" },
//         // { label: "2025", value: "2025" },

//     ];

//     const monthOptions = [
//         { label: "All", value: "none" },
//         { label: "Jan", value: "January" },
//         { label: "Feb", value: "February" },
//         { label: "March", value: "March" },
//         { label: "April", value: "April" },
//         { label: "May", value: "May" },
//         { label: "June", value: "June" },
//         { label: "July", value: "July" },
//         { label: "Aug", value: "August" },
//         { label: "Sept", value: "September" },
//         { label: "Oct", value: "October" },
//         { label: "Nov", value: "November" },
//         { label: "Dec", value: "December" }
//     ];



//     const filterBlogs = useMemo(() => {
//         return selectedMonth === "none" ? blogs.filter((blog) => blog.date.includes(selectedYear)) : blogs.filter((blog) => blog.date.includes(selectedYear) && blog.date.includes(selectedMonth));
//     }, [selectedYear, selectedMonth])

//     return (
//         <div className="max-w-screen">
//             <div className="px-4 pt-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl pb-5 font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl">
//                         Ethosphere
//                     </h2>
//                     {/* <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
//                         Uncover Your Ethical Investing Journey: Explore Nuqi's
//                         Universe of 4000+ Ethical Global & Indian Stocks | ETF's
//                     </p> */}
//                 </div>
//             </div>
//             <div className="flex flex-col justify-center items-center mt-20 mx-4">
//                 <div className="w-full overflow-x-auto flex flex-row justify-start gap-1 sm:gap-5 container ">
//                     {yearOptions.map((year, i) => (
//                         <button
//                             key={i}
//                             onClick={() => setSelectedYear(year.value)}
//                             className={`md:col-start-2 inline-flex h-8 lg:text-sm text-xs animate-shimmer items-center justify-center rounded-md border border-slate-800 px-4 sm:px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"  ${selectedYear === year.value ? 'bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] text-slate-100' : ''}`}
//                         >
//                             {year.label}
//                             {/* portfolio home search portanalysis  */}
//                         </button>
//                     ))}

//                     {/* <Select
//                         defaultValue={selectedMonth}
//                         onValueChange={(value) => setSelectedMonth(value)}
//                     >
//                         <SelectTrigger className="w-fit h-8 mr-2">
//                             <SelectValue className="-z-20">
//                                 <div className="flex flex-row rounded-2xl items-center">
//                                     {selectedMonth === "none" ? "All Month" : selectedMonth} <ChevronDown className="w-5 h-5" />
//                                 </div>
//                             </SelectValue>
//                         </SelectTrigger>
//                         <SelectContent className="w-min">
//                             {
//                                 monthOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
//                             }
//                         </SelectContent>
//                     </Select>
//                     <Select
//                         defaultValue={selectedYear}
//                         onValueChange={(value) => setSelectedYear(value)}
//                     >
//                         <SelectTrigger className="w-fit h-8">
//                             <SelectValue className="-z-20">
//                                 <div className="flex flex-row rounded-2xl items-center">
//                                     {selectedYear} <ChevronDown className="w-5 h-5" />
//                                 </div>
//                             </SelectValue>
//                         </SelectTrigger>
//                         <SelectContent className="w-min">
//                             {
//                                 yearOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
//                             }
//                         </SelectContent>
//                     </Select> */}
//                 </div>
//                 <div id="monthscrollbar" className="w-full flex flex-row justify-start gap-1 overflow-x-auto container mx-50 py-4 mt-2">
//                     {monthOptions.map((month, i) => {
//                         return (
//                             <button
//                                 key={i}
//                                 onClick={() => setSelectedMonth(month.value)}
//                                 className={`md:col-start-2 inline-flex h-4 lg:text-sm text-xs animate-shimmer items-center justify-center  border-e border-slate-800 px-1   transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"  ${selectedMonth === month.value ? ' text-gold' : 'text-stone-950'}`}
//                             >{month.label}</button>
//                         )
//                     })}

//                 </div>
//                 <div className="grid md:grid-cols-3 grid-cols-1 mt-5 container gap-4">
//                     {filterBlogs.reverse().map((blog) => (
//                         <BlogCard key={blog.id} blog={blog} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ethosphere;

import { useMemo, useState } from "react";
import { blogs } from "@/lib/blogs";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import '../../styles/ethosphere.css';
import { ChevronDown } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { SparklesCore } from "../ui/sparkles";

const Ethosphere = () => {
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [selectedMonth, setSelectedMonth] = useState<string>("none");

    const yearOptions = [
        { label: "2024", value: "2024" },
    ];

    const monthOptions = [
        { label: "All", value: "none" },
        { label: "January", value: "January" },
        { label: "February", value: "February" },
        { label: "March", value: "March" },
        { label: "April", value: "April" },
        { label: "May", value: "May" },
        { label: "June", value: "June" },
        { label: "July", value: "July" },
        { label: "August", value: "August" },
        { label: "September", value: "September" },
        { label: "October", value: "October" },
        { label: "November", value: "November" },
        { label: "December", value: "December" }
    ];

    const filterBlogs = useMemo(() => {
        const filteredBlogs = selectedMonth === "none"
            ? blogs.filter((blog) => blog.date.includes(selectedYear))
            : blogs.filter((blog) => blog.date.includes(selectedYear) && blog.date.includes(selectedMonth));
        return filteredBlogs.reverse();
    }, [selectedYear, selectedMonth]);

    const blogCards = filterBlogs.map((blog, index) => (
        <Card
            key={blog.id}
            index={index}
            card={{
                src: blog.image,
                edition: blog.id,
                title: blog.heading,
                description: blog.description,
                date: blog.date,
                path: blog.path
            }}
        />
    ));

    return (
        <div className="max-w-screen">

            <div className="h-[10rem] w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h2 className="text-3xl pb-5 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Ethosphere
                </h2>
                <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#030F26"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-20 mx-4">
                <div className="w-full overflow-x-auto flex flex-row justify-start gap-1 sm:gap-5 container mb-4">

                    <Select
                        defaultValue={selectedYear}
                        onValueChange={(value) => setSelectedYear(value)}
                    >
                        <SelectTrigger className="w-fit h-8">
                            <SelectValue className="-z-20">
                                <div className="flex flex-row rounded-2xl items-center">
                                    {selectedYear} <ChevronDown className="w-5 h-5" />
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="w-min">
                            {
                                yearOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                    <Select
                        defaultValue={selectedMonth}
                        onValueChange={(value) => setSelectedMonth(value)}
                    >
                        <SelectTrigger className="w-fit h-8 mr-2">
                            <SelectValue className="-z-20">
                                <div className="flex flex-row rounded-2xl items-center">
                                    {selectedMonth === "none" ? "All Month" : selectedMonth} <ChevronDown className="w-5 h-5" />
                                </div>
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="w-min">
                            {
                                monthOptions.map(({ label, value }) => <SelectItem value={value}>{label}</SelectItem>)
                            }
                        </SelectContent>
                    </Select>
                </div>
                {/* <div id="monthscrollbar" className="w-full flex flex-row justify-start gap-1 overflow-x-auto container mx-50 py-4 mt-2">
                    {monthOptions.map((month, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedMonth(month.value)}
                            className={`md:col-start-2 inline-flex h-4 lg:text-sm text-xs animate-shimmer items-center justify-center border-e border-slate-800 px-1 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" ${selectedMonth === month.value ? ' text-gold' : 'text-stone-950'}`}
                        >
                            {month.label}
                        </button>
                    ))}
                </div> */}
                <Carousel items={blogCards} />
            </div>
        </div>
    );
};

export default Ethosphere;

