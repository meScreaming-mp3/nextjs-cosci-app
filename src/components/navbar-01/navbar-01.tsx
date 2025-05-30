import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const Navbar01Page = async () => {
  const session = await auth.api.getSession({
    headers:await headers()
  })

  return (
    <div className="h-16 bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
          <Link href="/cart">
            <Badge className="p-2 text-sm"><ShoppingBasket /> <CountCartItem /> item (s)</Badge>
          </Link>
            {!session && (
              <>
              <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/login">ลองเล่นกับระบบ</Link>
            </Button>
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/signup">สมัครสมาชิกก</Link>
            </Button>
              </>
            )}
            {
              session && (
                <>
                  <div>
                    Hello, {session.user.name}
                  </div>
                  <Button variant="destructive" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </>
              )
            }
            
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar01Page;
