export const LS_getFontSize = () => {
    const fontSize = localStorage.getItem('font_size');
    return fontSize ? fontSize : 20;
}

export const LS_setFontSize = (fontSize) => {
    return localStorage.setItem('font_size', fontSize);
}

export const LS_getAutoTranscribe = () => {
    const auto_transcribe = localStorage.getItem('auto_transcribe');
    return auto_transcribe === "false" ? false : true;
}

export const LS_setAutoTranscribe = (bool) => {
    return localStorage.setItem('auto_transcribe', bool);
}

export const LS_getTheme = () => {
    const theme = localStorage.getItem('theme');
    return theme === 'dark' ? 'dark' : 'light';
}

export const LS_setTheme = (theme) => {
    return localStorage.setItem('theme', theme);
}

export const LS_setFontFamily = (font) => {
    return localStorage.setItem('font_family', font);
}

export const LS_getFontFamily = () => {
    const font = localStorage.getItem('font_family');
    
    switch(font) {
        case "Calibri":
            return "Calibri";
        case "Times New Roman":
            return "Times New Roman";
        case "Gulzar":
            return "Gulzar";
        case "IBM Plex Sans Arabic":
            return "IBM Plex Sans Arabic";
        default:
            return "Calibri";
    }
}