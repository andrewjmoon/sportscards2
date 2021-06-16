import Link from "next/link";

import CartSummary from "./CartSummary";


function Header() {
  return (
    <header className="md:absolute md:left-0 md:top-0 w-full z-10">
      <div className="py-3 lg:py-5 flex items-center">
        <Link href="/">
          <a title="Return to MoonBreaks">Shop</a>
        </Link>
        <span className="pr-1">,</span>
        <CartSummary />
      </div>
      
      <Link href="/">
        <a style={{fontSize:40}} title="Return to MoonBreaks">
          MoonBreaks - 
        </a>
      </Link>
      <div>
      A Place to Buy Sports Cards
      </div>
      <hr/>
    </header>
    
  );
}

export default Header;

