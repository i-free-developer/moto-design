import { SocialIconItems, SiteLinks, SocialIconLinkItem, LogoIconWhite } from './SocialIconsCollection'
import { CopyRight, CompanyEmail } from '../data/site-data'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="mx-auto w-full bg-black py-[8rem] px-[8rem] text-white z-200">
      <div className="flex justify-between min-h-full">
        <div className="flex flex-col justify-between min-h-full">
          <Link to="/"><LogoIconWhite/></Link>
          <div>
            <p className="text-2xl font-bold mt-[6rem] font-medium">Follow our journey on social</p>
            <div className="flex items-center gap-[2rem] mx-auto w-full mt-[2rem]">
              {SocialIconItems.map((item, index) => <SocialIconLinkItem {...item} key={index} color="white"/>)}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end min-h-full">
          <div>
            <p className="text-[1.75rem]">Info</p>
            <div className="flex flex-col gap-4 my-[4rem]">
              {/* {SiteLinks.map((item, index) => <a href={item.url} className="text-xl" key={index}>{item.title}</a>)} */}
              {SiteLinks.map((item, index) => <Link to={item.linkTo} className="text-xl" key={index}>{item.title}</Link>)}
            </div>
          </div>
          <div className="text-right font-medium">
            <p className="text-2xl text-[#ffffff]/40">{CompanyEmail}</p>
            <p className="text-xl text-[#f7f7f7]/40">{CopyRight}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}