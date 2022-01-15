import React, { createContext, useContext, useState, useEffect } from "react";

const lang = "cs"

export const LocaleContext = createContext({
    localeMode: lang,
    toggleLocaleMode: () => {}
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState(lang);

    const toggle = () => {
        const lang = locale === "en" ? "cs" : "en";
        setLocale(lang);
        window.localStorage.setItem("lang", lang);
    };

    return (
        <LocaleContext.Provider
            value={{ localeMode: locale, toggleLocaleMode: toggle }}
        >
            {children}
        </LocaleContext.Provider>
    );
};
