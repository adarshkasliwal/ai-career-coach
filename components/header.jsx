

import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

const Header = async() => {
    await checkUser()
    return (
        <header className='fixed bg-background/80 backdrop-blur-md top-0 w-full border-b border-gray-500
     x-50 supports-[backdrop-filter]:bg-background z-50'>
            <nav className='container mx-auto px-0 h-16 flex items-center justify-between'>
                <Link href='/'>
                    <Image
                        src="careergenie_logo_4.svg"
                        alt="CareerGenie"
                        width={200}
                        height={90}
                        className="h-20 py-1 w-auto object-contain"
                    />
                </Link>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button variant="outline" className="flex items-center gap-2">
                                <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
                                <span className='hidden md:block'>Industry Insights</span>
                            </Button>
                        </Link>
                    

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>                          
                            <Button variant="default" className="flex items-center gap-2">
                            <StarsIcon className="h-4 w-4 text-muted-foreground" />
                            <span className='hidden md:block'>Growth Tools</span>
                            <ChevronDown className="h-4 w-4"/>
                        </Button></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className="flex items-center gap-2">
                                     <FileText className="h-4 w-4 text-muted-foreground" />
                                    <span>Build Resume</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                                    <PenBox className="h-4 w-4 text-muted-foreground" />
                                    <span>Cover Letter</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={"/interview"} className="flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                    <span>Interview Prep</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SignedIn>

            <SignedOut>
                <SignInButton>
                    <Button variant="outline">
                        Sign In
                    </Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton 
                appearance={{
                    elements:{
                        avatarBox:"w-10 h-10",
                        userButtonPopoverCard:"shadow-xl",
                        userPreviewMainIdentifier:"font-semibold",
                    },
                }}
                afterSignOutUrl='/'
                />
            </SignedIn>
                </div>

            </nav>

        </header>
    )
}

export default Header