export const LS_getFontSize = () => {
    return localStorage.getItem('font_size');
}

export const LS_setFontSize = (fontSize) => {
    return localStorage.setItem('font_size', fontSize);
}

export const LS_getAutoTranscribe = () => {
    const auto_transcribe = localStorage.getItem('auto_transcribe');
    return auto_transcribe === "true" ? true : false;
}

export const LS_setAutoTranscribe = (bool) => {
    return localStorage.setItem('auto_transcribe', bool);
}