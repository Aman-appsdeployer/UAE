import { ReactNode, Fragment, useState, useEffect } from "react";
import clsx from "clsx";
import { Globe, Menu, X } from "lucide-react";
import { Popover, Transition } from "@headlessui/react";
import { Button } from "./ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";
// import AppDownlaod from "./app-downlaod";
import { Link, useLocation } from "react-router-dom";

function MobileNavItem({
    href,
    children,
    disabled,
}: {
    href: string;
    children: ReactNode;
    disabled?: boolean;
}) {
    return (
        <li className={cn({ "pointer-events-none text-muted": disabled })}>
            <a href={href} className="block py-2">
                {children}
            </a>
        </li>
    );
}

function MobileNavigation() {
    return (
        <div className="flex gap-4 items-center md:hidden pointer-events-auto">
            <Select
                defaultValue="uae"
                onValueChange={(value) => {
                    if (value === "india") {
                        window.location.href = "https://in.nuqiwealth.com/";
                    } else {
                        window.location.href =
                            "https://uae.nuqiwealth.com/";
                    }
                }}
            >
                <SelectTrigger className="w-min">
                    <SelectValue className="-z-20">
                        <Globe />
                    </SelectValue>
                </SelectTrigger>
                <SelectContent className="w-min">
                    <SelectItem value="uae">
                        <img
                            className="max-w-6 mr-4 object-contain"
                            src="/uae.jpg"
                        />
                    </SelectItem>
                    <SelectItem value="india">
                        <img
                            className="max-w-6 mr-4 object-contain"
                            src="/india.jpg"
                        />
                    </SelectItem>
                </SelectContent>
            </Select>
            <Popover className="">
                <Popover.Button>
                    <Button variant="outline" size="icon">
                        <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    </Button>
                </Popover.Button>
                <Transition.Root>
                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                        >
                            <div className="flex flex-row-reverse items-center justify-between">
                                <Popover.Button
                                    aria-label="Close menu"
                                    className="-m-1 p-1"
                                >
                                    <X className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                                </Popover.Button>
                                {/* <h2 className="text-sm   font-bold text-zinc-600 dark:text-zinc-400">
                                Navigation
                            </h2> */}
                            </div>
                            <nav className="mt-6">
                                <ul className="-my-2   font-bold divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                    <MobileNavItem href="/">Home</MobileNavItem>
                                    <MobileNavItem href="/advisory">
                                        Advisory
                                    </MobileNavItem>
                                    <MobileNavItem href="/about">
                                        About
                                    </MobileNavItem>
                                    <MobileNavItem href="/iris">
                                        IRIS
                                    </MobileNavItem>
                                    <MobileNavItem href="/prive">
                                        PRIVE
                                    </MobileNavItem>
                                    <MobileNavItem href="/ethosphere">
                                        Ethosphere
                                    </MobileNavItem>
                                    <MobileNavItem href="/faqs">
                                        FAQ's
                                    </MobileNavItem>
                                    <MobileNavItem href="/press">
                                        Press
                                    </MobileNavItem>
                                    <MobileNavItem href="/contact">
                                        Contact Us
                                    </MobileNavItem>
                                </ul>
                            </nav>
                        </Popover.Panel>
                    </Transition.Child>
                </Transition.Root>
            </Popover>
        </div>
    );
}

function NavItem({
    href,
    children,
    isActive,
    onClick,
}: {
    href: string;
    children: ReactNode;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <li onClick={onClick}>
            <Link
                to={href}
                className={clsx(
                    "relative block px-3 py-2 transition text-[#F5DEB3] ",
                    isActive ? "bg-[#F5DEB3] text-black" : "bg-black text-[#F5DEB3]",
                    href=="/"?"rounded-s-full ps-4":"",
                    href=="/ethosphere"?"rounded-e-full pe-4":"",
                )}
            >
                {children}
            </Link>
        </li>
    );
}


function DesktopNavigation() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    return (
        <nav className="relative pointer-events-auto hidden md:block">
                {/* {activeTab == '/ethosphere' && <div className={`w-1/2 rounded-full absolute bg-[#F5DEB3] top-0 bottom-0 right-0 `}></div>}
            {activeTab == '/' && <div className={`w-1/2 absolute rounded-full bg-[#F5DEB3] top-0 bottom-0 left-0 `}></div>} */}


            <ul className="flex items-center  whitespace-nowrap  text-[0.95rem] font-semibold bg-transparent">
            
                <NavItem
                    href="/"
                    isActive={activeTab === "/"}
                    onClick={() => setActiveTab("/")}
                >
                    Home
                </NavItem>
                <NavItem
                    href="/advisory"
                    isActive={activeTab === "/advisory"}
                    onClick={() => setActiveTab("/advisory")}
                >
                    Advisory
                </NavItem>
                <NavItem
                    href="/prive"
                    isActive={activeTab === "/prive"}
                    onClick={() => setActiveTab("/prive")}
                >
                    Prive
                </NavItem>
                <NavItem
                    href="/iris"
                    isActive={activeTab === "/iris"}
                    onClick={() => setActiveTab("/iris")}
                >
                    IRIS
                </NavItem>
                <NavItem
                    href="/ethosphere"
                    isActive={activeTab === "/ethosphere"}
                    onClick={() => setActiveTab("/ethosphere")}
                >
                    Ethosphere
                </NavItem>
            </ul>
        </nav>
    );
}


function Home() {
    return (
        <div className="">
            <a href="/" aria-label="Home" className="pointer-events-auto">
                <img
                    src="/logo.png"
                    className="rounded-md h-12 w-24 object-contain"
                    alt="Nuqi Logo"
                />
            </a>
        </div>
    );
}

export function Navbar() {
    const [activeCountry, setActiveCountry] = useState<string>("uae");
    const handleCountryChange = (country: string) => {
        setActiveCountry(country);
        if (country === "india") {
            // window.location.href = "https://in.nuqiwealth.com/";
        } else {
            // window.location.href = "https://uae.nuqiwealth.com/";
        }
    };
    return (
        <div className="z-50 w-full fixed backdrop-blur-2xl">
            <header className=" relative z-50 container">
                <div className="relative flex gap-4 items-center py-4">
                    <div className=" relative flex flex-1">
                        <Home />
                    </div>
                    <div className="flex flex-1 justify-end md:justify-center ">
                        <MobileNavigation />
                        <DesktopNavigation />
                    </div>
                    <div className="justify-end hidden md:flex md:flex-1 items-center gap-4 ">
                        {/* <Select
                            defaultValue="uae"
                            onValueChange={(value) => {
                                if (value === "india") {
                                    window.location.href =
                                        "https://in.nuqiwealth.com/";
                                } else {
                                    window.location.href =
                                        "https://uae.nuqiwealth.com/";
                                }
                            }}
                        >
                            <SelectTrigger className="w-min">
                                <SelectValue className="-z-20">
                                    <Globe />
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="w-min">
                                <SelectItem value="uae">
                                    <img
                                        className="max-w-6 mr-4 object-contain"
                                        src="/uae.jpg"
                                    />
                                </SelectItem>
                                <SelectItem value="india">
                                    <img
                                        className="max-w-6 mr-4 object-contain"
                                        src="/india.jpg"
                                    />
                                </SelectItem>
                            </SelectContent>
                        </Select> */}
                        <div className="flex">
                            <div
                                onClick={() => handleCountryChange("india")}
                                className={`flex ps-2 cursor-pointer font-bold rounded-sm ${activeCountry === "india" ? 'bg-[#F5DEB3] text-black' : 'text-[#f8b539]'}`}
                            >
                                <p>India </p>
                                <img
                                    className="max-w-6 mx-2 object-contain"
                                    src="/india.jpg"
                                />
                            </div>
                            <div
                                onClick={() => handleCountryChange("uae")}
                                className={`flex ps-2 cursor-pointer font-bold rounded-sm ${activeCountry === "uae" ? 'bg-[#F5DEB3] text-black' : 'text-[#f8b539]'}`}
                            >
                                <p>UAE </p>
                                <img
                                    className="max-w-6 mx-2 object-contain"
                                    src="/uae.jpg"
                                />
                            </div>
                        </div>
                        {/* <AppDownlaod /> */}
                    </div>
                </div>
            </header>
        </div>
    );
}
