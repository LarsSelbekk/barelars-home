import {useEffect, useState} from "react";

const useIsDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const query = window.matchMedia("(prefers-color-scheme: dark)")
        setIsDarkMode(query.matches)
        query.addEventListener("change", changeEvent => {
                setIsDarkMode(changeEvent.matches)
            }
        )
    }, [])

    return isDarkMode
}

export default useIsDarkMode
