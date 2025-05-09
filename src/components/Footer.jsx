import { SocialIconItems, SiteLinks, SocialIcon } from './SocialIcon'

export default function Footer() {
  return (
    <footer className="mx-auto w-full bg-black py-[3rem] px-[8rem] text-white">
      <div className="flex justify-between min-h-full">
        <div className="flex flex-col justify-between min-h-full">
          <header className="text-[5rem] font-bold">MOTO</header>
          <div>
            <p className="text-2xl mt-[6rem] font-medium">Follow our journey on social</p>
            <div className="flex gap-[2rem] mx-auto w-full mt-[2rem]">
              {SocialIconItems.map((item, index) => <SocialIcon {...item} key={index} />)}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end min-h-full">
          <div>
            <p className="text-3xl">Info</p>
            <div className="flex flex-col gap-4 my-[4rem]">
              {SiteLinks.map((item, index) => <a href={item.url} className="text-xl">{item.title}</a>)}
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium text-xl text-[#f7f7f7]">Hello@motodesign.cn</p>
            <p className="text-base text-[#f7f7f7]">© 2025 Moto Design LLC. A ll rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
