import * as React from "react";

import "./Banner.scss";

interface BannerProps {
    children?: React.ReactNode;
    text?: string;
}

export default function Banner(props: BannerProps) {
    const {children, text} = props;

    return (
        <div className="banner">
            <div className="banner-content">
                {children || <h2>{text}</h2>}
            </div>
        </div>
    );
}