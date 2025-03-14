import React, { type ReactNode } from "react";

type ThemesProps = {
    children: ReactNode;
};

export const Themes: React.FC<ThemesProps> = ({ children }) => {
    const date = new Date().getDate();
    const isEven = 0;

    const themeClass = isEven
        ? "bg-gray-50 text-black rounded-lg"
        : "bg-gray-700 text-black rounded-lg";

    return (
        <div className={`${themeClass}`}>
            <div>{children}</div>
        </div>
    );
};

export const CardThemes: React.FC<ThemesProps> = ({ children }) => {
    const date = new Date().getDate();
    const isEven = 0;

    const themeClass = isEven
        ? "bg-gray-100 text-black rounded-lg border-3 border-lime-700"
        : "bg-gray-500 text-black rounded-lg border-3 border-yellow-100";

    return (
        <div className={`${themeClass}`}>
            <div>{children}</div>
        </div>
    );
};

export const HeaderThemes: React.FC<ThemesProps> = ({ children }) => {
    const date = new Date().getDate();
    const isEven = 0;

    const themeClass = isEven
        ? "bg-red-500 text-gray-100 font-bold"
        : "bg-gray-400 text-black font-bold";

    return (
        <div className={`${themeClass}`}>
            <div>{children}</div>
        </div>
    );
};

export const FooterThemes: React.FC<ThemesProps> = ({ children }) => {
    const date = new Date().getDate();
    const isEven = 0;

    const themeClass = isEven
        ? "bg-red-500 text-black font-bold"
        : "bg-gray-400 text-black font-bold";

    return (
        <div className={`${themeClass}`}>
            <div>{children}</div>
        </div>
    );
};

export const WorkThemes: React.FC<ThemesProps> = ({ children }) => {
    const date = new Date().getDate();
    const isEven = 0;

    const themeClass = isEven
        ? "text-gray-800"
        : "text-gray-200";

    return (
        <div className={`${themeClass}`}>
            <div>{children}</div>
        </div>
    );
};
