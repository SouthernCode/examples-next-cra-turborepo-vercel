// CustomLink.tsx

import React, { ReactNode, AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';

/**
 * CustomLinkProps are the props for the CustomLink component.
 * It extends AnchorHTMLAttributes to include any extra anchor properties.
 */
export interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * href is the URL for the link component.
     */
    href: string;
    /**
     * children are the elements inside the link.
     */
    children: ReactNode;
    /**
     * cra is a boolean flag that indicates whether to use React-Router-Dom Link (true) or Next.js Link (false).
     */
    cra?: boolean;

    /**
     * reloadDocument is a boolean flag that indicates whether to reload the document or not.
     */
    reloadDocument?: boolean;

    Link?: any;
}

/**
 * CustomLink is a custom link component that works with both Next.js and
 * React-Router-Dom. It renders a React-Router-Dom Link if the cra prop is true,
 * otherwise, it renders a Next.js Link.
 *
 * @example
 * // For Next.js
 * <CustomLink href="/about">About</CustomLink>
 *
 * // For React-Router-Dom
 * <CustomLink href="/about" cra={true}>About</CustomLink>
 *
 * @param {CustomLinkProps} props - The properties for the CustomLink component.
 * @returns {React.ReactElement} - The rendered link element.
 */
export const CustomLink: React.FC<CustomLinkProps> = ({ href, children, cra = false, reloadDocument = false, Link, ...rest }) => {
    if (cra && Link) {
        return (
            <Link to={href} reloadDocument={reloadDocument} {...rest}>
                {children}
            </Link>
        );
    }

    return (
        <NextLink href={href} {...rest}>
            {children}
        </NextLink>
    );
};


