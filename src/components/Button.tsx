import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  link: LinkField;
  children?: string | null;
  className?: string;
};

export default function Button({ link, children, className }: Props) {
  return (
    <PrismicNextLink
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
      field={link}
    >
      {children}
    </PrismicNextLink>
  );
}
