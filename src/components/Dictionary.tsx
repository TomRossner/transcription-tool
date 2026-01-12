import { useContext } from 'react';
import {TranscriptContext} from "../context/TranscriptContext"

const Dictionary = () => {
    const {theme} = useContext(TranscriptContext);

    const KeyboardKey = ({children}: {children: React.ReactNode}) => (
        <span className={`inline-flex items-center justify-center min-w-[28px] h-7 px-2 mx-0.5 py-1 rounded text-sm font-semibold shadow ${
            theme === "dark" 
                ? "bg-gray-700 text-white border border-gray-600" 
                : "bg-gray-100 text-gray-900 border border-gray-300"
        }`}>
            {children}
        </span>
    );

    const DictionaryEntry = ({keyText, value}: {keyText: string, value: string}) => {
        const renderKey = (key: string) => {
            if (key.includes('/')) {
                return <KeyboardKey>{key}</KeyboardKey>;
            }
            if (key.includes('+')) {
                const parts = key.split('+').map(p => p.trim());
                return (
                    <span className="flex items-center gap-1">
                        {parts.map((part, idx) => (
                            <span key={idx} className="flex items-center">
                                <KeyboardKey>{part}</KeyboardKey>
                                {idx < parts.length - 1 && <span className="mx-1 text-gray-500">+</span>}
                            </span>
                        ))}
                    </span>
                );
            }
            return <KeyboardKey>{key}</KeyboardKey>;
        };

        return (
            <div className="flex items-center gap-2" dir="rtl">
                <div className="flex items-center gap-1">
                    {renderKey(keyText)}
                </div>
                <span className="text-gray-400 font-bold">←</span>
                <span className="font-['Calibri'] font-medium text-base">{value}</span>
            </div>
        );
    };

    // Grouped dictionary entries - each group contains related entries
    const consonantGroups = [
        [
            {key: "א", value: "ا"},
            {key: "א'", value: "ء"},
            {key: "א×", value: "أ"},
            {key: "א־", value: "إ"},
            {key: "א~", value: "آ"},
            {key: "א֫", value: "ٱ"},
        ],
        [
            {key: "ב", value: "ب"},
            {key: "ב'", value: "ڤ"},
        ],
        [
            {key: "פ/ף", value: "ف"},
            {key: "פ'", value: "پ"},
        ],
        [
            {key: "ת", value: "ت"},
            {key: "ת'", value: "ث"},
        ],
        [
            {key: "ג'", value: "ج"},
            {key: "ג", value: "چ"},
        ],
        [
            {key: "ח", value: "ح"},
            {key: "ח'", value: "خ"},
        ],
        [
            {key: "ד", value: "د"},
            {key: "ד'", value: "ذ"},
        ],
        [
            {key: "ר", value: "ر"},
            {key: "ז", value: "ز"},
            {key: "ז'", value: "ژ"},
        ],
        [
            {key: "ס", value: "س"},
            {key: "ש", value: "ش"},
        ],
        [
            {key: "צ/ץ", value: "ص"},
            {key: "צ'/ץ'", value: "ض"},
        ],
        [
            {key: "ט", value: "ط"},
            {key: "ט'", value: "ظ"},
        ],
        [
            {key: "ע", value: "ع"},
            {key: "ע'", value: "غ"},
            {key: "ק", value: "ق"},
        ],
        [
            {key: "כ/ך", value: "ك"},
            {key: "כ'", value: "گ"},
        ],
        [
            {key: "ל", value: "ل"},
            {key: "מ/ם", value: "م"},
            {key: "נ/ן", value: "ن"},
        ],
        [
            {key: "ה", value: "ه"},
            {key: "ה'", value: "ة"},
        ],
        [
            {key: "ו", value: "و"},
            {key: "ו'", value: "ؤ"},
        ],
        [
            {key: "י", value: "ي"},
            {key: "י'", value: "ئ"},
            {key: "י־", value: "ى"},
        ],
    ];

    const vowelGroups = [
        [
            {key: "Alt + פ", value: "ـَـ"},
            {key: "Alt + ק", value: "ـًـ"},
        ],
        [
            {key: "Alt + ח", value: "ـِـ"},
            {key: "Alt + י", value: "ـٍـ"},
        ],
        [
            {key: "Alt + \\", value: "ـُـ"},
            {key: "Alt + ו", value: "ـٌـ"},
        ],
        [
            {key: "Alt + ש", value: "ـْـ"},
            {key: "Alt + ד", value: "ـّـ"},
            {key: "Alt + ר", value: "ـٰـ"},
        ],
    ];

    const renderGroup = (group: Array<{key: string, value: string}>) => (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {group.map((entry, idx) => (
                <DictionaryEntry key={idx} keyText={entry.key} value={entry.value} />
            ))}
        </div>
    );

    return (
        <div className={`border rounded-lg ${
            theme === "dark" 
                ? "bg-[rgba(255,255,255,0.8)] border-white/50" 
                : "bg-[rgba(0,0,0,0.05)] border-black/10"
        }`}>
            <div className={`px-3 sm:px-4 pt-3 sm:pt-4 pb-2 border-b w-full ${
                theme === "dark" ? "border-white/20" : "border-black/10"
            }`}>
                <h2 className={`text-lg sm:text-xl font-bold w-full flex justify-between items-center ${theme === "dark" ? "text-black" : "text-black"}`} dir="rtl">
                    <span>מילון</span>
                    <span className="font-bold">Dictionary</span>
                </h2>
            </div>
            <div className="overflow-y-auto text-black p-3 sm:p-4 max-h-[50vh] sm:max-h-[60vh]">
                <h3 className="text-black font-heebo font-bold mb-3 text-lg" dir="rtl">עיצורים:</h3>
                <div className="flex flex-col gap-2">
                    {consonantGroups.map((group, idx) => (
                        <div key={idx}>
                            {renderGroup(group)}
                        </div>
                    ))}
                </div>
                <h3 className="text-black font-heebo font-bold mb-3 mt-4 text-lg" dir="rtl">תנועות:</h3>
                <div className="flex flex-col gap-2">
                    {vowelGroups.map((group, idx) => (
                        <div key={idx}>
                            {renderGroup(group)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dictionary;
