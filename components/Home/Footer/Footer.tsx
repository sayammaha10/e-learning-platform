import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-16">
      <div className="px-6 lg:px-20 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/images/logo.png" alt="Logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="text-[14px] font-[400] flex flex-col gap-4 text-gray-500">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => {
                  const isEmail = link.value.includes("@");
                  const href = isEmail
                    ? `mailto:${link.value}`
                    : `tel:${link.value}`;

                  return (
                    <a
                      href={href}
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                      rel="noopener noreferrer"
                      aria-label={`${link.label}: ${link.value}`}
                    >
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="text-[14px] font-[600] whitespace-nowrap text-blue-700">
                        {link.value}
                      </p>
                    </a>
                  );
                })}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="text-[14px] font-[400] flex gap-4 text-gray-500">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-300" />
        <p className="text-[14px] font-[400] w-full text-center text-gray-500">
          &copy; {new Date().getFullYear()} Home Book Education | All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-[18px] font-[700] whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
